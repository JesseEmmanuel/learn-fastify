// Require the framework and instantiate it

// ESM
// CommonJs
const fastify = require('fastify')({
    logger: true
})

// fastify.register(require('fastify-swagger'), {
//     exposeRoute:true,
//     routePrefix: '/docs',
//     swagger: {
//         info: { title: 'fastify-api' }
//     },
// })
fastify.register(require('./routes/users'))


// Declare a route
fastify.get('/', async function (request, reply) {
    reply.send({ hello: 'world' })
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
  // Server is now listening on ${address}
