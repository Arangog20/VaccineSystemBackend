import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ChildrenModule } from './children/children.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { DepartmentModule } from './department/department.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { ChildEntity } from './children/entities/child.entity';
import { MunicipalityEntity } from './municipality/entities/municipality.entity';
import { DepartmentEntity } from './department/entities/department.entity';
import { VaccineEntity } from './vaccine/entities/vaccine.entity';
import { ChildrenController } from './children/children.controller';
import { MunicipalityController } from './municipality/municipality.controller';
import { DepartmentController } from './department/department.controller';
import { ChildrenService } from './children/children.service';
import { MunicipalityService } from './municipality/municipality.service';
import { DepartmentService } from './department/department.service';
import { VaccinesController } from './vaccine/vaccine.controller';
import { VaccinesService } from './vaccine/vaccine.service';


@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [ChildEntity, MunicipalityEntity, DepartmentEntity, VaccineEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([ChildEntity, MunicipalityEntity, DepartmentEntity, VaccineEntity]),
    ChildrenModule,
    VaccineModule,
    DepartmentModule,
    MunicipalityModule,
  ],
   controllers: [ChildrenController, MunicipalityController, DepartmentController, VaccinesController],
  providers: [ChildrenService, MunicipalityService, DepartmentService, VaccinesService],
})
export class AppModule {}
