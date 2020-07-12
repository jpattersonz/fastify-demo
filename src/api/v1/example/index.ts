export async function exampleRoutes(fastify, _) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example';
  });

  fastify.get('/:param', async function (request, reply) {
    return 'this is an example: ' + request.params.param;
  });
}
