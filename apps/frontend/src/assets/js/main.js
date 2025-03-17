import { loadNavbar } from '../components/Navbar.js';
import { loadFooter } from '../components/Footer.js';
import { setupRouter } from '../router/router.js';

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
  setupRouter();
});
