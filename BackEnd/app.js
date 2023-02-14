const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const session = require('express-session');
const app = express();
const MySQLStore = require('express-mysql-session')(session);
const http = require('http').Server(app);
const port = 8081;

var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'chien2811',
	database: 'shoppii_schemas'
}; 

const sessionStore = new MySQLStore(options);
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
	secret: 'chiennguyen',
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
}));

const homeApi = require("./router/home.routes")
const register = require("./router/register.routes")
const login = require("./router/login.routes")

app.use('/api',homeApi)
app.use('/register',register)
app.use("/login",login)
http.listen(port,()=>{
    console.log('server is running');
})