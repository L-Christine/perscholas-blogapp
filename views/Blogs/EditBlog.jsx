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
                    Sponsored: {blog.sponsored ? <input type= 'checkbox' name='sponsored' defaultChecked/> : <input type='checkbox' name='sponsored'/>}<br/>

                    <input type='submit' name='' value='Update'/>
                </form>
            </div>
        )
    }
}

module.exports = EditBlog