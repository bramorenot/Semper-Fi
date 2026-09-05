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
├── public/
│   └── Assets/
│       ├── Logo_Semper_Fi_transparente.png
│       ├── Iconos_Categorias_Semper_Fi/
│       └── [videos y otros assets]
├── src/
│   ├── index.html          # Página principal
│   ├── scripts/            # Scripts TypeScript
│   │   ├── index.ts
│   │   └── extract-canvas.ts
│   ├── styles/             
│   │   └── main.css        # Estilos con color corporativo
│   ├── main.js
│   └── assets/             # Recursos
├── .kombai/                # Archivos de Kombai
├── dist/                   # Build de producción
├── index.html              # Página principal (raíz)
├── assets-demo.html        # Galería de assets
├── package.json
├── vite.config.js
└── README.md
```

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

## 📄 Licencia

© 2026 Semper Fi - Popayán, Cauca, Colombia

---

**Creado con 💙 para impulsar el comercio digital en Popayán**
