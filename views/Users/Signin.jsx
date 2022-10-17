const React = require("react");
const Navbar = require("../components/Navbar");

class Signin extends React.Component {
  render() {
    return (
      <div>
        <head>
            <link rel='stylesheet' href='/CSS/app.css'/>
        </head>
        <Navbar />
        <h1>Sign in Page</h1>

        <form action='/user/signin' method="post">
          <fieldset>
            <legend>Signin to your account</legend>

            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" required/><br />

            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" required/><br />

            <input type="submit" value="Sign in" className="btn" />
          </fieldset>
        </form>
      </div>
    );
  }
}

module.exports = Signin;