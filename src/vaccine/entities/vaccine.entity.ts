import { ChildEntity } from "src/children/entities/child.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('vaccines')
export class VaccineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  minAge: number;

  @Column({ type: 'int', nullable: true })
  maxAge?: number;

  @ManyToMany(() => ChildEntity, child => child.vaccines)
  children: ChildEntity[];
}
