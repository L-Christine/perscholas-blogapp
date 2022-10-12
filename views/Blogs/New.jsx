const React = require('react')

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>Add new blog post</h1>

                <form action= '/blog' method= 'POST'>
                    Title: <input type= 'text' name= 'title' required/><br/>
                    Body: <input type= 'text' name= 'body' required/><br/>
                    Author: <input type= 'text' name= 'author' required/><br/>
                    Likes: <input type= 'number' name= 'likes' /><br/>
                    Sponsored: <input type= 'checkbox' name= 'sponsored' /><br/>

                    <input type= 'submit' name= '' value= 'Submit'/>
                </form>
                
                <a href= '/blog'>Back to Blogs</a>
            </div>
        )
    }
}

module.exports = New