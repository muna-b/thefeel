const argon2 = require('argon2')
const createError= require('http-errors')

async function routes(fastify, options) {
    //#region users
    const optsPost= {
        schema: {
            body: {
                properties: {
                    username: { type:'string'},
                    email: { type:'string'},
                    password: { 
                        type:'string',
                        pattern: '#^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9][\w]{8,20}$#'
                    },
                    dateOfBirth: { type:'string'},
                    adress: { type:'string'},
                },
                required: ['username', 'email', 'password', 'dateOfBirth', 'adress'],
                additionnalProperties: false
            }
        }
    }
    fastify.post('/users', optsPost, async (request, reply) => {
        const {email, password} = request.body
        const db = fastify.mongo.db
        const collection = db.collection('users')
        const userExist = await collection.findOne({email})
        if (userExist) throw new createError.Conflict('Email already exists')
        const hashedPassword = await argon2.hash(password)
        const result = await collection.insertOne({
            ...request.body,
            password: hashedPassword,
            role: 'user'
        })
        return{
            id: result.ops[0]._id
        }
    })
    //#endregion

    //#region login user
    const optsLogin = {
        schema: {
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string'},
                    password: { type: 'string'},
                },
                required: ['email', 'password'],
                additionnalProperties: false,
            }
        }
    }
    fastify.post('/login', optsLogin, async (request, reply) => {
        const { email, password } = request.body
        const db = fastify.mongo.db
        const collection = db.collection('users')
        const user = await collection.findOne({email})
            if (!user) throw new createError.NotFound('Wrong email and/or password')
        const match = await argon2.verify(user.password, password)
            if (!match) throw new createError.NotFound('Wrong email and/or password')
        const token = await reply.jwtSign({
            id: user._id,
            role: user.role,
            expireIn: "10m"
        })
        reply.code(200).send({token})
    })
    //#endregion
}
module.exports = routes