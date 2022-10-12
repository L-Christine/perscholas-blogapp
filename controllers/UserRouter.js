const express  = require('express')
const UserModel = require('../models/UserSchema')

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)

    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
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

//post: create a new account
router.post('/', async (req, res) => {
    try{
        //check if user exists
        const existUser = await UserModel.find({email: req.body.email})
        // const existUsername = await UserModel.find({username:req.body.username})
        
        //if there is a object inside of the array
        if(existUser[0]){
            return res.send('User already exist!')
        }

        //if there is a object inside of the array
        // if (existUsername[0]){
        //     return res.send('User already exists!')
        // }

        //create a new user
        const user = await UserModel.create(req.body)
        res.send(user)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
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