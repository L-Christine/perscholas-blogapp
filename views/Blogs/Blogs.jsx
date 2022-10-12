const React = require('react')

class Blogs extends React.Component{
    render(){
        const {blogs} = this.props
        console.log(this.props.blogs);
        return(
            <div>
                <h1>Blogs</h1>
                <a href='/blog/new'>Create a Blog Post</a>

                <ul>
                    {blogs.map((blog, i) => (
                    <li>
                        <a href={`/blog/${blog._id}`}>{blog.title}</a><br/>

                        <form action={`/blog/${blog._id}?_method=DELETE`} method= 'post'><input type='submit' value='Delete' /></form>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

module.exports= Blogs