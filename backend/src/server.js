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

fastify.register(require('fastify-cors',), {
  origin: "*"
})
  
const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()