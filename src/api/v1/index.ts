import { exampleRoutes } from './example';
import { peopleRoutes } from './people';

export async function v1(fastify, opts) {
  fastify.register(exampleRoutes, { prefix: '/example' });
  fastify.register(peopleRoutes, { prefix: '/people' });
}
