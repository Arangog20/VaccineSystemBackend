import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { ChildEntity } from './entities/child.entity';
import { MunicipalityEntity } from 'src/municipality/entities/municipality.entity';
import { VaccineEntity } from 'src/vaccine/entities/vaccine.entity';


@Injectable()
export class ChildrenService {

  constructor(
    @InjectRepository(ChildEntity)
    private readonly childRepository: Repository<ChildEntity>,
    
    @InjectRepository(MunicipalityEntity)
    private readonly municipalityRepository: Repository<MunicipalityEntity>,
  ) {}

  
  async create(createChildDto: CreateChildDto): Promise<ChildEntity> {
    const { name, birthday, municipalityId } = createChildDto;

    const validateAge = await this.validateChildAge(birthday);

    if (validateAge > 13){
      throw new HttpException('El usurio es mayor de 13 años', HttpStatus.FORBIDDEN);
    }

  
    const municipality = await this.municipalityRepository.findOne({
      where: { municipality: municipalityId }, 
    });
    if (!municipality) {
      throw new NotFoundException('Municipio no encontrado');
    }

    const child = this.childRepository.create({
      name,
      birthday,
      municipality,
    });
    return await this.childRepository.save(child);
  }

  validateChildAge(birthday: Date): number{
    const currentDate = new Date();
    const ageInYears = currentDate.getFullYear() - birthday.getFullYear();
    return ageInYears
  }


  async findAll(): Promise<ChildEntity[]> {
    return await this.childRepository.find({
      relations: ['municipality', 'vaccines'],
    });
  }

  async findOne(id: number): Promise<ChildEntity>{
    const vaccine = await this.childRepository.findOne({
      where: { id },
      relations: ['vaccines','municipality'], 
    });
    if(!vaccine){
      throw new HttpException(`vaccine with id ${id}`,HttpStatus.NOT_FOUND)
    }
    return vaccine;
    }



  remove(id: number) {
    return `This action removes a #${id} child`;
  }
}
