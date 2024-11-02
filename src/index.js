const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
    ".hbs",
    exphbs.engine({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      extname: ".hbs",
      helpers: require("./libs/handlebars"),
    })
  );
  app.engine('.hbs', exphbs.engine);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// global variables
app.use((req, res, next)=>{
    next();
})

// routes
app.use(require('./routes'));
app.use('auth', require('./routes/auth'));
app.use('dashboard', require('./routes/dashboard'));

// public files
app.use(express.static(path.join(__dirname, 'public')))

// start server
app.listen(app.get('port'), () => {
    console.log("Server run on port: ", app.get('port'));
    
})

