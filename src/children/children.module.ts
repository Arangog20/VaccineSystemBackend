import { Module } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { ChildrenController } from './children.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildEntity } from './entities/child.entity';
import { VaccineEntity } from 'src/vaccine/entities/vaccine.entity';
import { MunicipalityEntity } from 'src/municipality/entities/municipality.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ChildEntity, VaccineEntity, MunicipalityEntity])],
  controllers: [ChildrenController],
  providers: [ChildrenService],
})
export class ChildrenModule {}
