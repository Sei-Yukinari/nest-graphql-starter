import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddTaskInput {
  @Field(() => ID)
  id: number;
  @Field()
  title: string;
}
