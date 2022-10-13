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
                    <h1>{blog.title}</h1>
                    <h3>{blog.author}</h3>
                    <p>{blog.body}</p>
                    <span>Likes: {blog.likes}</span><br/>
                    <span>Sponsored: {blog.sponsored}</span><br/>
            </div>

        )
    }
}

module.exports = ShowBlog