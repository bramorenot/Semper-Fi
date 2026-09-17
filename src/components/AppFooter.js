/**
 * AppFooter - Web Component para el footer del sitio
 * Componente reutilizable con información de la empresa, enlaces y secciones
 */
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="w-full bg-[#f9f8f6] py-32 px-10 border-t border-black/5">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row justify-between gap-24">
            <div class="lg:max-w-sm">
              <div class="flex items-center gap-3 mb-12">
                <div class="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                  <img src="/Assets/1_1_Logo_Semper_Fi_Con_Fondo_Degradado.png" 
                       alt="Semper Fi Logo" 
                       class="w-full h-full object-cover" />
                </div>
                <span class="text-3xl font-semibold tracking-tight">Semper Fi</span>
              </div>
              <p class="text-[#70706f] text-sm leading-relaxed">
                © 2026 Semper Fi. Popayán, Cauca, Colombia.
                <br/>
                Org.nr: 5595734681
              </p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-16 flex-1">
              <div>
                <h5 class="text-[10px] font-mono text-gray-400 mb-8 uppercase tracking-widest">Producto</h5>
                <ul class="space-y-4">
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">Precios</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="/domicilios.html">Domicilios</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="/software.html">Software</a></li>
                </ul>
              </div>
              <div>
                <h5 class="text-[10px] font-mono text-gray-400 mb-8 uppercase tracking-widest">Compañía</h5>
                <ul class="space-y-4">
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="/sobre-nosotros.html">Sobre nosotros</a></li>
                </ul>
              </div>
              <div>
                <h5 class="text-[10px] font-mono text-gray-400 mb-8 uppercase tracking-widest">Contacto</h5>
                <ul class="space-y-4">
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="mailto:info@semperfi.app">info@semperfi.app</a></li>
                </ul>
              </div>
              <div>
                <h5 class="text-[10px] font-mono text-gray-400 mb-8 uppercase tracking-widest">Legal</h5>
                <ul class="space-y-4">
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">Términos y condiciones</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">Acuerdo de aliados</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">Política de privacidad</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">DPA</a></li>
                  <li><a class="font-serif text-xl hover:text-gray-500 transition-colors" href="#">Política de cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

// Registrar el custom element
customElements.define('app-footer', AppFooter);

export default AppFooter;
