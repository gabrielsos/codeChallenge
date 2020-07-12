import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import RepoService from '../repo.service';
import Question from '../db/models/questionModel';
import QuestionInput from './input/question.input';

@Resolver()
class QuestionResolver {
   constructor(private readonly repoService: RepoService) {}

  @Query(() => [Question])
  public async getQuestions(): Promise<Question[]> {
    return await this.repoService.questionRepo.find();
  }
  @Query(() => Question, {nullable: true})
  public async question(@Args('id') id: number): Promise<Question> {
    return await this.repoService.questionRepo.findOne(id);
  }

  @Mutation(() => Question)
  public async createQuestion(@Args('data') input: QuestionInput): Promise<Question> {
      const question = this.repoService.questionRepo.create({ question: input.question, image: input.image });
      return await this.repoService.questionRepo.save(question);
  }
}
export default QuestionResolver;