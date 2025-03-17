export function loadNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
      <nav>
        <ul>
          <li><a href="/" data-link>Home</a></li>
          <li><a href="/agendamentos" data-link>Agendamentos</a></li>
          <li><a href="/contato" data-link>Contato</a></li>
        </ul>
      </nav>
    `;
  }
  