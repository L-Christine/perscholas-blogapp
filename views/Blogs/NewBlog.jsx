const React = require('react')
const Navbar = require('../components/Navbar')

class New extends React.Component {
    render(){
        return (
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <div>
                    <Navbar />
                </div>

                <h1>Create New Blog</h1>
                <div className='formBox'>
                    <form action='/blog' method='POST'>
                        Title: <input type= 'text' name= 'title'/><br/>
                        Body: <input type= 'text' name= 'body' /><br/>
                        Author: <input type= 'text' name= 'author' /><br/>
                        Likes: <input type= 'number' name= 'likes' /><br/>
                        Sponsored: <input type= 'checkbox' name= 'sponsored' /><br/>
                        <input type= 'submit' name= '' value= 'Submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

module.exports = New