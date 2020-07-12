import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';

import RepoService from '../repo.service';
import Question from '../db/models/questionModel';
import Alternative from '../db/models/alternativeModel';
import AlternativeInput from './input/alternative.input';

@Resolver(() => Alternative)
class AlternativeResolver {
   constructor(private readonly repoService: RepoService) {}

   @Query(() => [Alternative])
   public async getAlternativesFromQuestion(@Args('questionId') questionId: number): Promise<Alternative[]> {
     return await this.repoService.alternativeRepo.find({
       where: { questionId }
     })
   }

  @Mutation(() => Alternative)
  public async createAlternative(@Args('data') input: AlternativeInput): Promise<Alternative> {
      const alternative = this.repoService.alternativeRepo.create({
        questionId: input.questionId,
        alternative: input.alternative,
      });
      return await this.repoService.alternativeRepo.save(alternative);
  }

  @ResolveField(() => Question)
  public async getQuestion(@Parent() parent: Alternative): Promise<Question> {
    return await this.repoService.questionRepo.findOne(parent.questionId);
  }
}

export default AlternativeResolver;