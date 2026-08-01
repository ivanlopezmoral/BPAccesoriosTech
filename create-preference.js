// api/create-preference.js
//
// Función serverless (Vercel) que crea una preferencia de pago en
// Mercado Pago a partir del carrito enviado desde el frontend.
//
// El Access Token de Mercado Pago SIEMPRE se lee de una variable de
// entorno del servidor (MP_ACCESS_TOKEN) — nunca viaja al navegador.
//
// Configuración necesaria en Vercel:
//   Project Settings → Environment Variables → MP_ACCESS_TOKEN
//   (valor: tu Access Token de https://www.mercadopago.com.ar/developers/panel/app)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    res.status(500).json({ error: "Falta configurar la variable de entorno MP_ACCESS_TOKEN en Vercel." });
    return;
  }

  const { items } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    res.status(400).json({ error: "El carrito está vacío." });
    return;
  }

  const validItems = items.every(item =>
    item &&
    typeof item.name === "string" &&
    typeof item.price === "number" && item.price > 0 &&
    typeof item.quantity === "number" && item.quantity > 0
  );

  if (!validItems) {
    res.status(400).json({ error: "El carrito contiene datos inválidos." });
    return;
  }

  const origin = req.headers.origin || `https://${req.headers.host}`;

  const preferenceBody = {
    items: items.map(item => ({
      title: item.name,
      quantity: item.quantity,
      unit_price: item.price,
      currency_id: "ARS"
    })),
    back_urls: {
      success: `${origin}/?status=success`,
      failure: `${origin}/?status=failure`,
      pending: `${origin}/?status=pending`
    },
    auto_return: "approved",
    statement_descriptor: "BP ACCESORIOS TECH"
  };

  try {
    const mpResponse = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(preferenceBody)
    });

    const data = await mpResponse.json();

    if (!mpResponse.ok) {
      res.status(mpResponse.status).json({ error: data.message || "Mercado Pago rechazó la solicitud." });
      return;
    }

    res.status(200).json({ init_point: data.init_point });
  } catch (error) {
    res.status(500).json({ error: "Error interno al conectar con Mercado Pago." });
  }
}
