const React = require('react')
const Navbar = require('../components/Navbar')

class ShowBlog extends React.Component{
    render(){
        const blog = this.props.blog
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <div>
                    <Navbar />
                </div>
                <div className='blogContent'>
                    <h1>{blog.title}</h1>
                    <h3>{blog.author}</h3>
                    <p>{blog.body}</p>
                    <p>Likes: {blog.likes}</p><br/>
                    <p>Sponsored: {blog.sponsored ? 'yes' : 'no' }</p><br/>
                </div>
                    <a href={`/blog/${blog._id}/edit`} className='btn'>Edit</a>

                    <form action={`/blog/${blog._id}?_method=DELETE`} method= 'post'><input type='submit' value='Delete' className='btn'/></form>
            </div>

        )
    }
}

module.exports = ShowBlog