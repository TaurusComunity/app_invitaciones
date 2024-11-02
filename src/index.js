const app = require('./server');
const db = require ('./database');

const {engine} = require('express-handlebars');
const parser = require('body-parser');

app.set('port', 3000);

app.use(db);

app.listen(app.get('port'), () => {
    console.log("Server run on port: ", app.get('port'));
    
})

