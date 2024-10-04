import { Module } from '@nestjs/common';
import { VaccinesService } from './vaccine.service';
import { VaccinesController } from './vaccine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineEntity } from './entities/vaccine.entity';
import { ChildEntity } from 'src/children/entities/child.entity';
import { ChildrenService } from 'src/children/children.service';
import { MunicipalityModule } from 'src/municipality/municipality.module';

@Module({
  imports:[TypeOrmModule.forFeature([VaccineEntity, ChildEntity]),
  MunicipalityModule
],
  controllers: [VaccinesController],
  providers: [VaccinesService, ChildrenService],
})
export class VaccineModule {}
