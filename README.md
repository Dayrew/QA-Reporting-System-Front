# QA Reporting System (Frontend)

Proyecto de portafolio para mostrar un sistema de gestion de reportes de errores con login, dashboard, errores, reportes, catalogos, usuarios y configuracion.

## Estructura de carpetas (src)
- `app/` bootstrap de la app, providers, configuracion global.
- `assets/` imagenes, iconos y recursos estaticos.
- `components/` UI reutilizable y generica (botones, inputs, tablas, badges).
- `constants/` constantes compartidas (roles, labels, rutas, etc).
- `data/` mocks y datos de ejemplo.
- `features/` funcionalidades por dominio (auth, dashboard, errors, reports, catalogs, users, settings).
- `hooks/` hooks reutilizables.
- `layouts/` layouts de pagina (ej. sidebar + contenido).
- `lib/` utilidades, helpers, servicios y client API.
- `routes/` definicion de rutas y proteccion de acceso.
- `styles/` estilos globales y tokens.
- `types/` tipos compartidos de TypeScript.

## Scripts
- `npm run dev` inicia el servidor de desarrollo.
- `npm run build` genera la build de produccion.
- `npm run preview` previsualiza la build.
- `npm run lint` corre ESLint.
