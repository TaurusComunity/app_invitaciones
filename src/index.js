const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");

const { database } = require("./keys");
// initializations
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
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
app.set("view engine", ".hbs");

// middleware
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// global variables
app.use((req, res, next)=>{
    app.locals.success = req.flash('success');
    app.locals.error = req.flash("error");
    next();
})

// routes
app.use(require('./routes'));
app.use('/dashboard', require('./routes/dashboard'));

// public files
app.use(express.static(path.join(__dirname, 'public')))

// start server
// iniciar el servidor
try {
  app.listen(app.get("port"), "0.0.0.0", () => {
      console.log(">>> Servidor corriendo en el puerto:", app.get("port"));
  });
} catch (error) {
  console.error("Error al iniciar el servidor:", error);
}
