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
                <Navbar />

                    <h1>{blog.title}</h1>
                <div className='blogContent'>
                    <h3>by. {blog.author}</h3>
                    <p>{blog.body}</p><br/>
                    <p>Likes: {blog.likes}</p>
                    <p>Sponsored: {blog.sponsored ? 'yes' : 'no' }</p><br/>
                </div>
            </div>

        )
    }
}

module.exports = ShowBlog