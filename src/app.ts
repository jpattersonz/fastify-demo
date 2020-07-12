import fastify from 'fastify';
import autoLoad from 'fastify-autoload';
import * as path from 'path';

const server = fastify({ logger: true });

// Autoload is more powerful than im using it for.
// this is only autoloading the root module, then ther rest are registered manually
server.register(autoLoad, {
  dir: path.join(__dirname, 'api')
});

server.listen(3000, (err, address) => {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});
