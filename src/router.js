class Router {
    constructor(routes) {
        this.routes = routes
        this.LoadInitialRoute();
    }
    LoadInitialRoute() {
        const actualPath = window.location.pathname;
        
        this.loadRoute(actualPath);
    }
    loadRoute(Path) {
        const matchedRoute = this.matchRouteWithRoutes(Path)
        if(matchedRoute){
            window.history.pushState({}, "", Path)
            const target = document.querySelector("[data-routerTarget]")
            target.innerHTML =  matchedRoute.template
        }else
            return;
    }
    matchRouteWithRoutes(Path) {
        const matchedRoute = this.routes.find(route => {
            const processRoute = route.url
            return processRoute === Path
        });
        if(matchedRoute) {
            return matchedRoute
        }else {
            return null;
        }
    }
}

export default Router;