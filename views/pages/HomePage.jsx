const React = require('react')
const { model } = require('mongoose')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <div>
                    <Navbar />
                </div>
                <h1>Welcome to my Blog App</h1>
                <section>
                    <h2>About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa, ipsum fuga nemo mollitia perferendis ut veniam excepturi enim vel vitae inventore! Fugiat itaque quam temporibus aspernatur, hic quod adipisci.</p>
                </section>
            </div>
        )
    }
}

module.exports = HomePage