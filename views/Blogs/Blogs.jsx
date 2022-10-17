const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component{
    render(){
        const {blogs, loggedInUser} = this.props
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <Navbar />
                
            <div>
                <h1>Blogs</h1>
                <section className='blogSec'>
                    {blogs.map((blog, i) => (
                    <a href={`/blog/${blog._id}`}>
                        <div className='blogDiv'>
                            {blog.title}<hr/>
                            by. {blog.author}<hr/>
                            <div className='previewText'>{blog.body}</div>

                            {/* if blog was created by the logged in User then you see edit button */}
                            {blog.author === loggedInUser ? (
                                <div>
                                    <a href={`/blog/${blog._id}/edit`} className='btn'>Edit</a>
                                </div>
                            ) : null}
                        </div>
                    </a>
                    ))}
                </section>
            </div>
            </div>
        )
    }

}

module.exports= Blogs