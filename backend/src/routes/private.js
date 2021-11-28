async function routes(fastify, options, next) {
	fastify.addHook('onRequest', fastify.authenticate)
	
	fastify.get('/private', async (request, reply) => {
		try {
			const params = request.params
			return params
		} catch (error) {
			reply.code(500).send(error)
		}
	})
	next()
}

module.exports = routes