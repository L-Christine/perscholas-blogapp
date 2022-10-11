const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')

//====App init
const app = express()
const PORT = 3000

//====Middleware
app.use(morgan('dev'))
app.use(express.json())


//anything with /blog will be handled by the router
app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))

app.get('/', (req, res) => {
    res.send('Hello')
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
