import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('weight')
export class Weight {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  dateCreation: Date;

  @Column({ type: 'int' })
  poids: number;
}
