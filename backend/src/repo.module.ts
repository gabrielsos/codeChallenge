import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoService from './repo.service';
import Alternative from './db/models/alternativeModel';
import Question from './db/models/questionModel';
import Answer from './db/models/answerModel';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Alternative,Question,Answer])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;