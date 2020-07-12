import Answer from './answerModel';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'questions' })
export default class Questions {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  question: string;

  @Field()
  @Column()
  image: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => Answer,
    answer => answer.questionConnection,
  )
  questionConnection: Promise<Answer>;
}