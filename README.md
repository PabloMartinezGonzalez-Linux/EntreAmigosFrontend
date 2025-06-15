# EntreAmigos Frontend

Aplicación de cliente **SPA** desarrollada con Angular 19.2.5 y TailwindCSS. Permite a usuarios registrarse, iniciar sesión, ver su lista de amigos y chatear en tiempo real usando la API de EntreAmigos Backend. 

---

## 🛠 Tecnologías

- **Framework**: Angular 19.2.5  
- **Estilos**: TailwindCSS (via PostCSS y `mypreset.ts`)  
- **Bundler / CLI**: Angular CLI  
- **Lenguaje**: TypeScript  
- **HTTP**: `HttpClient` de Angular  
- **Routing**: `@angular/router`  
- **Gestión de estado**: RxJS + servicios inyectables  
- **Testing**: Karma + Jasmine  

---

## ✔️ Requisitos

- Node.js v16+  
- npm v8+ o yarn v1/v2+  
- Angular CLI v19.2.5 (`npm install -g @angular/cli@19.2.5`)  
- Una instancia del backend de EntreAmigos corriendo (por defecto en `http://localhost:4000/api`)

---

## 🚀 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/PabloMartinezGonzalez-Linux/EntreAmigosFrontend.git
cd EntreAmigosFrontend

# 2. Instala dependencias
npm install
# o
yarn install
```

## Estructura del proyecto

EntreAmigosFrontend/
├── .vscode/                  # Configuración de editor
├── public/                   # Archivos estáticos (index.html, favicon…)
├── src/
│   ├── app/
│   │   ├── components/       # Componentes compartidos (botones, modales…)
│   │   ├── layouts/          # Layouts (header, footer…)
│   │   ├── pages/            # Vistas principales (login, register, home, chat)
│   │   ├── services/         # Servicios HTTP, autenticación, sockets…
│   │   ├── models/           # Interfaces y tipos TypeScript
│   │   ├── guards/           # Route guards (AuthGuard)
│   │   ├── interceptors/     # HTTP interceptors (token, error handling)
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/               # Imágenes, fuentes, estilos globales
│   ├── environments/         # Variables de entorno
│   └── styles/               # Tailwind @imports y global.css
├── .editorconfig
├── .gitignore
├── .postcssrc.json           # Configuración PostCSS / TailwindCSS
├── angular.json              # Configuración Angular CLI
├── mypreset.ts               # Tailwind preset
├── package.json
├── tsconfig.json
└── README.md                

## 🏗️ Arquitectura y Flujo de Datos

1. **Inicio**: El usuario carga el shell de Angular (`index.html` → `main.ts` → `AppModule`).  
2. **Autenticación**:  
   - `AuthService` gestiona login/register vía HTTP  
   - `AuthGuard` protege rutas privadas  
   - JWT almacenado en `localStorage`  
3. **Estado y Datos**:  
   - Cada página/feature usa su propio servicio para llamar a la API (`HttpClient`)  
   - Respuestas mapeadas a **Modelos** (interfaces TS)  
   - Comunicación en tiempo real por **WebSockets** (p. ej. `SocketService`)  
4. **UI y Estilos**:  
   - Layout principal (`MainLayoutComponent`) con header/footer  
   - Componentes reutilizables (botones, modales, listas)  
   - TailwindCSS para estilo atómico y theming  


## 💻 EntreAmigos Backend

API REST y WebSocket para la aplicación EntreAmigos, desarrollada con **Node.js**, **Express** y **MongoDB**. Gestiona usuarios, autenticación, amigos y mensajería en tiempo real.

---

## 🛠 Tecnologías

- **Runtime**: Node.js v16+  
- **Framework**: Express v4.x  
- **Base de datos**: PostgresSQl
- **Autenticación**: JWT (jsonwebtoken)  
- **Entorno**: dotenv  

---

## ✔️ Requisitos

- Node.js v16+  
- npm v8+ o yarn v1/v2+  
- PostgresSQl ejecutándose 
- Variables de entorno definidas en `.env` (ver más abajo)  

---

## 🚀 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/PabloMartinezGonzalez-Linux/EntreAmigosBackend.git
cd EntreAmigosBackend

# 2. Instala dependencias
npm install
# o
yarn install
```
## Estructura del proyecto  
.
├── src/
│   ├── config/
│   │   └── db.js                    # Conexión a MongoDB
│   ├── controllers/
│   │   ├── auth.controller.js       # register, login, refreshToken
│   │   ├── user.controller.js       # perfil, listado de usuarios
│   │   ├── friend.controller.js     # solicitudes, aceptar/rechazar
│   │   └── message.controller.js    # creación y consulta de mensajes
│   ├── models/
│   │   ├── User.js                  # esquema y métodos de usuario
│   │   ├── FriendRequest.js         # esquema de solicitudes de amistad
│   │   └── Message.js               # esquema de mensajes
│   ├── routes/
│   │   ├── auth.routes.js           # /api/auth
│   │   ├── user.routes.js           # /api/users
│   │   ├── friend.routes.js         # /api/friends
│   │   └── message.routes.js        # /api/messages
│   ├── middlewares/
│   │   ├── auth.middleware.js       # valida JWT, extrae user
│   │   ├── error.middleware.js      # captura y formatea errores
│   │   └── validate.middleware.js   # valida body con Joi/validator
│   ├── services/
│   │   └── socket.service.js        # inicializa y gestiona eventos Socket.IO
│   ├── utils/
│   │   └── logger.js                # Winston/morgan setup
│   ├── app.js                       # configuración Express y rutas
│   └── server.js                    # arranque HTTP + WebSocket
├── tests/
│   ├── auth.test.js                 # tests de endpoints auth
│   ├── user.test.js                 # tests de usuarios
│   └── message.test.js              # tests de mensajería
├── .env.example                      # plantilla de variables de entorno
├── .eslintrc.js                      # reglas ESLint
├── jest.config.js                    # configuración Jest
├── package.json
└── README.md

