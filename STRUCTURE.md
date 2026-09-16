# 📁 Estructura del Proyecto Semper Fi

**Última actualización:** 16 de septiembre de 2026 - FASE 1: Limpieza Completa

---

## 📊 Resumen de Cambios (FASE 1)

✅ **Estructura reorganizada y optimizada**
- Eliminados archivos duplicados
- Documentación categorizada
- Archivos de prueba organizados
- ~5.65 MB de espacio liberado

📋 Ver detalles completos en `MIGRATION.md`

---

## Descripción de Carpetas

```
Semper-Fi/
│
├── 📂 src/                          # Código fuente (ROOT de Vite) ✅
│   ├── 📄 index.html               # Página principal ✅ ÚNICO
│   ├── 📄 domicilios.html          # Página de domicilios
│   ├── 📄 software.html            # Página de software
│   ├── 📄 servicios.html           # Página de servicios
│   ├── 📄 sobre-nosotros.html      # Página sobre nosotros
│   ├── 📄 main.js                  # Punto de entrada JavaScript
│   │
│   ├── 📂 scripts/                 # Scripts TypeScript
│   │   ├── index.ts               # Script principal
│   │   └── extract-canvas.ts      # Extractor de Kombai
│   │
│   ├── 📂 styles/                  # Estilos personalizados
│   │   └── main.css               # Estilos CSS (color corporativo #2ebaf8)
│   │
│   └── 📂 assets/                  # Recursos estáticos específicos de src
│       └── (vacío - para uso futuro)
│
├── 📂 public/                       # Assets públicos ✅ ÚNICO
│   ├── 📂 Assets/                  # Assets corporativos
│   │   ├── Logo_Semper_Fi_transparente.png
│   │   ├── 1_1_Logo_Semper_Fi_Con_Fondo_Degradado.png
│   │   ├── Fondo_Azul_Degradado.png
│   │   ├── 📂 Iconos_Categorias_Semper_Fi/
│   │   │   ├── 2.png - 9.png      # Iconos de categorías
│   │   ├── Video_2_Pantalla_de_Carga_SEMPER_FI.mp4
│   │   └── [otros videos y assets]
│   ├── Comida1.jpeg                # Mockups de app
│   ├── Comida2.jpeg
│   ├── Hero.png                    # Imagen hero principal
│   ├── 📂 integrantes/             # Fotos del equipo
│   └── service*.png                # Imágenes de servicios
│
├── 📂 docs/                         # Documentación organizada 📚 NUEVO
│   ├── 📂 changelog/               # Historial de cambios
│   │   ├── CAMBIOS.md             # Historial completo
│   │   ├── CAMBIOS-RECIENTES.md   # Últimos cambios
│   │   └── README.md              # Guía de changelog
│   │
│   ├── 📂 guides/                  # Guías de desarrollo
│   │   ├── GUIA-VISUAL.md         # Identidad visual
│   │   ├── HERO-UPDATE.md         # Actualización de hero
│   │   ├── INICIO-RAPIDO.md       # Inicio rápido
│   │   ├── LOGO-UPDATE.md         # Actualización de logo
│   │   └── README.md              # Índice de guías
│   │
│   └── README.md                   # Índice de documentación
│
├── 📂 tests/                        # Archivos de prueba 🧪 NUEVO
│   ├── test-logo.html             # Prueba de logos
│   ├── test-logo-degradado.html   # Prueba logo degradado
│   ├── preview-hero.html          # Preview de hero
│   ├── assets-demo.html           # Galería de assets
│   ├── cambios-resumen.html       # Resumen de cambios
│   ├── verificacion-cambios.html  # Verificación visual
│   └── README.md                  # Documentación de tests
│
├── 📂 .kombai/                      # Archivos generados por Kombai
│   ├── canvas/                    # Canvas de diseño
│   └── design-systems/            # Sistemas de diseño
│
├── 📂 node_modules/                 # Dependencias npm (generado)
│
├── 📂 dist/                         # Build de producción (generado)
│
├── 📄 .env.example                  # Variables de entorno de ejemplo
├── 📄 .gitignore                    # Archivos ignorados por Git ✅ ACTUALIZADO
├── 📄 bun.lock                      # Lockfile de Bun
├── 📄 package.json                  # Configuración del proyecto
├── 📄 tsconfig.json                 # Configuración TypeScript
├── 📄 vite.config.js                # Configuración de Vite (root: 'src')
├── 📄 tailwind.config.js            # Configuración de Tailwind
├── 📄 postcss.config.js             # Configuración de PostCSS
├── 📄 MIGRATION.md                  # Historial de migraciones 📋 NUEVO
├── 📄 README.md                     # Documentación principal ✅ ACTUALIZADO
└── 📄 STRUCTURE.md                  # Este archivo ✅ ACTUALIZADO
```

## 🎯 Propósito de Cada Carpeta

### `/src` - Código Fuente ✅
Contiene todo el código fuente del proyecto. Esta es la carpeta principal donde desarrollas.
- **Configuración Vite:** `root: 'src'` - Vite usa esta carpeta como raíz
- **Punto de entrada:** `index.html` - Único archivo index (sin duplicados)
- **Rutas:** Las rutas absolutas (`/`) apuntan a `src/`

### `/src/scripts` - Scripts TypeScript
Scripts de TypeScript para funcionalidades específicas:
- `index.ts`: Punto de entrada principal (uso futuro)
- `extract-canvas.ts`: Herramienta para extraer HTML desde Kombai

### `/src/styles` - Estilos
Estilos CSS personalizados que complementan Tailwind CSS:
- Variables CSS personalizadas (color corporativo #2ebaf8)
- Animaciones adicionales
- Utilidades específicas del proyecto
- **Nota:** Actualmente los HTML tienen estilos embebidos (FASE 2 migrará esto)

### `/src/assets` - Recursos Estáticos
Recursos específicos de desarrollo (actualmente vacío, para uso futuro).

### `/public` - Assets Públicos ✅
Assets estáticos servidos directamente por Vite.
- **Configuración:** `publicDir: '../public'` (desde src/)
- **Acceso:** Vía rutas como `/Assets/logo.png`
- **NO duplicar:** Esta es la única carpeta de assets públicos
- **Contenido:** Logos, iconos, videos, imágenes, mockups

### `/docs` - Documentación 📚 NUEVO
Documentación organizada del proyecto:
- **changelog/**: Historial de cambios y actualizaciones
- **guides/**: Guías de desarrollo, diseño y características
- **Propósito:** Mantener documentación categorizada y fácil de navegar

### `/tests` - Archivos de Prueba 🧪 NUEVO
Archivos HTML de prueba, demos y verificación:
- **assets-demo.html**: Galería completa de assets
- **test-*.html**: Pruebas de componentes específicos
- **preview-*.html**: Previews de secciones
- **Excluido de Git:** Solo para desarrollo local
- **No en producción:** No se incluye en build

### `/.kombai` - Archivos de Kombai
Carpeta de trabajo de Kombai con los diseños y canvas del proyecto.

### `/dist` - Build de Producción
Carpeta generada automáticamente con el build optimizado para producción.
- **No editar manualmente** - Se genera con `npm run build`
- **Gitignore:** Excluida de Git

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build
npm run build            # Genera build de producción
npm run preview          # Preview del build

# Utilidades
npm run extract          # Extrae HTML desde Kombai canvas
npm run lint            # Ejecuta linter
```

## 📝 Convenciones

1. **Nombres de archivos**: 
   - kebab-case para archivos: `extract-canvas.ts`
   - PascalCase para componentes (futuro)

2. **Imports**:
   - Usar rutas relativas desde `src/`
   - Ejemplo: `import './styles/main.css'`

3. **Comentarios**:
   - Documentar funciones complejas
   - Usar JSDoc cuando sea apropiado

## 🚀 Próximos Pasos

### ✅ FASE 1: Limpieza - COMPLETADA
- [x] Eliminar archivos duplicados
- [x] Organizar documentación en docs/
- [x] Crear carpeta tests/ para archivos de prueba
- [x] Actualizar .gitignore
- [x] Documentar cambios en MIGRATION.md

### 🔄 FASE 2: Componentización - PENDIENTE
- [ ] Crear carpeta `src/components/`
- [ ] Extraer header a componente reutilizable (Web Component o include)
- [ ] Extraer footer a componente reutilizable
- [ ] Eliminar código HTML duplicado de headers/footers

### 🎨 FASE 3: Estilos - PENDIENTE
- [ ] Mover CSS embebido de HTML a `src/styles/main.css`
- [ ] Eliminar tags `<style>` de todos los archivos HTML
- [ ] Organizar estilos por componente
- [ ] Crear `src/styles/components/` para estilos modulares

### ⚙️ FASE 4: JavaScript - PENDIENTE
- [ ] Implementar animaciones GSAP en `src/scripts/animations.js`
- [ ] Configurar Lenis smooth scroll en `src/scripts/smooth-scroll.js`
- [ ] Crear lógica de header interactivo en `src/scripts/header-controller.js`
- [ ] Poblar `src/main.js` con imports y configuración

---

**Última actualización de estructura:** Septiembre 16, 2026 (FASE 1 completada)
