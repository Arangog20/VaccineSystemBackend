import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from './entities/department.entity';
import { MunicipalityEntity } from 'src/municipality/entities/municipality.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DepartmentEntity, MunicipalityEntity])
  ],
    exports: [],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
