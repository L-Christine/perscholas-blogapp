const express  = require('express')
const UserModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()

//default route /user
router.get('/', async (req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//====Create (put this route above ('/:id'))
//Render to signup page
router.get('/signup', (req, res) => {
    res.render('Users/Signup')
})

//post: create a new account
router.post('/signup', async (req, res) => {
    try{
        //check if user exists
        const userAlreadyExist = await UserModel.find({email: req.body.email})
        //if there is a object inside of the array
        if(userAlreadyExist[0]){
            return res.send('User already exist!')
        }

        //==create a new user
        const SALT = await bcrypt.genSalt(10) //how secure your hash will be default= 10
        //re-assign the password to the hashed password
        req.body.password = await bcrypt.hash(req.body.password, SALT) //now password is not text, it's hash
        const user = await UserModel.create(req.body)
        res.redirect('/user/signin')
    
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot POST')
    }
})

// Render the Signin Form
router.get('/signin', (req, res) => {
    res.render('Users/Signin')
  })

// Signin an User
router.post('/signin', async (req, res) => {
    try {
      // find user by email in db
      const user = await UserModel.findOne({email: req.body.email})
      if (!user) return res.send('Please check your email and password!')
      // checks if passwords match
      const decodedPassword = await bcrypt.compare(req.body.password, user.password)
      if (!decodedPassword) return res.send('Please check your email and password!')
      //==set the user session
      //create a new username in the session obj using the user info from db
      req.session.username = user.username
      req.session.loggedIn = true
      // redirect to /blogs
      res.redirect('/blog')
    } catch (error) {
      console.log(error);
    }
  })

//Sign out user and destroy session
router.get('/signout', (req, res) =>{
    try{
        req.session.destroy() //destroy cookie
        res.redirect('/')
    } catch(error){
        console.log(error);
    }
})

//Get user by id
router.get('/:id', async(req, res) => {
    try{
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//put: update by id
router.put('/:id', async(req, res) => {
    try{
        //find id,update body, return doc after the update
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument':'after'})
        res.send(updatedUser)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
//delete 
router.delete('/:id', async(req,res) => {
    try{
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser);
        res.send('User Deleted')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})


module.exports = router