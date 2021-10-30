const fastifyPrettier = require('fastify-prettier')
const { authenticateAdmin } = require('./decorators')
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
  cookie: {
    cookieName: 'token',
    signed: false
  }
})

fastify.register(require('fastify-cookie'))
fastify.get('/cookies', async (request, reply) =>{

  const token = await reply.jwtSign({
    name: 'cookie',
    role: ['admin', 'user']
  })
  reply
  .setCookie('token', token, {
    domain: process.env.URL,
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: true
  })
  .code(200).send('Cookie sent')
})
fastify.addHook('onRequest', (request) => request.jwtVerify())
fastify.addHook('onSend', (request, reply) => reply.setheader('Access-Control-Allow-Origin',process.env.URL))
fastify.get('/verifycookie', async (request, reply) => {
  await request.jwtVerify()
  reply.send({code: 'OK', message : 'it works'})
})

fastify.register(require('fastify-stripe'), {
  apiKey: process.env.STRIPE_SECRET_TEST
})

fastify.register(require('fastify-cors',), {
  origin: process.env.URL,
  methods: 'GET,PUT,POST,DELETE,HEAD',
  preflightContinue: true,
  optionsSuccessStatus: 201,
  headers: 'Origin, X-Requested-With, Content-Type, Accept',
})

async function authenticateJWT(request, reply) {
	try {
		const decoded = await request.jwtVerify()
		return decoded
	} catch (error) {
		reply.code(500).send(error)
	}
}
fastify.decorate('authenticate', authenticateJWT)
fastify.decorate('authenticateAdmin', authenticateAdmin)
fastify.register(require('./routes/users'))
fastify.register(require('./routes/lessons'))
fastify.register(require('./routes/payment'))
fastify.register(require('./routes/private'))

const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()