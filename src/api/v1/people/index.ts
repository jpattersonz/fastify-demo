import { createPersonSchema } from './dto';

export async function peopleRoutes(fastify, _) {
  const people = [];
  fastify.get('/', async function (_req, _rep) {
    return people;
  });

  fastify.get(
    '/:id',
    {
      schema: {
        params: {
          id: { type: 'string', maxLength: 5 },
        },
      },
    },
    async function (request, _) {
      return people.find((p) => p.id == request.params.param) || {};
    }
  );

  fastify.post(
    '/',
    {
      schema: {
        body: createPersonSchema,
      },
    },
    async function ({ body }, _) {
      people.push(body);
      return body;
    }
  );
}
