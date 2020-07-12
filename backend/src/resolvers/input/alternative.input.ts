import { Field, InputType } from '@nestjs/graphql';

@InputType()
class AlternativeInput {
  @Field()
  readonly alternative: string;

  @Field()
  readonly questionId: number;
}

export default AlternativeInput;