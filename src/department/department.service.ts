import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentEntity } from './entities/department.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ) {}

 
  async create(createDepartment: CreateDepartmentDto): Promise<DepartmentEntity> {
    createDepartment.name = createDepartment.name.trim().toLowerCase();


    const existingDepartment = await this.departmentRepository.findOne({
      where: { name: createDepartment.name },
    });

    if (existingDepartment) {
      throw new HttpException(
        'Departamento ya registrado',
        HttpStatus.CONFLICT,
      );
    }

    const newDepartment = this.departmentRepository.create({
      name: createDepartment.name,
    });

    return await this.departmentRepository.save(newDepartment);
  }


  async findAll(): Promise<DepartmentEntity[]> {
    const departments = await this.departmentRepository.find({ relations: ['municipalities'] });

    if (!departments || departments.length === 0) {
      throw new HttpException(
        'No se encontraron departamentos',
        HttpStatus.NOT_FOUND,
      );
    }

    return departments;
  }

  
   async findOne(name: string): Promise<DepartmentEntity> {
    const department = await this.departmentRepository.findOne({
      where: { name: name },
      relations: ['municipalities'],
    });

    if (!department) {
      throw new HttpException('Departamento no encontrado', HttpStatus.NOT_FOUND);
    }

    return department;
  }

  
  

}