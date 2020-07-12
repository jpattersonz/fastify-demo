import { v1 } from './v1';

export default async function (fastify, opts) {
  fastify.register(v1, { prefix: '/api/v1' });
}
