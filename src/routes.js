const ALL_ROUTES = [
    {
        name: "home",
        url: "/",
        template: `<header>
        <h2>Welcome To Wild Live</h2>
        <p>Live The life that you ever have wanted</p>
    </header>
    <main>
        <section class="hero">
            <h1>Awake the beast inside yourself</h1>
            <ul>
                <li>Get Courage</li>
                <li>Be Valiant</li>
                <li>Be Free</li>
                <li>Be Savage</li>
            </ul>
            <button>Go Down</button>
        </section>
        <section class="Content">
            <div>
                <h3>The Freedom</h3>
                <article>
                    <figure>
                        <img src="" alt="Great Freedom img">
                    </figure>
                    <p>The Freedom in the World report is composed of numerical ratings and supporting descriptive texts for 195 countries and 15 territories. External analysts assess 210 countries and territories, using a combination of on-the-ground research, consultations with local contacts, and information from news articles, nongovernmental organizations, governments, and a variety of other sources. Expert advisers and regional specialists then vet the analysts’ conclusions. The final product represents the consensus of the analysts, advisers, and Freedom House staff.
                    </p>
                </article>
            </div>
        </section>
    </main>`
    },
    {
        name: "about",
        url: "/about",
        template: `<h1>About Us</h1>
        <main>
            <h2>what´s Wild Live?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, voluptate vero aut laborum architecto fuga quod. Aspernatur esse a odio, hic, in ipsam commodi saepe consectetur sit, corrupti quis cupiditate?</p>
        </main>`
    },
    {
        name: "contact",
        url: "/contact",
        template: `<h1>Contact Wild Live</h1>
        <main>
            <h3>Envianos un mensaje</h3>
            <form action="">
                <input type="text" name="" placeholder="nombre completo" id="">
                <input type="text" name="" placeholder="correo electrónico" id="">
                <input type="text" name="" placeholder="ingresa el mensaje" id="">
                <button>Enviar</button>
            </form>
        </main>`
    },
]

export default ALL_ROUTES;