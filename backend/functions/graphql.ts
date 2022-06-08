import 'reflect-metadata';

import {ApolloServer} from 'apollo-server-lambda';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from 'aws-lambda';

import {getSchema} from '../graphql';

const getServer = async () => {
  const server = new ApolloServer({
    schema: await getSchema(),
    introspection: true,
  });

  return server.createHandler();
};

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>,
) => {
  const server = await getServer();

  return server(event, context, callback);
};
