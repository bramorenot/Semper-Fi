# 🎨 Guía Visual de Semper Fi

## 📐 Sistema de Diseño

### Paleta de Colores Corporativa

#### Color Principal
```
#2ebaf8 - Azul Semper Fi
RGB: (46, 186, 248)
HSL: (198°, 93%, 58%)
```

#### Escala de Azules
```css
/* Muy Claro - Fondos */
--semperfi-50:  #f0f9ff  /* Fondo claro principal */
--semperfi-100: #e0f2fe  /* Fondo alternativo */

/* Claros - Acentos sutiles */
--semperfi-200: #bae6fd
--semperfi-300: #7dd3fc
--semperfi-400: #5dcbfb

/* Principal */
--semperfi-500: #2ebaf8  /* COLOR CORPORATIVO PRINCIPAL ⭐ */

/* Oscuros - Hover states */
--semperfi-600: #1a9ad6  /* Hover principal */
--semperfi-700: #0d94c9  /* Estados activos */
--semperfi-800: #0a7ab5  /* Textos sobre fondo claro */

/* Muy Oscuro - Fondos oscuros */
--semperfi-900: #0a1628  /* Fondo oscuro principal */
```

### 🎯 Usos de Colores

#### Fondos
- **Secciones Claras**: `#f0f9ff` (semperfi-50)
- **Secciones Oscuras**: `#0a1628` (semperfi-900)
- **Overlay sobre video**: `from-[#0a1628]/80 to-transparent`

#### Textos
- **Sobre fondo claro**: `#0f172a` (negro suave)
- **Sobre fondo oscuro**: `#ffffff` (blanco)
- **Texto secundario claro**: `#475569`
- **Texto secundario oscuro**: `rgba(255,255,255,0.8)`

#### Botones
```css
/* Botón Principal */
background: linear-gradient(135deg, #2ebaf8 0%, #1a9ad6 100%);
color: white;

/* Hover */
background: white;
color: #2ebaf8;
border: 2px solid #2ebaf8;
```

```css
/* Botón Outline */
background: transparent;
color: #2ebaf8;
border: 2px solid #2ebaf8;

/* Hover */
background: #2ebaf8;
color: white;
```

#### Bordes y Divisores
- **Bordes sutiles**: `border-[#2ebaf8]/20`
- **Bordes destacados**: `border-[#2ebaf8]/50`
- **Bordes sólidos**: `border-[#2ebaf8]`

#### Sombras
```css
/* Sombra suave */
box-shadow: 0 10px 40px rgba(46, 186, 248, 0.3);

/* Sombra media */
box-shadow: 0 20px 60px rgba(46, 186, 248, 0.4);

/* Sombra fuerte */
box-shadow: 0 30px 80px rgba(46, 186, 248, 0.5);
```

## 🔤 Tipografía

### Familias de Fuentes
```css
--font-serif: "Gestura Headline", Georgia, serif;
--font-sans: "Inter", sans-serif;
--font-mono: "Roboto Mono", monospace;
```

### Escala Tipográfica
```css
/* Títulos Principales (Hero) */
.hero-title {
  font-size: 4.5rem;      /* 72px */
  line-height: 1.1;
  font-weight: 600;
}

/* Títulos de Sección */
.section-title {
  font-size: 3.5rem;      /* 56px */
  line-height: 1.1;
  font-weight: 600;
}

/* Subtítulos */
.subtitle {
  font-size: 2rem;        /* 32px */
  line-height: 1.3;
  font-weight: 500;
}

/* Cuerpo Grande */
.body-large {
  font-size: 1.25rem;     /* 20px */
  line-height: 1.6;
}

/* Cuerpo Normal */
.body {
  font-size: 1rem;        /* 16px */
  line-height: 1.6;
}

/* Texto Pequeño */
.small-text {
  font-size: 0.875rem;    /* 14px */
  line-height: 1.5;
}

/* Mono/Labels */
.label {
  font-size: 0.688rem;    /* 11px */
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
```

## 🎬 Animaciones

### Duraciones
```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Easing Functions
```css
--ease-out: cubic-bezier(0.4, 0, 0.6, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animaciones Predefinidas
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse Lento */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
```

## 📏 Espaciado

### Sistema de Espaciado (8px base)
```css
--space-xs:   0.5rem;  /*  8px */
--space-sm:   1rem;    /* 16px */
--space-md:   1.5rem;  /* 24px */
--space-lg:   2rem;    /* 32px */
--space-xl:   3rem;    /* 48px */
--space-2xl:  4rem;    /* 64px */
--space-3xl:  6rem;    /* 96px */
--space-4xl:  8rem;    /* 128px */
```

### Aplicación
- **Padding de secciones**: `py-40 px-10` (160px vertical, 40px horizontal)
- **Gap entre elementos**: `gap-8` (32px)
- **Margin bottom títulos**: `mb-10` (40px)

## 🔲 Bordes y Radios

### Border Radius
```css
--radius-sm:   0.5rem;   /*  8px - inputs */
--radius-md:   1rem;     /* 16px - cards */
--radius-lg:   1.5rem;   /* 24px - featured cards */
--radius-xl:   2rem;     /* 32px - hero panels */
--radius-2xl:  2.5rem;   /* 40px - special sections */
--radius-3xl:  3rem;     /* 48px - extra special */
--radius-full: 9999px;   /* Píldoras, botones redondeados */
```

## 🖼️ Assets y Recursos

### Iconos de Categorías
```
Tamaño recomendado: 96px × 96px
Formato: PNG con transparencia
Background: Degradado azul corporativo
Padding interno: 24px
```

### Logos
```
Logo Principal:
- Formato: PNG con transparencia
- Tamaño Header: 32px × 32px
- Tamaño Hero: 96px × 96px
- Tamaño Footer: 40px × 40px
```

### Videos
```
Formato: MP4 (H.264)
Resolución recomendada: 1920×1080
Duración pantallas de carga: 3-5 segundos
Compresión: Balanceada (calidad/tamaño)
```

## 🎯 Componentes

### Tarjetas de Categoría
```css
.category-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(46, 186, 248, 0.4);
}

.category-card-icon {
  background: linear-gradient(135deg, #2ebaf8, #1a9ad6);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Botones
```css
.btn-primary {
  background: linear-gradient(135deg, #2ebaf8, #1a9ad6);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: white;
  color: #2ebaf8;
  border: 2px solid #2ebaf8;
  transform: scale(1.05);
}
```

### Video Container
```css
.video-hero {
  position: absolute;
  inset: 0;
  object-fit: cover;
  opacity: 0.3;
}

.video-section {
  aspect-ratio: 16/9;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 4px solid rgba(46, 186, 248, 0.3);
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First */
/* xs: 0px - 639px (default) */

/* Tablet */
@media (min-width: 640px) { /* sm */ }

/* Tablet Landscape */
@media (min-width: 768px) { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Large Desktop */
@media (min-width: 1280px) { /* xl */ }

/* Extra Large */
@media (min-width: 1536px) { /* 2xl */ }
```

## ✨ Efectos Especiales

### Glass Effect (Vidrio Esmerilado)
```css
.glass-effect {
  backdrop-filter: blur(10px);
  background-color: rgba(46, 186, 248, 0.1);
  border: 1px solid rgba(46, 186, 248, 0.2);
}
```

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(135deg, #2ebaf8, #1a9ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Degradados de Fondo
```css
/* Horizontal */
.bg-gradient-h {
  background: linear-gradient(90deg, #2ebaf8, #1a9ad6);
}

/* Diagonal */
.bg-gradient-diagonal {
  background: linear-gradient(135deg, #2ebaf8 0%, #1a9ad6 50%, #0d94c9 100%);
}

/* Radial */
.bg-gradient-radial {
  background: radial-gradient(circle, #2ebaf8 0%, #1a9ad6 100%);
}
```

## 🎨 Combinaciones de Color Aprobadas

### Sobre Fondo Claro (#f0f9ff)
- Títulos: `#0f172a` (negro suave)
- Cuerpo: `#475569` (gris)
- Acentos: `#2ebaf8` (azul corporativo)
- Botones: Degradado azul o outline azul

### Sobre Fondo Oscuro (#0a1628)
- Títulos: `#ffffff` (blanco)
- Cuerpo: `rgba(255,255,255,0.8)` (blanco 80%)
- Acentos: `#2ebaf8` (azul corporativo)
- Botones: Blanco con texto azul o outline blanco

### Tarjetas sobre Fondo Claro
- Background: `#ffffff` (blanco)
- Border: `rgba(46, 186, 248, 0.1)` (azul suave)
- Shadow: `rgba(46, 186, 248, 0.3)`

## 📋 Checklist de Diseño

✅ **Color**
- [ ] Usar #2ebaf8 como color principal
- [ ] Fondos claros: #f0f9ff
- [ ] Fondos oscuros: #0a1628
- [ ] Gradientes solo con tonos azules corporativos

✅ **Tipografía**
- [ ] Títulos grandes (3.5rem+) con line-height 1.1
- [ ] Cuerpo con line-height 1.6
- [ ] Labels en uppercase con letter-spacing

✅ **Espaciado**
- [ ] Usar sistema de 8px
- [ ] Padding secciones: py-40 px-10
- [ ] Margin bottom títulos: mb-10

✅ **Interactividad**
- [ ] Todos los elementos clicables tienen hover state
- [ ] Transiciones de 300ms
- [ ] Scale en hover: 1.05
- [ ] Sombras en hover

✅ **Responsive**
- [ ] Mobile first approach
- [ ] Grids responsive (cols-1 md:cols-2 lg:cols-4)
- [ ] Videos con aspect-ratio
- [ ] Textos escalables

---

💙 **Semper Fi - Guía Visual Corporativa**  
**Color Principal**: #2ebaf8
