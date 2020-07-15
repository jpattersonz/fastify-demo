import { CreatePersonDto, createPersonSchema } from './dto';
import { FastifyInstance } from 'fastify'

type Person = { id: string } & CreatePersonDto;

export async function peopleRoutes(fastify: FastifyInstance, _) {
  const people: Person[] = [{
    id: 'one',
    firstName: 'super',
    lastName: 'man',
    email: 'super.man@fake.org',
  }];

  fastify.get('/', async function (_req, _rep) {
    return people;
  });

  type GetById = {
    id: string
  };

  fastify.get<{
    Params: GetById,
  }>(
    '/:id',
    {
      schema: {
        params: {
          id: { type: 'string', maxLength: 5 },
        },
      },
    },
    async function (request, _) {
      return people.find((p) => p.id == request.params.id) || {};
    }
  );

  fastify.post<{
    Body: CreatePersonDto
  }>(
    '/',
    {
      schema: {
        body: createPersonSchema,
      },
    },
    async function ({ body }, _) {
      const person = {
        id: 'random',
        ...body
      };
      people.push(person);
      return person;
    }
  );
}
