const React = require('react')
const Navbar = require('../components/Navbar')

class Signup extends React.Component{
    render(){
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <Navbar />
                <h1>Create account</h1>

                <form action='/user/signup' method='POST'>
                    <fieldset>
                        <legend>Create Account</legend>
                        <label htmlFor='username'>Username</label><br/>
                        <input type='text' name='username' required/><br/>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='text' name='email' required/><br/>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='text' name='password' required/><br/>
                        <input type='submit' value='Sign up' className='btn'/>
                    </fieldset>
                </form>
                <div>
                    <p>Already have an Account? <a href='/user/signin' className='btn'>Sign in</a>{''}</p>
                </div>
            </div>
        )
    }
}

module.exports = Signup