const fastifyPrettier = require('fastify-prettier')
require('dotenv').config()

const fastify = require('fastify')({
    logger: true
  })
  
fastify.register(require('fastify-mongodb'), {
  forceClose: true,
  url: process.env.MONGODBURL
})

fastify.register(require('fastify-jwt'), {
  secret: process.env.SECRET
})

fastify.register(require('fastify-stripe'), {
  apiKey: process.env.STRIPE_SECRET_TEST
})

fastify.register(require('fastify-cors',), {
  origin: "http://localhost:3000"
})

fastify.register(require('./routes/users'))
fastify.register(require('./routes/lessons'))
fastify.register(require('./routes/payment'))
const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()