const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session= require('express-session') //set up a session
const MongoStore = require('connect-mongo') //store a session
require('dotenv').config()

//====App init
const app = express()
const PORT = 3000

//====Middleware
app.use(express.static('public')) //all static files -> inside public folder
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}), 
    resave: false, 
    saveUninitialized: true
}))

//====App settings
app.set("view engine", "jsx"); //<-view as default
app.engine("jsx", require("express-react-views").createEngine());

//anything with /blog will be handled by the router
app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))

app.get('/', (req, res) => {
    res.render('pages/HomePage') //view = default
})

//====Listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
     });
    //confirm that we have a connection to MongoDB
    mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
})
