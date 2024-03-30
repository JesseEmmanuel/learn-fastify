const fastify = require('fastify');
const client = require('../database')
const {getUserList, getUser, addUser} = require('../controllers/users')

function userRoutes (fastify, _options, done) {

    fastify.get('/users', getUserList)
    
    fastify.get('/users/:id', getUser)

    fastify.post('/users', addUser)

    done()
}

module.exports = userRoutes