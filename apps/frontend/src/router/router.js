import HomePage from '../pages/home.js';
import AgendamentosPage from '../pages/agendamentos.js';
import ContatoPage from '../pages/contato.js';

const routes = {
  '/': HomePage,
  '/agendamentos': AgendamentosPage,
  '/contato': ContatoPage,
};

export function setupRouter() {
  window.addEventListener('popstate', () => {
    navigateTo(location.pathname);
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  navigateTo(location.pathname);
}

function navigateTo(url) {
  history.pushState(null, null, url);
  const route = routes[url] || HomePage;
  document.getElementById('root').innerHTML = route();
}
