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
                <Navbar />

                <h1>Edit Blog</h1>
                
                <form action={`/blog/${blog._id}?_method=PUT`} method='POST' className='formBox'>
                    Title<br/>
                    <textarea type='text' name='title' cols='40' defaultValue={blog.title}/><br/>
                    Body<br/>
                    <textarea type='text' name='body'  rows='20' cols='40' defaultValue={blog.body}/><br/>
                    {/* Author<br/>
                    <textarea type='text' name='author' cols='40' defaultValue={blog.author}/><br/> */}
                    Likes<input type='number' name='likes' defaultValue={blog.likes}/><br/>
                    Sponsored{blog.sponsored ? <input type= 'checkbox' name='sponsored' defaultChecked/> : <input type='checkbox' name='sponsored'/>}<br/>

                    <input type='submit' name='' value='Update' className='btn'/><br/>
                    <a href={`/blog/${blog._id}`} className='btn'>Back</a>
                </form>
            </div>
        )
    }
}

module.exports = EditBlog