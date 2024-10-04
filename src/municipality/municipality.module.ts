import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalityEntity } from './entities/municipality.entity';
import { DepartmentEntity } from 'src/department/entities/department.entity';
import { ChildEntity } from 'src/children/entities/child.entity';
import { ChildrenService } from 'src/children/children.service';

@Module({
  imports:[TypeOrmModule.forFeature([MunicipalityEntity,DepartmentEntity,ChildEntity])],
  controllers: [MunicipalityController],
  providers: [MunicipalityService, ChildrenService],
  exports: [TypeOrmModule],
})
export class MunicipalityModule {}
