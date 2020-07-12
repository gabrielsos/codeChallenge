import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';

import RepoService from '../repo.service';
import Question from '../db/models/questionModel';
import Answer from '../db/models/answerModel';
import AnswerInput from './input/answer.input';

@Resolver(() => Answer)
class AnswerResolver {
   constructor(private readonly repoService: RepoService) {}

  @Query(() => Answer)
  public async getAnswerFromQuestion(@Args('questionId') questionId: number): Promise<Answer> {
    return await this.repoService.answerRepo.findOne({
      where: { questionId }
    })
  }

  @Mutation(() => Answer)
  public async createAnswer(@Args('data') input: AnswerInput): Promise<Answer> {
      const answer = this.repoService.answerRepo.create({
        questionId: input.questionId,
        answer:input.answer,
      });
      return await this.repoService.answerRepo.save(answer);
  }

  @ResolveField(() => Question)
  public async getQuestion(@Parent() parent: Answer): Promise<Question> {
    return await this.repoService.questionRepo.findOne(parent.questionId);
  }
}

export default AnswerResolver;