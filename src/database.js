const app = require('./server');
const myconnection = require('express-myconnection');
const mysql = require('mysql');

app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'invitaciones'
}))