import Router from "./router.js";
import ALL_ROUTES from "./routes.js";

const myRouter = new Router(ALL_ROUTES)

const btHome = document.querySelector("#home");
const btContact = document.querySelector("#contact");
const btAbout = document.querySelector("#about");

// const loadHome = myRouter.loadRoute.bind( myRouter, "/about")
// const loadContact = myRouter.loadRoute.bind(myRouter, "/contact")
// const loadAbout = myRouter.loadRoute.bind(myRouter, "/")

btHome.onclick = () => myRouter.loadRoute("/")
btContact.onclick = ()=> myRouter.loadRoute("/contact")
btAbout.onclick = ()=> myRouter.loadRoute("/about")

// btHome.addEventListener( "click",() => myRouter.loadRoute("/"))
// btContact.addEventListener( "click", ()=> myRouter.loadRoute("/contact") )
// btAbout.addEventListener("click", ()=> myRouter.loadRoute("/about"))