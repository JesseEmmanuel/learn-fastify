const client = require('../database')
const userFields = require('../model/users')

const getUserList = async (req, reply) => {
    const users = await client.query(`Select * from core_users`);

    reply.send({data: users.rows})
}

const getUser = async (req, reply) => {
    const {id} = req.params
    const user = await client.query(`Select * from core_users where id = ${id}`);
    
    if(user.rows.length === 0){
        reply.status(404).send({ error: 'User not found' });
        return;
    }

    reply.send({data: user.rows[0]})
}

const addUser = async (req, reply) => {
    const userData = {};
    userFields.forEach(field => {
        userData[field] = req.body[field]
    });

    const columns = userFields.join(', ');
    const values = userFields.map(field => typeof userData[field] === 'string' ? `'${userData[field]}'` : userData[field]).join(', ');

    try {
        const add_user = await client.query(`INSERT INTO core_users (${columns}) VALUES (${values}) RETURNING *`);
        reply.status(201).send(add_user.rows[0]);
    } catch (error) {
        reply.status(500).send({ message: 'Internal Server Error', error: error });
    }
}

module.exports = {
    getUserList,
    getUser,
    addUser
}