document.addEventListener("DOMContentLoaded", () => {
const CATEGORIES = {
  "TV BOX": "TV Box",
  "CONTROL": "Control Remoto",
  "PROYECTORES": "Proyectores",
  "ILUMINACIÓN": "Iluminación",
  "JOYSTICKS": "Joysticks",
  "UÑAS": "Cabina Uñas",
  "CÁMARAS": "Cámaras",
  "CONSOLAS": "Consolas",
  "DRON": "Dron",
  "PARLANTES": "Parlantes",
  "CABLES": "Cables",
  "ADAPTADORES": "Adaptadores",
  "SOPORTES": "Soportes",
  "PENDRIVES": "Pendrives",
  "AURICULARES": "Auriculares",
  "ACCESORIOS": "Accesorios"
};


const PRODUCTS = [
    {
        "id": 1,
        "title": "TV BOX con magis tv",
        "price": 48000.0,
        "category": "TV BOX"
    },
    {
        "id": 2,
        "title": "Control Remoto TV Box",
        "price": 22500.0,
        "category": "CONTROL"
    },
    {
        "id": 3,
        "title": "Proyector TV box con magis tv",
        "price": 120000.0,
        "category": "PROYECTORES"
    },
    {
        "id": 4,
        "title": "Aro de luz",
        "price": 22500.0,
        "category": "ILUMINACIÓN"
    },
    {
        "id": 5,
        "title": "Joystick PS3 inalámbrico liso sin estampado",
        "price": 15000.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 6,
        "title": "Joystick PS3 inalámbrico con estampado",
        "price": 21000.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 7,
        "title": "Joystick PS4 inalámbrico liso sin estampado",
        "price": 30000.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 8,
        "title": "Joystick PS4 inalámbrico con estampado",
        "price": 37500.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 9,
        "title": "Cabina con Luz UV para uñas",
        "price": 39000.0,
        "category": "UÑAS"
    },
    {
        "id": 10,
        "title": "Camára con Impresora",
        "price": 52500.0,
        "category": "CÁMARAS"
    },
    {
        "id": 11,
        "title": "Gaming Stick Lite con 2 controles",
        "price": 37500.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 12,
        "title": "Controller Gamepad con Pantalla",
        "price": 37500.0,
        "category": "JOYSTICKS"
    },
    {
        "id": 13,
        "title": "Consola tipo Game Boy con juegos de Sega family etc",
        "price": 37500.0,
        "category": "CONSOLAS"
    },
    {
        "id": 14,
        "title": "Drone con Camara y control K11 dispara bolitas de hidrogel",
        "price": 150000.0,
        "category": "DRON"
    },
    {
        "id": 15,
        "title": "Kit para Video Selfie",
        "price": 24300.0,
        "category": "CÁMARAS"
    },
    {
        "id": 16,
        "title": "Parlante Portatil",
        "price": 39000.0,
        "category": "PARLANTES"
    },
    {
        "id": 17,
        "title": "Parlante JBL",
        "price": 37500.0,
        "category": "PARLANTES"
    },
    {
        "id": 18,
        "title": "Cable Alimentacion Al Auto 12v 3 Metros Para Starlink Mini",
        "price": 48825.0,
        "category": "CABLES"
    },
    {
        "id": 19,
        "title": "Cable Hdmi Macho A Hdmi Macho Largo 3 Mts Full Hd Tv Led",
        "price": 8386.875,
        "category": "CABLES"
    },
    {
        "id": 20,
        "title": "Cable USB Tipo C para Iphone Android 65w Usb A y C 4 en 1 tipo IP nylon carga rápida",
        "price": 8527.5,
        "category": "CABLES"
    },
    {
        "id": 21,
        "title": "Cable Micro Usb 3.0 Para Disco Externo Wd Passport 1 Metro Color Azul",
        "price": 8610.75,
        "category": "CABLES"
    },
    {
        "id": 22,
        "title": "Hub Usb 3.0 Con 7 Puertos Velocidad 5gbps Negro",
        "price": 11304.0,
        "category": "ADAPTADORES"
    },
    {
        "id": 23,
        "title": "Soporte Celular 360 Espejo Holder Rotatorio Auto Portatil",
        "price": 12037.5,
        "category": "SOPORTES"
    },
    {
        "id": 24,
        "title": "Adaptador Carga Rápida Tipo C 30w Portatil De Pared 220v Color Blanco",
        "price": 12234.375,
        "category": "ADAPTADORES"
    },
    {
        "id": 25,
        "title": "Cable Hdmi Plano 2 Metros Aoweixun 4k Ultra Hd Exterior",
        "price": 12262.5,
        "category": "CABLES"
    },
    {
        "id": 26,
        "title": "Cable De Red Ethernet 15 Metros Utp Cat 6e Rj45",
        "price": 16177.5,
        "category": "CABLES"
    },
    {
        "id": 27,
        "title": "Cable Hdmi 10 Metros V1.4 Mallado 1080p Consola Pc Led Smart",
        "price": 16526.25,
        "category": "CABLES"
    },
    {
        "id": 28,
        "title": "Pendrive SanDisk Cruzer Blade 32GB 2.0 negro y rojo",
        "price": 18191.25,
        "category": "PENDRIVES"
    },
    {
        "id": 29,
        "title": "SanDisk Pendrive Ultra Dual Drive Go 64GB 3.1 Gen 1 negro",
        "price": 28350.0,
        "category": "PENDRIVES"
    },
    {
        "id": 30,
        "title": "Soporte Notebook Aluminio Regulable Tablet Celular Plegable Premium Antideslizante",
        "price": 20463.75,
        "category": "SOPORTES"
    },
    {
        "id": 31,
        "title": "Auriculares Noga Wireless Stereo Bt Earbuds Táctil Btwins 49 Color Blanco",
        "price": 24705.0,
        "category": "AURICULARES"
    },
    {
        "id": 32,
        "title": "Auriculares Inalambricos Btwins Touch Control Inear Negro",
        "price": 25209.0,
        "category": "AURICULARES"
    },
    {
        "id": 33,
        "title": "Cooler Ventilador Externo Para Ps4 Fat 5 Coolers",
        "price": 26100.0,
        "category": "ACCESORIOS"
    },
    {
        "id": 34,
        "title": "Pad Mouse Liso Tela Antideslizante Escritorio Pc",
        "price": 7678.125,
        "category": "ACCESORIOS"
    },
    {
        "id": 35,
        "title": "Cable Audio Auxiliar Mini Plug Jack 3.5mm Macho Doble 5 Mts",
        "price": 7678.125,
        "category": "CABLES"
    },
    {
        "id": 36,
        "title": "Cable Red Utp Rj45 Ethernet Internet 3 Metros Categoria 6",
        "price": 7678.125,
        "category": "CABLES"
    },
    {
        "id": 37,
        "title": "Cable Conversor Hdmi A Vga Conversor Netbook 1080p Fhd",
        "price": 8741.25,
        "category": "ADAPTADORES"
    },
    {
        "id": 38,
        "title": "Conversor Adaptador Dvi D 24+1 A Vga Pc Vídeo A Monitor",
        "price": 12150.0,
        "category": "ADAPTADORES"
    },
    {
        "id": 39,
        "title": "Adaptador Usb Tipo C A Rj45 Ethernet Red Lan",
        "price": 22089.375,
        "category": "ADAPTADORES"
    },
    {
        "id": 40,
        "title": "Adaptador Conector Dvi Macho 24+5 A Hdmi Hembra",
        "price": 6975.0,
        "category": "ADAPTADORES"
    },
    {
        "id": 41,
        "title": "Cable DVI-D 24+1 Dual Link X Hdmi Macho 1.5 Metros C/ Filter",
        "price": 11238.75,
        "category": "CABLES"
    },
    {
        "id": 42,
        "title": "Cable Usb Tipo C Carga Rápida 2.1 Amper 1 Metro - San Isidro Blanco",
        "price": 3898.125,
        "category": "CABLES"
    }
]

function generateCategoryColors() {
    const categories = [...new Set(PRODUCTS.map(p => p.category))]; // obtener categorías únicas
    const colors = [
        "#4361ee", "#2ec4b6", "#ff9f1c", "#7209b7",
        "#ef233c", "#ffd60a", "#00b4d8", "#f72585",
        "#3a0ca3", "#4cc9f0"
    ]; // paleta de colores, se puede ampliar si hay más categorías

    const categoryColors = {};
    categories.forEach((cat, i) => {
        categoryColors[cat] = colors[i % colors.length]; // asigna colores de forma cíclica
    });

    return categoryColors;
}

const CATEGORY_COLORS = generateCategoryColors();


  const ELEMENTS = {
    products: document.getElementById("productsContainer"),
    search: document.getElementById("searchInput"),
    category: document.getElementById("categoryFilter"),
    sort: document.getElementById("sortSelect"),
    cartBtn: document.getElementById("cartBtn"),
    cartCount: document.getElementById("cartCount"),
    cartPanel: document.getElementById("cartPanel"),
    cartItems: document.getElementById("cartItems"),
    cartTotal: document.getElementById("cartTotal"),
    clearCart: document.getElementById("clearCart"),
    closeCart: document.getElementById("closeCart"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    checkoutModal: document.getElementById("checkoutModal"),
    clearFilters: document.getElementById("clearFilters"),
    modalTotal: document.getElementById("modalTotal"),
    closeCheckout: document.getElementById("closeCheckout"),
    minPrice: document.getElementById("minPrice"),
    maxPrice: document.getElementById("maxPrice"),
    darkModeBtn: document.getElementById("darkModeBtn"),
      logo: document.getElementById("logo"),
      checkoutItems: document.getElementById("checkoutItems"),

  };

   loadTheme()

  const FILTERS = {
    SORTS: {
        PRICE_ASC: "price-asc",
        PRICE_DESC: "price-desc",
    }

  }

  let state = { cart: [] };
  loadCart();
  init();

  function init() {
    loadCategories();
    renderProducts(PRODUCTS);
    addEvents();
  }

  function addEvents() {
    ELEMENTS.search.addEventListener("input", renderFiltered);
    ELEMENTS.category.addEventListener("change", renderFiltered);
    ELEMENTS.sort.addEventListener("change", renderFiltered);
    ELEMENTS.cartBtn.addEventListener("click", () => ELEMENTS.cartPanel.classList.toggle("hidden"));
    ELEMENTS.clearCart.addEventListener("click", () => {
      if (confirm("¿Estás seguro que deseas vaciar el carrito?")) {
        state.cart = [];
        updateCart();
        saveCart();
      }
    });
    
    ELEMENTS.cartPanel.addEventListener("click", (e) => {
  if (e.target === ELEMENTS.cartPanel) {
    ELEMENTS.cartPanel.classList.add("hidden");
  }
});


ELEMENTS.checkoutModal.addEventListener("click", (e) => {
  if (e.target === ELEMENTS.checkoutModal) {
    ELEMENTS.checkoutModal.classList.add("hidden");
  }
});

    ELEMENTS.checkoutBtn.addEventListener("click", openCheckout);
    ELEMENTS.closeCheckout.addEventListener("click", () => ELEMENTS.checkoutModal.classList.add("hidden"));
    ELEMENTS.closeCart.addEventListener("click", closeCartPanel);
    ELEMENTS.minPrice.addEventListener("input", renderFiltered);
    ELEMENTS.maxPrice.addEventListener("input", renderFiltered);
    ELEMENTS.darkModeBtn.addEventListener("click", toggleDarkMode);

  }

  function renderFiltered() {
    let list = [...PRODUCTS];                                        
    const searchTerm = ELEMENTS.search.value.toLowerCase();
    const cat = ELEMENTS.category.value;
    const sort = ELEMENTS.sort.value;

    if (searchTerm) list = list.filter(p => p.title.toLowerCase().includes(searchTerm.trim()));
    if (cat !== "Todas") list = list.filter(p => p.category.toLowerCase() === cat.toLowerCase());
    if (sort === FILTERS.SORTS.PRICE_ASC) list.sort((a, b) => a.price - b.price);
    if (sort === FILTERS.SORTS.PRICE_DESC) list.sort((a, b) => b.price - a.price);
    if (ELEMENTS.minPrice.value || ELEMENTS.maxPrice.value) {
      const minPrice = parseInt(ELEMENTS.minPrice.value) || 0;
      const maxPrice = parseInt(ELEMENTS.maxPrice.value) || Infinity;
      list = list.filter(p => p.price >= minPrice && p.price <= maxPrice);
    }

    renderProducts(list);
  }

  function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  ELEMENTS.darkModeBtn.textContent = isDark ? "🌞" : "🌙";
  ELEMENTS.logo.src = isDark ? "../img/logo-dark.png" : "../img/logo.png"; // <-- cambia el logo
  saveTheme();
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  ELEMENTS.darkModeBtn.textContent = isDark ? "🌞" : "🌙";
  ELEMENTS.logo.src = isDark ? "../img/logo-dark.png" : "../img/logo.png"; // <-- cambiar logo al cargar
}


  function saveTheme() {
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }



  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }

  function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
      updateCart();
    }
  }

  function closeCartPanel() {
    ELEMENTS.cartPanel.classList.add("hidden");
  }

 


  function renderProducts(list) {
    if (list.length === 0) {
      ELEMENTS.products.innerHTML = `<p class="no-products">No se encontraron productos.</p>`;
      return;
    }

    console.log(list[0].category)

    ELEMENTS.products.innerHTML = list.map(p => `
      <div class="product">
        <div class="product-image">
          <img src="../img/${p.id}.jpg" alt="${p.title}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${p.id}-${p.title}</h3>
          <div class="product-meta">
            <span class="product-price">$${p.price.toLocaleString()}</span>
           <span class="product-category badge" style="background-color: ${CATEGORY_COLORS[p.category]};">
            ${CATEGORIES[p.category]}
          </span>

          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i>
            Agregar al carrito
          </button>
        </div>
      </div>
    `).join("");
  }

  window.addToCart = function (id) {
    const item = state.cart.find(i => i.id === id);
    if (item) item.quantity++;
    else state.cart.push({ id, quantity: 1 });
    updateCart();
  };
  
function updateCart() {

  ELEMENTS.cartItems.innerHTML = "";
  

  let totalPrice = 0;
  let totalItems = 0;


  state.cart.forEach(cartItem => {

    const product = PRODUCTS.find(p => p.id === cartItem.id);
    

    const itemCost = product.price * cartItem.quantity;

    totalPrice += itemCost;
    totalItems += cartItem.quantity;
    

    ELEMENTS.cartItems.innerHTML += `
      <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid #ccc;">
        <img src="../img/${product.id}.jpg" alt="${product.title}" class="cart-item-image" style="width: 50px; height: 50px; object-fit: cover; border-radius: 10px;">
        <p>${product.title} x ${cartItem.quantity} - $${itemCost.toLocaleString()}</p>
      </div>
    `;
  });


  ELEMENTS.cartTotal.textContent = totalPrice.toLocaleString();
  ELEMENTS.cartCount.textContent = totalItems;
  saveCart();
}

  function loadCategories() {
    const cats = ["Todas", ...new Set(PRODUCTS.map(p => p.category))];
    ELEMENTS.category.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
  }

function openCheckout() {
  console.log("Carrito actual:", state.cart); // <-- debug

  if (state.cart.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  // Total
  ELEMENTS.modalTotal.textContent = ELEMENTS.cartTotal.textContent;

  // Productos en el modal
  ELEMENTS.checkoutItems.innerHTML = state.cart.map(cartItem => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    const itemCost = product.price * cartItem.quantity;
    return `<p>${product.title} x ${cartItem.quantity} - $${itemCost.toLocaleString()}</p>`;
  }).join("");

  ELEMENTS.checkoutModal.classList.remove("hidden");
}


// Solo abrimos el modal al hacer clic en "Finalizar compra"
ELEMENTS.checkoutBtn.addEventListener("click", openCheckout);

// Cerramos modal sin vaciar carrito
ELEMENTS.closeCheckout.addEventListener("click", () => {
  ELEMENTS.checkoutModal.classList.add("hidden");
});



// Confirmar pedido solo al enviar WhatsApp
document.getElementById("whatsappBtn").addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const province = document.getElementById("customerProvince").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();

  if (!name || !address || !province || !phone) {
    alert("Por favor completa todos los campos");
    return;
  }

  // Generar mensaje de WhatsApp
  let message = `*Nuevo pedido*\n\nNombre: ${name}\n Dirección: ${address}\n Provincia: ${province}\nTeléfono: ${phone}\n\n*Productos:*\n`;

  state.cart.forEach(cartItem => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    const itemCost = product.price * cartItem.quantity;
    message += `${cartItem.quantity} x ${product.title}: $${itemCost.toLocaleString()}\n`;
  });

  message += `\nTotal: $${ELEMENTS.modalTotal.textContent}`;

  // Abrimos WhatsApp
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");

  // Vaciar carrito y actualizar
  state.cart = [];
  updateCart();
  ELEMENTS.checkoutModal.classList.add("hidden");
});



});
