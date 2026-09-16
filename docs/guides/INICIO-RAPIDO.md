# 🚀 Inicio Rápido - Semper Fi

## 📋 Requisitos Previos

- Node.js 18+ o Bun instalado
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## 🎯 Iniciar el Proyecto

### Opción 1: Con npm

```bash
# 1. Navegar a la carpeta del proyecto
cd c:\Users\Moreno\Documents\Semper-Fi

# 2. Instalar dependencias (si no están instaladas)
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Opción 2: Con Bun (Más rápido)

```bash
# 1. Navegar a la carpeta del proyecto
cd c:\Users\Moreno\Documents\Semper-Fi

# 2. Instalar dependencias (si no están instaladas)
bun install

# 3. Iniciar servidor de desarrollo
bun run dev
```

## 🌐 Acceder a la Aplicación

Una vez iniciado el servidor, abre tu navegador en:

- **Página Principal**: http://localhost:3000
- **Página Principal (raíz)**: http://localhost:3000/index.html
- **Galería de Assets**: http://localhost:3000/assets-demo.html
- **Resumen de Cambios**: http://localhost:3000/cambios-resumen.html

## 📁 Archivos Importantes

### Para Ver en el Navegador
- `index.html` - Página principal completa
- `assets-demo.html` - Galería de todos los assets
- `cambios-resumen.html` - Resumen visual de cambios

### Documentación
- `README.md` - Documentación principal del proyecto
- `CAMBIOS.md` - Lista detallada de cambios
- `GUIA-VISUAL.md` - Guía de diseño y estilos
- `INICIO-RAPIDO.md` - Este archivo

### Código Fuente
- `src/styles/main.css` - Estilos con color corporativo
- `src/main.js` - JavaScript principal
- `tailwind.config.js` - Configuración de Tailwind

## 🎨 Color Corporativo

El color principal de Semper Fi es:

```css
#2ebaf8
```

Este color está aplicado en:
- Botones principales
- Acentos y highlights
- Degradados
- Sombras
- Bordes importantes

## 📦 Assets Disponibles

Todos los assets están en `public/Assets/`:

### Logos
- `Logo_Semper_Fi_transparente.png` - Logo principal
- `Logo_Semper_Fi_Con_Fondo_Degradado_X.png` - Versiones con fondo (2-5)

### Videos
- `Pantalla_de_Carga_SEMPER_FI_6.mp4` - Video hero
- `Video_2_Pantalla_de_Carga_SEMPER_FI.mp4` - Video intro
- Más videos en la carpeta Assets

### Iconos
- `Iconos_Categorias_Semper_Fi/` - 8 iconos para categorías

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
bun run dev          # Iniciar con Bun (más rápido)

# Build
npm run build        # Crear build de producción
bun run build        # Build con Bun

# Preview
npm run preview      # Ver build de producción
bun run preview      # Preview con Bun

# Scripts TypeScript
bun run src/scripts/extract-canvas.ts  # Extraer canvas de Kombai
```

## 📱 Responsive Testing

Prueba la página en diferentes tamaños:
- **Mobile**: 375px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## ✅ Checklist de Verificación

Antes de publicar, verifica:

- [ ] Todas las imágenes cargan correctamente
- [ ] Todos los videos se reproducen
- [ ] Los colores corporativos están aplicados
- [ ] Hover effects funcionan en botones y tarjetas
- [ ] La navegación funciona en todas las páginas
- [ ] El diseño es responsive (mobile, tablet, desktop)
- [ ] No hay errores en la consola del navegador

## 🎯 Páginas a Revisar

1. **Página Principal** (`/index.html`)
   - Hero con video de fondo
   - Sección de video intro
   - Categorías con iconos
   - Todas las secciones actualizadas

2. **Galería de Assets** (`/assets-demo.html`)
   - Todos los logos visibles
   - Todos los iconos visibles
   - Todos los videos funcionando

3. **Resumen de Cambios** (`/cambios-resumen.html`)
   - Paleta de colores
   - Assets integrados
   - Secciones actualizadas

## 🔧 Solución de Problemas

### El servidor no inicia
```bash
# Limpiar caché de node_modules
rm -rf node_modules
npm install
# o
bun install
```

### Las imágenes no cargan
- Verifica que la carpeta `public/Assets/` existe
- Verifica los paths en el HTML (deben empezar con `/Assets/`)

### Los videos no se reproducen
- Verifica que los archivos .mp4 están en `public/Assets/`
- Algunos navegadores requieren interacción del usuario para videos con audio
- Los videos en hero tienen `muted` para autoplay

### Estilos no se aplican
- Verifica que `src/styles/main.css` está importado
- Revisa la consola del navegador por errores
- Limpia caché del navegador (Ctrl+Shift+R)

## 📞 Recursos Adicionales

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **GSAP Docs**: https://greensock.com/docs/
- **Vite Docs**: https://vitejs.dev/

## 🎉 ¡Listo!

Tu proyecto Semper Fi está completamente actualizado con:
- ✅ Color corporativo #2ebaf8 aplicado
- ✅ Todos los assets integrados
- ✅ Videos y animaciones funcionando
- ✅ Diseño responsive
- ✅ Documentación completa

---

💙 **Semper Fi - Ecosistema Digital Inteligente para Popayán**

Para más información, revisa:
- `README.md` - Documentación completa
- `GUIA-VISUAL.md` - Guía de diseño
- `CAMBIOS.md` - Lista de cambios detallada
