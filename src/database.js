const mysql = require('mysql');
const {promisify} = require('util');

const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('Database connection was closed');
        }if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log('Database has to many connections');
        }if(err.code === 'ECONNREFUSED'){
            console.log('Database connection was refused');
        }
    }
    if(connection) connection.release();
    console.log('>>> DB connect :D');
    return;
});
pool.query = promisify(pool.query)
module.exports = pool;