import {buildSchema} from 'type-graphql';
import {resolvers} from './resolvers';

export const getSchema = async () =>
  await buildSchema({
    resolvers: resolvers as any,
  });
