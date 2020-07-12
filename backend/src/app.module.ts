import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';

import * as ormOptions from './config/orm';
import RepoModule from './repo.module';
import QuestionResolver from './resolvers/question.resolver';
import AnswerResolver from './resolvers/answer.resolver';
import AlternativeResolver from './resolvers/alternative.resolver';

const graphQLImports = [
  QuestionResolver,
  AnswerResolver,
  AlternativeResolver
]

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
