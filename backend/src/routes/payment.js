const createError = require('http-errors')

const routes = async (fastify, options) =>{
    fastify.post('/payment', async (request, reply) => {
        const {stripe} = fastify
        const { amount, id } = request.body
        try {
          const payment = await stripe.payment.create({
            amount,
            id
          })
          return {
            status: 'okk',
            message: `payment ${id} successful added`,
            payment
          }
        } catch (errors) {
          throw new createError.NotFound('Wrong')
        }
      })
} 
module.exports = routes