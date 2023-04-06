//mapeamento de rota
const routes = {
  "/": "/Stage6/Projeto9 - SPA/pages/home.html",
  "/about": "/Stage6/Projeto9 - SPA/pages/about.html",
  "/contact": "/Stage6/Projeto9 - SPA/pages/contact.html",
  404: "/Stage6/Projeto9 - SPA/pages/404.html",
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  //const pathname = window.location.pathname
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]
  //Fetch - Busca a rota (promises) / Then - quando concluir execute
  fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
}

handle()

window.onpopstate = () => handle()
window.route = () => route()