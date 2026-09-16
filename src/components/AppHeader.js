/**
 * AppHeader - Web Component para el header de navegación
 * Componente reutilizable que maneja el header con logo, navegación y scroll behavior
 */
class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupScrollBehavior();
  }

  render() {
    this.innerHTML = `
      <header class="fixed top-4 left-4 right-4 w-auto z-[100] flex items-center justify-between px-10 py-6 backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-xl" 
              id="main-nav">
        <div class="flex items-center gap-12">
          <a class="flex items-center gap-3 group" href="/">
            <div class="w-10 h-10 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
              <img src="/Assets/1_1_Logo_Semper_Fi_Con_Fondo_Degradado.png" 
                   alt="Semper Fi Logo" 
                   class="w-full h-full object-cover" />
            </div>
            <span class="text-xl font-bold tracking-tight text-white transition-colors duration-300 logo-text drop-shadow-lg">
              Semper Fi
            </span>
          </a>
          <nav class="hidden lg:flex items-center gap-8">
            <a class="text-sm font-medium text-white/80 hover:text-white nav-link-item transition-colors" 
               href="/sobre-nosotros.html">
              Sobre nosotros
            </a>
            <a class="text-sm font-medium text-white/80 hover:text-white nav-link-item transition-colors" 
               href="/domicilios.html">
              Domicilios
            </a>
            <a class="text-sm font-medium text-white/80 hover:text-white nav-link-item transition-colors" 
               href="/software.html">
              Software
            </a>
            <a class="text-sm font-medium text-white/80 hover:text-white nav-link-item transition-colors" 
               href="/servicios.html">
              Servicios
            </a>
          </nav>
        </div>
        <div class="flex items-center gap-4" style="display: none;">
          <a class="px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-semibold hover:bg-white hover:text-[#2ebaf8] transition-all duration-300 backdrop-blur-sm border border-white/30 nav-btn-signin" 
             href="#">
            Iniciar sesión
          </a>
          <a class="px-5 py-2.5 rounded-full bg-[#2ebaf8] text-white text-sm font-semibold hover:bg-white hover:text-[#2ebaf8] transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/50 nav-btn-demo" 
             href="#">
            Únete ahora
          </a>
        </div>
      </header>
    `;
  }

  setupScrollBehavior() {
    const header = this.querySelector('#main-nav');
    if (!header) return;

    // Determinar si la página inicial debe tener el header claro
    const currentPage = window.location.pathname;
    const lightPages = ['/sobre-nosotros.html', '/domicilios.html', '/software.html', '/servicios.html'];
    
    // Si es una página de contenido, iniciar con estilo claro
    if (lightPages.some(page => currentPage.includes(page))) {
      header.classList.add('is-light');
    }

    // Manejar el cambio de estilo al hacer scroll
    let ticking = false;
    
    const updateHeader = () => {
      const scrollY = window.scrollY;
      const shouldBeLight = scrollY > 100;
      
      if (shouldBeLight && !header.classList.contains('is-light')) {
        header.classList.add('is-light');
      } else if (!shouldBeLight && header.classList.contains('is-light') && !lightPages.some(page => currentPage.includes(page))) {
        header.classList.remove('is-light');
      }
      
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });
  }
}

// Registrar el custom element
customElements.define('app-header', AppHeader);

export default AppHeader;
