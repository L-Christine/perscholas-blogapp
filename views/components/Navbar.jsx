const React = require('react')

class Navbar extends React.Component{
    render(){
        return(
        <div>
            <head>
                <link rel='stylesheet' href='/CSS/app.css'/>
            </head>
            <nav>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/signin'>Sign in / Sign up</a>
            </nav>

        </div>
        )
    }
}

module.exports = Navbar