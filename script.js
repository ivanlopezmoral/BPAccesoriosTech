/* =========================================================
   BP ACCESORIOS TECH — SCRIPT
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURACIÓN CENTRALIZADA DE IMÁGENES
   Reemplazá estas URLs por las fotos reales de tus productos.
--------------------------------------------------------- */
const productImages = {
  hero: "https://picsum.photos/seed/bp-hero/900/900",
  banner: "https://picsum.photos/seed/bp-banner/900/700",
  about: "https://picsum.photos/seed/bp-about/900/760",
  categoryFundas: "https://picsum.photos/seed/bp-cat-fundas/600/460",
  categoryProtectores: "https://picsum.photos/seed/bp-cat-protectores/600/460",
  categoryAuriculares: "https://picsum.photos/seed/bp-cat-auriculares/600/460",
  categoryCargadores: "https://picsum.photos/seed/bp-cat-cargadores/600/460",
  categoryPowerbanks: "https://picsum.photos/seed/bp-cat-powerbanks/600/460",
  categoryGaming: "https://picsum.photos/seed/bp-cat-gaming/600/460",
  magsafe: "https://picsum.photos/seed/bp-magsafe/600/600",
  silicone: "https://picsum.photos/seed/bp-silicone/600/600",
  temperedGlass: "https://picsum.photos/seed/bp-glass/600/600",
  airpodsPro: "https://picsum.photos/seed/bp-airpodspro/600/600",
  airpodsMax: "https://picsum.photos/seed/bp-airpodsmax/600/600",
  usbC: "https://picsum.photos/seed/bp-usbc/600/600",
  lightning: "https://picsum.photos/seed/bp-lightning/600/600",
  powerBank: "https://picsum.photos/seed/bp-powerbank/600/600",
  chargingBase: "https://picsum.photos/seed/bp-chargingbase/600/600",
  joystick: "https://picsum.photos/seed/bp-joystick/600/600",
  fallback: "https://picsum.photos/seed/bp-fallback/600/600"
};

/* ---------------------------------------------------------
   2. CATEGORÍAS
--------------------------------------------------------- */
const categories = [
  {
    id: "fundas",
    name: "Fundas",
    description: "MagSafe y silicona para proteger con estilo.",
    image: productImages.categoryFundas
  },
  {
    id: "protectores",
    name: "Protectores de pantalla",
    description: "Vidrio templado de alta resistencia.",
    image: productImages.categoryProtectores
  },
  {
    id: "auriculares",
    name: "Auriculares",
    description: "Sonido premium para cada momento.",
    image: productImages.categoryAuriculares
  },
  {
    id: "cargadores",
    name: "Cargadores",
    description: "USB-C y Lightning, carga rápida y segura.",
    image: productImages.categoryCargadores
  },
  {
    id: "powerbanks",
    name: "Power Banks",
    description: "Energía extra donde y cuando la necesites.",
    image: productImages.categoryPowerbanks
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Bases de carga y joysticks para jugar mejor.",
    image: productImages.categoryGaming
  }
];

/* ---------------------------------------------------------
   3. PRODUCTOS
   Precios de ejemplo — reemplazar por precios reales.
--------------------------------------------------------- */
const products = [
  {
    id: 1,
    name: "Funda MagSafe",
    category: "fundas",
    price: 24999,
    oldPrice: null,
    image: productImages.magsafe,
    description: "Protección premium con imanes de alta sujeción.",
    stock: 18,
    badge: "Nuevo"
  },
  {
    id: 2,
    name: "Funda de Silicona",
    category: "fundas",
    price: 15999,
    oldPrice: 19999,
    image: productImages.silicone,
    description: "Tacto suave y protección antigolpes diaria.",
    stock: 32,
    badge: null
  },
  {
    id: 3,
    name: "Vidrio Templado",
    category: "protectores",
    price: 8999,
    oldPrice: null,
    image: productImages.temperedGlass,
    description: "Dureza 9H, instalación sin burbujas.",
    stock: 54,
    badge: "Más vendido"
  },
  {
    id: 4,
    name: "AirPods Pro",
    category: "auriculares",
    price: 189999,
    oldPrice: 219999,
    image: productImages.airpodsPro,
    description: "Cancelación de ruido activa y sonido espacial.",
    stock: 9,
    badge: "Más vendido"
  },
  {
    id: 5,
    name: "AirPods Max",
    category: "auriculares",
    price: 349999,
    oldPrice: null,
    image: productImages.airpodsMax,
    description: "Audio de alta fidelidad, confort total.",
    stock: 4,
    badge: "Nuevo"
  },
  {
    id: 6,
    name: "Cargador USB-C",
    category: "cargadores",
    price: 12999,
    oldPrice: null,
    image: productImages.usbC,
    description: "Carga rápida 20W para tus dispositivos.",
    stock: 60,
    badge: null
  },
  {
    id: 7,
    name: "Cargador Lightning",
    category: "cargadores",
    price: 11999,
    oldPrice: 14999,
    image: productImages.lightning,
    description: "Compatible con toda la línea Lightning.",
    stock: 41,
    badge: null
  },
  {
    id: 8,
    name: "Power Bank 10.000mAh",
    category: "powerbanks",
    price: 34999,
    oldPrice: null,
    image: productImages.powerBank,
    description: "Batería portátil de carga rápida bidireccional.",
    stock: 22,
    badge: null
  },
  {
    id: 9,
    name: "Base de Carga Gaming",
    category: "gaming",
    price: 22999,
    oldPrice: null,
    image: productImages.chargingBase,
    description: "Carga tu joystick mientras jugás sin cables.",
    stock: 15,
    badge: null
  },
  {
    id: 10,
    name: "Joystick Inalámbrico",
    category: "gaming",
    price: 79999,
    oldPrice: 89999,
    image: productImages.joystick,
    description: "Ergonomía y precisión para partidas largas.",
    stock: 0,
    badge: null
  }
];

const categoryLabels = categories.reduce((acc, c) => {
  acc[c.id] = c.name;
  return acc;
}, {});

/* ---------------------------------------------------------
   4. UTILIDADES
--------------------------------------------------------- */
function formatPrice(value) {
  return "$" + value.toLocaleString("es-AR");
}

function setImgFallback(img) {
  img.addEventListener("error", function onError() {
    img.removeEventListener("error", onError);
    img.src = productImages.fallback;
  }, { once: true });
}

/* ---------------------------------------------------------
   5. ESTADO DEL CARRITO (localStorage)
--------------------------------------------------------- */
const CART_KEY = "bp_accesorios_tech_cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    /* localStorage no disponible: el carrito sigue funcionando en memoria */
  }
}

let cart = loadCart();

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || product.stock === 0) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
  showToast(`${product.name} agregado al carrito`);
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = count;
  el.style.display = count > 0 ? "flex" : "none";
}

/* ---------------------------------------------------------
   6. RENDER: CATEGORÍAS
--------------------------------------------------------- */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = categories.map(cat => `
    <div class="category-card reveal" data-category="${cat.id}">
      <img src="${cat.image}" alt="${cat.name}" loading="lazy">
      <div class="category-card__content">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <span class="category-card__link">
          Ver productos
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".category-card img").forEach(setImgFallback);

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const catId = card.dataset.category;
      applyFilter(catId);
      document.getElementById("tienda").scrollIntoView({ behavior: "smooth" });
    });
  });

  observeReveal(grid.querySelectorAll(".reveal"));
}

/* ---------------------------------------------------------
   7. RENDER: FILTROS
--------------------------------------------------------- */
function renderFilters() {
  const container = document.getElementById("filters");
  const buttonsHtml = categories.map(cat =>
    `<button class="filter-btn" data-filter="${cat.id}">${cat.name}</button>`
  ).join("");
  container.insertAdjacentHTML("beforeend", buttonsHtml);

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });
}

let currentFilter = "all";
let currentSearch = "";

function applyFilter(filterId) {
  currentFilter = filterId;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.filter === filterId);
  });
  renderProducts();
}

/* ---------------------------------------------------------
   8. RENDER: PRODUCTOS
--------------------------------------------------------- */
function getFilteredProducts() {
  return products.filter(p => {
    const matchesCategory = currentFilter === "all" || p.category === currentFilter;
    const matchesSearch = p.name.toLowerCase().includes(currentSearch) ||
                           p.description.toLowerCase().includes(currentSearch) ||
                           categoryLabels[p.category].toLowerCase().includes(currentSearch);
    return matchesCategory && matchesSearch;
  });
}

function productCardHtml(product) {
  const stockLabel = product.stock === 0
    ? '<span class="product-card__stock is-out">Sin stock</span>'
    : product.stock <= 5
      ? `<span class="product-card__stock is-low">Últimas ${product.stock} unidades</span>`
      : `<span class="product-card__stock">Stock disponible</span>`;

  const badgeHtml = product.badge
    ? `<span class="product-card__tag ${product.badge === "Más vendido" ? "tag--bestseller" : ""}">${product.badge}</span>`
    : "";

  const discountPercent = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const discountHtml = discountPercent
    ? `<span class="product-card__discount">-${discountPercent}%</span>`
    : "";

  const oldPriceHtml = product.oldPrice
    ? `<span class="product-card__price-old">${formatPrice(product.oldPrice)}</span>`
    : "";

  return `
    <article class="product-card reveal" data-id="${product.id}">
      <div class="product-card__media">
        ${badgeHtml}
        ${discountHtml}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${categoryLabels[product.category]}</span>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__desc">${product.description}</p>
        <div class="product-card__price-row">
          <span class="product-card__price">${formatPrice(product.price)}</span>
          ${oldPriceHtml}
        </div>
        ${stockLabel}
      </div>
      <div class="product-card__actions">
        <button class="btn btn--ghost btn--view" data-id="${product.id}">Ver producto</button>
        <button class="btn btn--primary btn--add" data-id="${product.id}" ${product.stock === 0 ? "disabled" : ""}>
          ${product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  grid.innerHTML = filtered.map(productCardHtml).join("");

  grid.querySelectorAll(".product-card__media img").forEach(setImgFallback);

  grid.querySelectorAll(".btn--add").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
  grid.querySelectorAll(".btn--view").forEach(btn => {
    btn.addEventListener("click", () => {
      const product = products.find(p => p.id === Number(btn.dataset.id));
      if (product) showToast(`${product.name} — ${product.description}`);
    });
  });

  observeReveal(grid.querySelectorAll(".reveal"));
}

/* ---------------------------------------------------------
   9. RENDER: CARRITO
--------------------------------------------------------- */
function renderCart() {
  const container = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("cartEmpty");
  const totalEl = document.getElementById("cartTotal");

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty" id="cartEmpty">Tu carrito está vacío.</p>';
    totalEl.textContent = formatPrice(0);
    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <p class="cart-item__name">${product.name}</p>
          <p class="cart-item__price">${formatPrice(product.price)} c/u · Subtotal: ${formatPrice(product.price * item.qty)}</p>
          <div class="cart-item__qty">
            <button class="qty-btn" data-action="dec" data-id="${product.id}">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${product.id}">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-id="${product.id}">Eliminar</button>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".cart-item img").forEach(setImgFallback);

  container.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const delta = btn.dataset.action === "inc" ? 1 : -1;
      updateQty(Number(btn.dataset.id), delta);
    });
  });

  container.querySelectorAll(".cart-item__remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });

  totalEl.textContent = formatPrice(cartTotal());
}

/* ---------------------------------------------------------
   10. TOAST
--------------------------------------------------------- */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

/* ---------------------------------------------------------
   11. CARRITO DRAWER — abrir / cerrar
--------------------------------------------------------- */
function initCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("cartToggle");
  const closeBtn = document.getElementById("cartClose");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function open() {
    drawer.classList.add("is-open");
    overlay.classList.add("is-visible");
    drawer.setAttribute("aria-hidden", "false");
  }
  function close() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    drawer.setAttribute("aria-hidden", "true");
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", () => {
    close();
    closeMobileMenu();
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Tu carrito está vacío");
      return;
    }
    showToast("Checkout próximamente disponible.");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------------------------------------------------------
   12. NAVBAR: scroll dinámico
--------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  function onScroll() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------
   13. MENÚ MOBILE
--------------------------------------------------------- */
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("is-open");
  document.getElementById("menuToggle").classList.remove("is-active");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });
}

/* ---------------------------------------------------------
   14. BUSCADOR
--------------------------------------------------------- */
function initSearch() {
  const box = document.getElementById("searchBox");
  const toggleBtn = document.getElementById("searchToggle");
  const input = document.getElementById("searchInput");

  toggleBtn.addEventListener("click", () => {
    const isOpen = box.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) input.focus();
  });

  input.addEventListener("input", () => {
    currentSearch = input.value.trim().toLowerCase();
    renderProducts();
    if (currentSearch) {
      document.getElementById("tienda").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

/* ---------------------------------------------------------
   15. FOOTER: enlaces de filtro directo
--------------------------------------------------------- */
function initFooterFilterLinks() {
  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      applyFilter(link.dataset.filterLink);
      document.getElementById("tienda").scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ---------------------------------------------------------
   16. SCROLL REVEAL (Intersection Observer)
--------------------------------------------------------- */
let revealObserver;
function initRevealObserver() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  observeReveal(document.querySelectorAll(".reveal"));
}

function observeReveal(elements) {
  elements.forEach(el => revealObserver.observe(el));
}

/* ---------------------------------------------------------
   17. IMÁGENES ESTÁTICAS (hero, banner, about)
--------------------------------------------------------- */
function initStaticImages() {
  const heroImg = document.getElementById("heroImage");
  const bannerImg = document.getElementById("bannerImage");
  const aboutImg = document.getElementById("aboutImage");

  heroImg.src = productImages.hero;
  bannerImg.src = productImages.banner;
  aboutImg.src = productImages.about;

  [heroImg, bannerImg, aboutImg].forEach(setImgFallback);
}

/* ---------------------------------------------------------
   18. INICIALIZACIÓN
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initStaticImages();
  renderCategories();
  renderFilters();
  initRevealObserver();
  renderProducts();
  renderCart();
  updateCartCount();

  initNavbarScroll();
  initMobileMenu();
  initSearch();
  initCartDrawer();
  initFooterFilterLinks();
});
