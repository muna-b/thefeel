const fastifyPrettier = require('fastify-prettier')
const { authenticateAdmin, authenticateJWT } = require('./decorators')
require('dotenv').config()

const fastify = require('fastify')({
    logger: true
  })

fastify.register(
  fastifyPrettier,
  {
    fallbackOnError: false
  }
)
  
fastify.register(require('fastify-mongodb'), {
  forceClose: true,
  url: process.env.MONGODBURL
})

fastify.register(require('fastify-jwt'), {
  secret: process.env.SECRET,
  // cookie: {
  //   cookieName: 'token',
  //   signed: 'false'
  // }
})

// fastify.register(require('fastify-cookie'))

fastify.register(require('fastify-stripe'), {
  apiKey: process.env.STRIPE_SECRET_TEST
})

fastify.register(require('fastify-cors',), {
  origin: process.env.URL,
  methods: ["POST","GET","PATCH"],
  preflightContinue: true,
  optionsSuccessStatus: 201,
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
})

fastify.decorate('authenticate', authenticateJWT)
fastify.decorate('authenticateAdmin', authenticateAdmin)
fastify.register(require('./routes/users'))
fastify.register(require('./routes/lessons'))
fastify.register(require('./routes/payment'))
fastify.register(require('./routes/private'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()