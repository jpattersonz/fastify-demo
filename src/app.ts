import fastify from 'fastify';
import autoLoad from 'fastify-autoload';
import swagger from 'fastify-swagger';
import * as path from 'path';

const server = fastify({ logger: true });

server.register(swagger, {
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
  },
  exposeRoute: true,
  routePrefix: '/documentation',
});

// Autoload is more powerful than im using it for.
// this is only autoloading the root module, then ther rest are registered manually
server.register(autoLoad, {
  dir: path.join(__dirname, 'api'),
});

server.listen(3000, (err, address) => {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});
