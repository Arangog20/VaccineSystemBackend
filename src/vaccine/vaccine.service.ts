import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { VaccineEntity } from './entities/vaccine.entity';
import { ChildEntity } from 'src/children/entities/child.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildrenService } from 'src/children/children.service';

@Injectable()
export class VaccinesService {
  constructor(
    @InjectRepository(VaccineEntity)
    private readonly vaccineRepository: Repository<VaccineEntity>,
    
    @InjectRepository(ChildEntity)
    private readonly childRepository: Repository<ChildEntity>,

    private readonly childService: ChildrenService, 


  ) {}

  async create(createVaccineDto: CreateVaccineDto): Promise<VaccineEntity> {
    const vaccine = this.vaccineRepository.create(createVaccineDto);
    return await this.vaccineRepository.save(vaccine);
  }

  async addVaccineToChild(childId: number, vaccineId: number): Promise<ChildEntity> {
    const child = await this.childService.findOne(childId);
    const vaccine = await this.findOne(vaccineId);

    const childAge = this.childService.validateChildAge(child.birthday);
    this.validateVaccineAgeRestrictions(childAge, vaccine); 

    if (child.vaccines.some(v => v.id === vaccine.id)) {
      throw new NotFoundException(`La vacuna con id ${vaccineId} ya está asociada al niño con id ${childId}`);
    }

    child.vaccines.push(vaccine);
    
    return await this.childRepository.save(child);
  }


  validateVaccineAgeRestrictions(childAge: number, vaccine: VaccineEntity): void {
    if (childAge < vaccine.minAge) {
      throw new HttpException(
        `El niño es demasiado joven para recibir la vacuna. Edad mínima requerida: ${vaccine.minAge} años.`,
        HttpStatus.BAD_REQUEST
      );
    }
    
    if (vaccine.maxAge && childAge > vaccine.maxAge) {
      throw new HttpException(
        `El niño es demasiado mayor para recibir la vacuna. Edad máxima permitida: ${vaccine.maxAge} años.`,
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findOne(id: number): Promise<VaccineEntity>{
    const vaccine = await this.vaccineRepository.findOne({
      where: { id },
      relations: ['children'], 
    });
    if(!vaccine){
      throw new HttpException(`vaccine with id ${id}`,HttpStatus.NOT_FOUND)
    }
    return vaccine;
  }
}