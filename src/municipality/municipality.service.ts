import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MunicipalityEntity } from './entities/municipality.entity';
import { Repository } from 'typeorm';
import { DepartmentEntity } from 'src/department/entities/department.entity';
import { ChildrenService } from 'src/children/children.service';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectRepository(MunicipalityEntity)
    private municipalityRepository: Repository<MunicipalityEntity>,

    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,

    private readonly childrenService: ChildrenService,
  ) {}

  async create(
    createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<MunicipalityEntity> {
    createMunicipalityDto.name = createMunicipalityDto.name
      .trim()
      .toLowerCase();
    const { name, departmentId } = createMunicipalityDto;

    const department = await this.departmentRepository.findOne({
      where: { id: departmentId },
    });

    if (!department) {
      throw new NotFoundException(
        `Department with id ${departmentId} not found`,
      );
    }

    const municipalityFind = this.municipalityRepository.create({
      name,
      department,
    });

    return this.municipalityRepository.save(municipalityFind);
  }

  async calculateAverageAge(municipalityId: number): Promise<string> {
    const municipality = await this.findOneMunicipality(municipalityId);

    if (!municipality.children || municipality.children.length === 0) {
      return 'no hay niños';
    }

    const totalAge = municipality.children.reduce((sum, child) => {
      const age = this.childrenService.validateChildAge(child.birthday);
      return sum + age;
    }, 0);

    const averageAge = totalAge / municipality.children.length;
    return `El promedio de edad de los nichos es ${averageAge}`;
  }

  async findAll(): Promise<MunicipalityEntity[]> {
    return await this.municipalityRepository.find({
      relations: ['department', 'children'],
    });
  }

  async findOneMunicipality(municipality: number): Promise<MunicipalityEntity> {
    const municipalityfind = await this.municipalityRepository.findOne({
      where: { municipality },
      relations: ['department', 'children'],
    });
    if (!municipality) {
      throw new NotFoundException(
        `Municipality with id ${municipality} not found`,
      );
    }
    return municipalityfind;
  }
}
