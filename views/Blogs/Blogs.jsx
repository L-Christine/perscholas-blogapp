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
                {/* <a href='/blog/new' className='Btn'>Create New Blog</a> */}

                <section className='blogSec'>
                    {blogs.map((blog, i) => (
                    <a href={`/blog/${blog._id}`}>
                        <div className='blogDiv'>
                            {blog.title}
                            {blog.author}
                            {blog.body}
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