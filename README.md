# Semper Fi - Ecosistema Digital Inteligente

![Semper Fi Logo](public/Assets/Logo_Semper_Fi_transparente.png)

Plataforma digital que integra domicilios, gestión empresarial y servicios en Popayán, Colombia.

## 🎨 Identidad Visual Corporativa

### Color Principal
- **Azul Semper Fi**: `#2ebaf8`
- **Azul Oscuro**: `#1a9ad6`
- **Azul Claro**: `#5dcbfb`
- **Fondo Oscuro**: `#0a1628`
- **Fondo Claro**: `#f0f9ff`

### Paleta de Colores Completa
```css
--color-primary: #2ebaf8;
--color-primary-light: #5dcbfb;
--color-primary-dark: #1a9ad6;
--color-secondary: #0d94c9;
--color-accent: #1ebde8;
--color-dark: #0a1628;
--color-light: #f0f9ff;
```

## 🚀 Características

### Cuatro Células Principales

1. **Domicilios** 📦
   - Logística inteligente para comercios y clientes
   - Gestión optimizada de entregas
   - Conexión directa entre clientes y comercios

2. **Stock (Inventario)** 📊
   - Control financiero con IA para restaurantes y cafeterías
   - Análisis de rentabilidad en tiempo real
   - Gestión de costos y ventas

3. **Servicios** 🛠️
   - Conexión de trabajadores independientes con clientes
   - Mecánicos, peluqueros, cerrajeros y más
   - Publicación de servicios con precios personalizados

4. **Reservas** 📅
   - Sistema para hoteles, moteles y restaurantes
   - Gestión de disponibilidad y confirmaciones
   - Pagos centralizados

## 📁 Assets Disponibles

### Logos
- `Logo_Semper_Fi_transparente.png` - Logo principal sin fondo
- `1_1_Logo_Semper_Fi_Con_Fondo_Degradado.png` - Logo con fondo degradado v1
- `Logo_Semper_Fi_Con_Fondo_Degradado_2.png` - Logo con fondo degradado v2
- `Logo_Semper_Fi_Con_Fondo_Degradado_3.png` - Logo con fondo degradado v3
- `Logo_Semper_Fi_Con_Fondo_Degradado_4.png` - Logo con fondo degradado v4
- `Logo_Semper_Fi_Con_Fondo_Degradado_5.png` - Logo con fondo degradado v5
- `Fondo_Azul_Degradado.png` - Fondo azul corporativo

### Iconos de Categorías
Ubicados en `public/Assets/Iconos_Categorias_Semper_Fi/`:
- `2.png` - Icono Domicilios
- `4.png` - Icono Servicios
- `7.png` - Icono Reservas
- `9.png` - Icono Stock/Inventario

### Videos
- `Video_2_Pantalla_de_Carga_SEMPER_FI.mp4` - Video principal de carga
- `Pantalla_de_Carga_SEMPER_FI_6.mp4` - Video usado en hero
- `Intro.mp4` - Video de introducción
- Y 6 versiones más de pantallas de carga animadas

## 📱 Mockups de App
La página incluye mockups de las pantallas de la aplicación móvil:
- Login
- Inicio
- Perfiles
- Reservas
- Menú Digital
- Pedidos de Comida

## 🎯 Galería de Assets

Visita **`assets-demo.html`** para ver todos los recursos visuales disponibles organizados por categorías:
- Logos y Branding
- Iconos de Categorías
- Videos de Carga y Animaciones

## 📁 Estructura del Proyecto

```
Semper-Fi/
├── src/                    # Código fuente (root de Vite)
│   ├── index.html          # Página principal ✅ ÚNICO
│   ├── domicilios.html     # Página de domicilios
│   ├── software.html       # Página de software
│   ├── servicios.html      # Página de servicios
│   ├── sobre-nosotros.html # Página sobre nosotros
│   ├── main.js             # Punto de entrada JS
│   ├── scripts/            # Scripts TypeScript
│   │   ├── index.ts
│   │   └── extract-canvas.ts
│   ├── styles/             # Estilos personalizados
│   │   └── main.css        # Estilos con color corporativo
│   └── assets/             # Recursos específicos de src
│
├── public/                 # Assets públicos ✅ ÚNICO
│   ├── Assets/
│   │   ├── Logo_Semper_Fi_transparente.png
│   │   ├── 1_1_Logo_Semper_Fi_Con_Fondo_Degradado.png
│   │   ├── Iconos_Categorias_Semper_Fi/
│   │   ├── Video_2_Pantalla_de_Carga_SEMPER_FI.mp4
│   │   └── [otros assets]
│   ├── Comida1.jpeg
│   ├── Comida2.jpeg
│   ├── Hero.png
│   └── [mockups de app]
│
├── docs/                   # Documentación organizada 📚 NUEVO
│   ├── changelog/          # Historial de cambios
│   │   ├── CAMBIOS.md
│   │   ├── CAMBIOS-RECIENTES.md
│   │   └── README.md
│   ├── guides/             # Guías de desarrollo y diseño
│   │   ├── GUIA-VISUAL.md
│   │   ├── HERO-UPDATE.md
│   │   ├── INICIO-RAPIDO.md
│   │   ├── LOGO-UPDATE.md
│   │   └── README.md
│   └── README.md
│
├── tests/                  # Archivos de prueba y demos 🧪 NUEVO
│   ├── test-logo.html
│   ├── test-logo-degradado.html
│   ├── preview-hero.html
│   ├── assets-demo.html    # Galería de assets
│   ├── cambios-resumen.html
│   ├── verificacion-cambios.html
│   └── README.md
│
├── .kombai/                # Archivos de Kombai
├── dist/                   # Build de producción (generado)
├── node_modules/           # Dependencias
├── .gitignore              # Archivos ignorados por Git ✅ ACTUALIZADO
├── MIGRATION.md            # Documentación de migración FASE 1 📋 NUEVO
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md               # Este archivo
└── STRUCTURE.md            # Documentación de estructura
```

### 🆕 Cambios Recientes (FASE 1 - Limpieza)

**16 de septiembre de 2026** - Se completó la FASE 1 de limpieza y reorganización:

✅ **Eliminaciones:**
- `index.html` duplicado de la raíz (mantenido solo en `src/`)
- `src/Public/` carpeta duplicada completa (14 archivos)
- `public/Assets/TEMP/` archivos temporales (9 archivos)
- **Total liberado:** ~5.65 MB

✅ **Reorganización:**
- Archivos de prueba movidos a `tests/`
- Documentación organizada en `docs/` (changelog/ y guides/)
- `.gitignore` actualizado con exclusiones

📄 Ver detalles completos en `MIGRATION.md`

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
# o con bun
bun install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o con bun
bun run dev
```

El sitio estará disponible en `http://localhost:3000`

**Nota:** Vite está configurado para usar `src/` como raíz del proyecto, por lo que el punto de entrada es `src/index.html`.

## 🏗️ Build

```bash
# Generar build de producción
npm run build
# o con bun
bun run build
```

## 🌐 Scripts Útiles

```bash
# Extraer canvas de Kombai
bun run src/scripts/extract-canvas.ts

# Preview del build
npm run preview
```

## 🔧 Tecnologías

- **Vite** - Build tool y dev server
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework CSS
- **GSAP** - Animaciones avanzadas
- **Lenis** - Smooth scroll
- **HTML5 Video** - Videos de carga y presentación

## 🎨 Estilos CSS Personalizados

### Clases Utility
```css
.bg-gradient-semperfi       /* Degradado corporativo */
.text-gradient              /* Texto con degradado */
.shadow-semperfi           /* Sombra azul corporativa */
.animate-pulse-slow        /* Animación pulse lenta */
.glass-effect              /* Efecto vidrio esmerilado */
```

### Botones
```css
.btn-semperfi              /* Botón principal con degradado */
.btn-semperfi-outline      /* Botón outline */
.btn-pill-light            /* Botón píldora claro */
.btn-pill-dark             /* Botón píldora oscuro */
```

## 🎯 Criterios UX/UI Implementados

1. **Consistencia Visual**: Color azul #2ebaf8 presente en toda la página
2. **Jerarquía Visual**: Títulos grandes, espaciado generoso
3. **Microinteracciones**: Hover effects, transformaciones suaves
4. **Responsive Design**: Diseño adaptable a todos los dispositivos
5. **Accesibilidad**: Alto contraste, textos legibles
6. **Performance**: Videos lazy loading, imágenes optimizadas
7. **Animaciones**: Transiciones suaves, GSAP para efectos avanzados
8. **Feedback Visual**: Estados hover, active, focus bien definidos

## 🌐 Navegación

- **Inicio** (/) - Página principal con hero y todas las secciones
- **Sobre nosotros** - Información sobre Semper Fi
- **Domicilios** - Servicio de entregas
- **Software** - Sistema de gestión inteligente
- **Servicios** - Plataforma de servicios independientes
- **Galería de Assets** (/assets-demo.html) - Todos los recursos visuales

## 📄 Cambios Implementados

### ✅ Actualización de Colores
- Toda la página ahora usa el color corporativo #2ebaf8
- Secciones oscuras: #0a1628 (azul oscuro)
- Secciones claras: #f0f9ff (azul muy claro)
- Degradados azules en lugar de colores genéricos

### ✅ Integración de Assets
- Logo Semper Fi en header y footer
- Video de pantalla de carga en hero
- Iconos corporativos en sección de categorías
- Video de presentación en sección dedicada
- Galería completa de logos animados
- Mockups de app móvil con imágenes reales

### ✅ Mejoras UX/UI
- Animaciones suaves y profesionales
- Hover effects consistentes
- Mejor contraste y legibilidad
- Diseño responsive mejorado
- Botones con estilos corporativos
- Efectos de vidrio esmerilado (glass effect)

## 📖 Documentación Adicional

### Archivos de Documentación
- **README.md** (este archivo) - Documentación principal del proyecto
- **STRUCTURE.md** - Descripción detallada de la estructura de carpetas
- **MIGRATION.md** - Historial de migraciones y cambios estructurales
- **docs/changelog/** - Historial completo de cambios del proyecto
- **docs/guides/** - Guías de desarrollo, diseño y características

### Para Desarrolladores Nuevos
1. Lee `docs/guides/INICIO-RAPIDO.md` para comenzar
2. Consulta `docs/guides/GUIA-VISUAL.md` para temas de diseño
3. Revisa `MIGRATION.md` para entender cambios recientes
4. Explora `tests/assets-demo.html` para ver todos los recursos disponibles

### Archivos de Prueba
Los archivos HTML de prueba y demos están en `tests/`:
- `test-logo.html` - Pruebas de logos
- `assets-demo.html` - Galería completa de assets
- `preview-hero.html` - Preview de secciones

**Nota:** La carpeta `tests/` está excluida de Git (.gitignore) y es solo para desarrollo local.

## 📄 Licencia

© 2026 Semper Fi - Popayán, Cauca, Colombia

---

**Creado con 💙 para impulsar el comercio digital en Popayán**

---

### 📝 Historial de Versiones

**v1.1.0** - 16 de septiembre de 2026
- FASE 1: Limpieza y reorganización de estructura
- Eliminados archivos duplicados y temporales
- Organizada documentación en docs/
- Creada carpeta tests/ para archivos de prueba
- ~5.65 MB de espacio liberado

**v1.0.0** - Inicial
- Lanzamiento del proyecto Semper Fi
- Implementación de diseño corporativo
- Integración de assets y videos
