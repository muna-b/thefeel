async function routes(fastify, options) {
	fastify.addHook('onRequest', fastify.authenticate)

	fastify.get('/private', async (request, reply) => {
		return "You are authenticated"
	})
	// fastify.get('/cookies', async (request, reply) => {
	// 	const token = await reply.jwtSign({
	// 		name: 'foo',
	// 		role: ['admin', 'user']

	// 	})
	// 	reply
	// })
	// fastify.addHook('onSend', (request, reply)=>{
	// reply.header("Access-Control-Allow-Origin");
	// })
}

module.exports = routes