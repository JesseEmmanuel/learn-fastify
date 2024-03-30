const { Client } = require('pg')


const connectionString = 'postgres://postgres:root@localhost:5432/ombyx';

const client = new Client({
    // host: "localhost",
    // user: "postgres",
    // port: 5432,
    // password: "root",
    // database: "ombyx"
    connectionString: connectionString
});

client.connect()
.then(() => console.log('Successfully Connected'))
.catch( err => console.error('Something went wrong', err))

module.exports = client;