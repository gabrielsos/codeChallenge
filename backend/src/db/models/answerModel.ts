import { Field, ObjectType } from '@nestjs/graphql';

import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import Question from './questionModel';

@ObjectType()
@Entity({name: 'answers'})
export default class Answers {
  @PrimaryColumn()
  @Field()
  questionId: number;

  @Field()
  @Column()
  answer: string;

  @Field()
  @CreateDateColumn({name: 'createdAt'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updatedAt'})
  updatedAt: Date;

  // Associations

  @OneToOne(
    () => Question, 
    question => question.questionConnection,
    {primary:true}
  )
  @JoinColumn({name: 'questionId'})
  questionConnection: Promise<Question>;
}
