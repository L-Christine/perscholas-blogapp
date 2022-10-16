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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias voluptates iste dolores nemo provident qui consequuntur minima aperiam saepe debitis quam nulla sequi fugiat explicabo reiciendis modi, obcaecati adipisci enim odit magnam perspiciatis quidem! Atque maxime dolore, expedita quibusdam consequatur enim ex magni qui voluptatibus alias incidunt nulla, ducimus, molestias libero eaque quis sint similique quae! Asperiores quis at tenetur omnis dolorem veniam similique id dicta placeat distinctio cumque molestiae quae molestias tempore optio, assumenda facilis corrupti quibusdam quidem dolorum earum maiores eveniet minima error? Eveniet corporis corrupti facere consequuntur vel expedita quaerat, excepturi deserunt quos vero et dignissimos, quas quo, voluptatum minima illo. Voluptate, distinctio, atque perferendis incidunt autem eveniet delectus placeat dicta dolore consectetur similique reprehenderit voluptates natus asperiores rem quia maiores sed ut modi aperiam eligendi dolores eum fuga aliquid. Corporis blanditiis mollitia a, voluptatibus eum doloremque esse nobis sequi dolorem tenetur sunt expedita atque id, incidunt ratione rerum reiciendis adipisci molestiae consectetur. Maxime repellendus est quidem ab non officia ipsum, deleniti eum soluta similique sapiente repellat commodi quod quibusdam dolorem! Enim modi veniam sit eveniet qui deleniti excepturi iste sequi eius ipsa rem corporis natus optio vel reiciendis ea numquam at sapiente nostrum accusantium, possimus nulla! Iste eius autem sequi vitae iusto eum earum repellendus atque in ipsam exercitationem harum, libero unde sapiente alias reprehenderit rerum, facere adipisci! Rerum facere laboriosam dolor tempore suscipit obcaecati possimus modi, et voluptatibus molestiae iure quia velit minima dicta assumenda atque magnam omnis corrupti facilis. Impedit tempora voluptatibus beatae animi, minus voluptatem a dolores cupiditate laudantium ratione facere eveniet sit eligendi suscipit fugiat debitis eaque! Optio, numquam sapiente ut tempore aliquam quod illo veritatis odit eaque delectus maiores, recusandae quibusdam, suscipit reiciendis sed quaerat molestias ratione non asperiores alias labore amet? Quod similique exercitationem porro animi quisquam maiores laboriosam mollitia beatae? Voluptatem quam illum ducimus sequi dignissimos voluptatibus accusamus repudiandae tempore obcaecati deleniti, alias cupiditate hic tenetur a nemo veritatis rerum doloribus adipisci in? Quia, ex. Quaerat, quam placeat esse incidunt dignissimos tempora sunt eum corporis! Eveniet at numquam, qui veniam beatae enim provident nemo molestiae, quo repudiandae, voluptates autem corrupti. Culpa nihil atque praesentium cumque, accusantium ad placeat mollitia officiis earum error assumenda, dolore suscipit odio odit quae id. Molestiae assumenda amet nemo modi at earum corporis accusantium pariatur reprehenderit adipisci rem provident, iusto asperiores ipsa quos voluptates autem qui corrupti aut esse eligendi blanditiis voluptatem quia sit? Saepe adipisci molestias, non tenetur dolor incidunt, cupiditate molestiae quaerat vel iusto hic quo provident repudiandae itaque alias nostrum impedit porro atque! Totam, tenetur. Vitae modi laborum nesciunt incidunt nemo veniam illum, aut molestias repudiandae tempora itaque eveniet sed voluptate facilis sapiente tempore maiores hic! Vero ex ducimus dolore asperiores corrupti exercitationem, nulla minima facere incidunt impedit dolorum sapiente necessitatibus eaque. At vitae dolorum deserunt ea soluta dolor ipsam, odit eaque pariatur suscipit dolores repudiandae eius quisquam aspernatur quam magnam architecto molestias dolorem perspiciatis doloribus cumque saepe! Omnis perferendis amet eaque et tenetur pariatur. Quo natus quia est unde?</p>
                </section>
            </div>
        )
    }
}

module.exports = HomePage