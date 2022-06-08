import {StackContext, GraphQLApi} from '@serverless-stack/resources';

export function MyStack({stack}: StackContext) {
  const api = new GraphQLApi(stack, 'graphql', {
    server: {
      handler: 'functions/graphql.handler',
      bundle: {
        format: 'cjs',
      },
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
