const argon2 = require('argon2')
const createError= require('http-errors')
const transport = require('./../nodemailer')
const { ObjectId } = require ('fastify-mongodb')
// const jwt = require('jsonwebtoken')
// const createToken = (id) => {
//     return jwt.sign({id}, process.env.SECRET, {
//         expiresIn: maxAge
//     })
// }
const maxAge = 3 * 24 * 60 * 60 * 1000
// const { createPrivateKey } = require('crypto')
// const { V4 } =  require('paseto')
// const key = createPrivateKey
// const payload = {

// }


async function routes(fastify, options) {
    //#region new users
    const optsPost= {
        schema: {
            body: {
                properties: {
                    username: { type:'string'},
                    email: { type:'string'},
                    password: { 
                        type:'string',
                        // pattern: '#^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9][\w]{8,20}$#'
                        //Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre
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
        await transport.sendMail({ 
            from: '"The Feel" <noreply@thefeel.com>',
            to: user.email,
            subject: "Test",
            text: "Ceci est un test",
            html: "<p>Ceci est un test au format HTML</p>"
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
    fastify.route({
        method: 'POST',
        url: '/login',
        handler: async(request, reply) =>{
            try {
                
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
                    expireIn: "30m "
                })
                // const token = await V4.sign(payload, key('essayequelquechose'),{
                //     expiresIn: '2 hours',
                // })
                // const token = createToken(user._id)
                // reply.header('jwt', token, {httpOnly: true, maxAge})
                // .code(200).send(console.log({user: user._id}))
                reply.setCookie('jwt', token,{httpOnly: true, maxAge})
                .code(200).send({user:user._id, token})
            } catch (error) {
                reply.code(500).send(error)
            }                           
            }
    })
    //#endregion

    fastify.get('/logout', async (request, reply) => {
        reply.setCookie('jwt', '', { maxAge : 1 })
        // reply.clearCookie('foo', {path: '/'})
        .code(303).redirect('login')
        
    })
    //#region get user by _id
    fastify.route({
        method : 'GET',
        url : '/user',
        prevalidation : [fastify.authenticate],
        handler: async (request, reply) => {
            try {
                
                const id = request.user_id
                const db = fastify.mongo.db
                const collection = db.collection('users')
                const user = await collection.findOne({
                    _id: new ObjectId(request.params.id)
                })
                reply.code(200).send({user})
            } catch (error) {
                reply.code(500).send(error)
            }
            }
        })
        //#endregion
}
module.exports = routes