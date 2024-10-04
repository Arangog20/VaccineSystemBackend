import { ChildEntity } from "src/children/entities/child.entity";
import { DepartmentEntity } from "src/department/entities/department.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('municipalities')
export class MunicipalityEntity {
  @PrimaryGeneratedColumn()
  municipality: number;

  @Column()
  name: string;

  @ManyToOne(() => DepartmentEntity, department => department.municipalities)
  department: DepartmentEntity;

  @OneToMany(() => ChildEntity, child => child.municipality)
  children: ChildEntity[];
}
