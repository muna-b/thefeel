async function authenticateAdmin(request, reply) {
	try {
		const decoded = await request.jwtVerify()
		if (decoded.role !== "admin") {
			throw new Error("Unauthorized")
		}
		return decoded
	} catch (error) {
		reply.code(500).send(error)
	}
}

async function authenticateJWT(request, reply) {
	try {
		const token = request.headers?.authorization?.split(' ')[1]
		// const decoded = await request.jwtVerify()
		const decoded = await request.jwtVerify(token, process.env.SECRET)
		return decoded
		
	} catch (error) {
		reply.code(500).send(error)
	}
}


module.exports = {
	authenticateAdmin,
	authenticateJWT
}