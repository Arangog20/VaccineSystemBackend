import { MunicipalityEntity } from "src/municipality/entities/municipality.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('departments')
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => MunicipalityEntity, municipalities =>municipalities.department)
  municipalities: MunicipalityEntity[];
}
