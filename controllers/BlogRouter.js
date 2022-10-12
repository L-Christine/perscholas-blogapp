const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {blogs: blogs})

    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//====Create
//link to create new page
router.get('/blog/new', (req, res)=> {
    res.render('Blogs/New')
})
//post: create a new blog
router.post('/', async (req, res) => {
    try{
        const newBlog = await BlogModel.create(req.body)
        res.send(newBlog)
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
    
})

//Get blog by id
router.get('/:id', async(req, res) => {
    try{
        const blog = await BlogModel.findById(req.params.id)
        res.send(blog)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

//put: update by id
router.put('/:id', async(req, res) => {
    try{
        //find id,update body, after the update return doc you updated
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument':'after'})
        res.send(updatedBlog)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
//delete 
router.delete('/:id', async(req,res) => {
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.send('Blog Deleted')
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    } 
})


module.exports = router