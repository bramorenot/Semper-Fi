# Semper Fi - Ecosistema Digital Inteligente

Plataforma digital que integra domicilios, gestión empresarial y servicios en Popayán, Colombia.

## 🚀 Características

- **Domicilios**: Logística inteligente para comercios y clientes
- **Stock (Inventario)**: Control financiero con IA para restaurantes y cafeterías
- **Servicios**: Conexión de trabajadores independientes con clientes
- **Reservas**: Sistema para hoteles, moteles y restaurantes

## 📁 Estructura del Proyecto

```
Semper-Fi/
├── src/
│   ├── index.html          # Página principal
│   ├── scripts/            # Scripts TypeScript
│   │   ├── index.ts
│   │   └── extract-canvas.ts
│   ├── styles/             # Estilos (futuro)
│   └── assets/             # Recursos (imágenes, etc.)
├── .kombai/                # Archivos de Kombai
├── dist/                   # Build de producción
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
- **Tailwind CSS** - Framework CSS (via CDN)
- **GSAP** - Animaciones
- **Lenis** - Smooth scroll

---

**Semper Fi** - Impulsando el comercio digital en Popayán 🚀
