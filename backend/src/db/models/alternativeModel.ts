import { Field, ObjectType } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Question from './questionModel';

@ObjectType()
@Entity({name: 'alternatives'})
export default class Alternatives {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  questionId: number;

  @Field()
  @Column()
  alternative: string;

  @Field()
  @CreateDateColumn({name: 'createdAt'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updatedAt'})
  updatedAt: Date;

  // Associations

  @ManyToOne(
    () => Question, 
    question => question.questionConnection,
    {primary:true}
  )
  @JoinColumn({name: 'questionId'})
  questionConnection: Promise<Question>;
}
