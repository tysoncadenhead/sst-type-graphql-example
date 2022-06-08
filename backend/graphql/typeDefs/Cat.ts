import {ObjectType, Field} from 'type-graphql';

@ObjectType()
export class Cat {
  @Field((_type) => String)
  id: string;

  @Field((_type) => String)
  name: string;
}
