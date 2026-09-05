# 📁 Estructura del Proyecto Semper Fi

## Descripción de Carpetas

```
Semper-Fi/
│
├── 📂 src/                          # Código fuente
│   ├── 📄 index.html               # Página principal del sitio
│   │
│   ├── 📂 scripts/                 # Scripts TypeScript
│   │   ├── index.ts               # Script principal
│   │   └── extract-canvas.ts      # Extractor de Kombai
│   │
│   ├── 📂 styles/                  # Estilos personalizados
│   │   └── main.css               # Estilos CSS adicionales
│   │
│   └── 📂 assets/                  # Recursos estáticos
│       ├── images/                # Imágenes (futuro)
│       ├── icons/                 # Iconos (futuro)
│       └── fonts/                 # Fuentes personalizadas (futuro)
│
├── 📂 .kombai/                      # Archivos generados por Kombai
│   ├── canvas/                    # Canvas de diseño
│   └── design-systems/            # Sistemas de diseño
│
├── 📂 node_modules/                 # Dependencias npm
│
├── 📂 dist/                         # Build de producción (generado)
│
├── 📄 .env.example                  # Variables de entorno de ejemplo
├── 📄 .gitignore                    # Archivos ignorados por Git
├── 📄 bun.lock                      # Lockfile de Bun
├── 📄 package.json                  # Configuración del proyecto
├── 📄 tsconfig.json                 # Configuración TypeScript
├── 📄 vite.config.js                # Configuración de Vite
├── 📄 README.md                     # Documentación principal
└── 📄 STRUCTURE.md                  # Este archivo
```

## 🎯 Propósito de Cada Carpeta

### `/src` - Código Fuente
Contiene todo el código fuente del proyecto. Esta es la carpeta principal donde desarrollas.

### `/src/scripts` - Scripts TypeScript
Scripts de TypeScript para funcionalidades específicas:
- `index.ts`: Punto de entrada principal
- `extract-canvas.ts`: Herramienta para extraer HTML desde Kombai

### `/src/styles` - Estilos
Estilos CSS personalizados que complementan Tailwind CSS:
- Variables CSS personalizadas
- Animaciones adicionales
- Utilidades específicas del proyecto

### `/src/assets` - Recursos Estáticos
Recursos como imágenes, iconos, fuentes que se usarán en el sitio.

### `/.kombai` - Archivos de Kombai
Carpeta de trabajo de Kombai con los diseños y canvas del proyecto.

### `/dist` - Build de Producción
Carpeta generada automáticamente con el build optimizado para producción.
**No editar manualmente** - Se genera con `npm run build`

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

- [ ] Agregar componentes reutilizables en `/src/components`
- [ ] Implementar sistema de routing
- [ ] Configurar testing con Vitest
- [ ] Agregar CI/CD pipeline
- [ ] Optimizar imágenes con Vite plugins

---

**Última actualización**: Febrero 2026
