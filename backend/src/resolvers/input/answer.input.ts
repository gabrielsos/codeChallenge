import { Field, InputType } from '@nestjs/graphql';

// @InputType()
// class AnswerQuestionConnectInput {
//   @Field()
//   readonly id: number;
// }

// @InputType()
// class AnswerQuestionInput {
//   @Field({nullable: true})
//   readonly connect: AnswerQuestionConnectInput;

//   @Field({nullable: true})
//   readonly create: QuestionInput;
// }

@InputType()
class AnswerInput {
  @Field()
  readonly answer: string;

  @Field()
  readonly questionId: number;
}

export default AnswerInput;