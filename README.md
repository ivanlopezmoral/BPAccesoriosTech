# BP Accesorios Tech

Tienda online estática (HTML/CSS/JS) con carrito de compras y checkout real vía **Mercado Pago (Checkout Pro)**.

## ¿Por qué Vercel y no solo GitHub Pages?

GitHub Pages solo sirve archivos estáticos: no puede ejecutar código de servidor. Para cobrar con Mercado Pago de forma segura, el **Access Token** (la credencial privada de tu cuenta) tiene que quedar guardado en un servidor, nunca en el navegador. Por eso este proyecto incluye una pequeña función en `api/create-preference.js` que corre en Vercel (gratis) y se conecta directamente a tu repo de GitHub.

Resultado: subís el código a GitHub, conectás ese repo en Vercel, y Vercel aloja tanto el sitio como la función — todo con la misma URL.

## Paso a paso

### 1. Subir el proyecto a GitHub
```bash
git init
git add .
git commit -m "BP Accesorios Tech"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/bp-accesorios-tech.git
git push -u origin main
```

### 2. Crear tu cuenta y credenciales de Mercado Pago
1. Entrá a [mercadopago.com.ar/developers/panel](https://www.mercadopago.com.ar/developers/panel/app) e iniciá sesión con tu cuenta de Mercado Pago.
2. Creá una aplicación (o usá la que te generan por defecto).
3. En **Credenciales de producción** copiá el **Access Token** (empieza con `APP_USR-...`).
   - Para probar sin cobrar de verdad primero, usá las **Credenciales de prueba** y las tarjetas de test que provee Mercado Pago.

### 3. Desplegar en Vercel
1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta de GitHub.
2. **Add New → Project** y elegí el repo `bp-accesorios-tech`.
3. Antes de darle a "Deploy", andá a **Environment Variables** y agregá:
   - **Name:** `MP_ACCESS_TOKEN`
   - **Value:** el Access Token que copiaste en el paso 2.
4. Hacé clic en **Deploy**. En un minuto tenés tu tienda online funcionando en una URL tipo `https://bp-accesorios-tech.vercel.app`.

Cada vez que hagas `git push` a `main`, Vercel vuelve a desplegar automáticamente.

### 4. Probar el pago
1. Agregá productos al carrito y hacé clic en **Finalizar compra**.
2. Te redirige a Checkout Pro de Mercado Pago.
3. Al completar el pago, volvés a tu sitio con un mensaje de confirmación y el carrito se vacía automáticamente.

## Reemplazar las imágenes por fotos reales

Todas las imágenes están centralizadas en el objeto `productImages`, al principio de `script.js`. Mientras no las reemplaces, se genera automáticamente una imagen de marca (SVG) para cada producto — así el sitio nunca muestra un ícono roto.

Para poner tus fotos reales:
1. Creá una carpeta `assets/img/` en el proyecto y subí ahí tus fotos (o usá URLs de un hosting de imágenes).
2. En `script.js`, reemplazá cada línea, por ejemplo:
   ```js
   magsafe: placeholderImage("Funda MagSafe", "#0A5FC2"),
   ```
   por:
   ```js
   magsafe: "assets/img/magsafe.jpg",
   ```

## Agregar o editar productos

En `script.js`, el array `products` define cada producto (nombre, categoría, precio, imagen, descripción, stock, etiqueta). Sumá un objeto nuevo al array con un `id` único y aparece automáticamente en la tienda, en los filtros y en el buscador.

## Estructura del proyecto

```
bp-accesorios-tech/
├── index.html
├── style.css
├── script.js
├── package.json
├── api/
│   └── create-preference.js   ← función serverless (Vercel) que crea el pago
└── README.md
```
