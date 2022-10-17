const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component{
    render(){
        const {blogs} = this.props
        console.log(this.props.blogs);
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
            <div>
                <Navbar />
            </div>
            <div>
                <h1>Blogs</h1>
                <section className='blogSec'>
                    {blogs.map((blog, i) => (
                    <a href={`/blog/${blog._id}`}>
                        <div className='blogDiv'>
                            {blog.title}<hr/>
                            by. {blog.author}<hr/>
                            <div className='previewText'>{blog.body}</div>
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