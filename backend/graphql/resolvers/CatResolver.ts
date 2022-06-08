import {Query, Arg} from 'type-graphql';
import {Cat} from 'graphql/typeDefs';

const cats = [
  {
    id: '1',
    name: 'Garfield',
  },
  {
    id: '2',
    name: 'Nermal',
  },
  {
    id: '3',
    name: 'Arlene',
  },
];

export class CatResolver {
  @Query((_returns) => Cat)
  async cat(@Arg('name', (_type) => String) name: string) {
    return cats.find((cat) => cat.name === name);
  }

  @Query((_returns) => [Cat])
  async cats() {
    return cats;
  }
}
