const React = require('react')
const Navbar = require('../components/Navbar')

class EditBlog extends React.Component{
    render(){
        const {blog} = this.props
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <div>
                    <Navbar />
                </div>

                <h1>Edit Blog</h1>
                
                <form action={`/blog/${blog._id}?_method=PUT`} method='POST'>
                    Title: <input type='text' name='title' defaultValue={blog.title}/><br/>
                    Body: <input type='text' name='body' defaultValue={blog.body}/><br/>
                    Author: <input type='text' name='author' defaultValue={blog.author}/><br/>
                    Likes: <input type='number' name='likes' defaultValue={blog.likes}/><br/>
                    Sponsored: <input type='checkbox' name='sponsored' defaultValue={blog.sponsored}/><br/>

                    <input type='submit' name='' value='Submit'/>
                </form>
            </div>
        )
    }
}

module.exports = EditBlog