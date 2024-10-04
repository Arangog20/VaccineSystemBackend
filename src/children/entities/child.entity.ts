import { MunicipalityEntity } from "src/municipality/entities/municipality.entity";
import { VaccineEntity } from "src/vaccine/entities/vaccine.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('children')
export class ChildEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @ManyToOne(() => MunicipalityEntity, municipality => municipality.children)
  municipality: MunicipalityEntity;


  @ManyToMany(() => VaccineEntity, vaccine => vaccine.children)
  @JoinTable()
  vaccines: VaccineEntity[];
}
