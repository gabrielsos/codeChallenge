import { Field, InputType } from '@nestjs/graphql'

@InputType()
class QuestionInput {
  @Field()
  readonly question: string;
  
  @Field()
  readonly image: string;
}

export default QuestionInput;