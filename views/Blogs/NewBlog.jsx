const React = require('react')
const Navbar = require('../components/Navbar')

class New extends React.Component {
    render(){
        return (
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <Navbar />

                <h1>Create a New Blog</h1>
                <form action='/blog' method='POST' className='formBox'>
                    Title<br/>
                    <textarea type= 'text' name= 'title' cols='40' required/><br/>
                    Body<br/>
                    <textarea type= 'text' name= 'body' rows='20' cols='40' required/><br/>
                    Author<br/>
                    <textarea type= 'text' name= 'author' cols='40' required/><br/>
                    Likes<input type= 'number' name= 'likes' /><br/>
                    Sponsored:<input type= 'checkbox' name= 'sponsored' /><br/>
                        
                    <input type= 'submit' name= '' value= 'Submit'/>
                    </form>
            </div>
        )
    }
}

module.exports = New