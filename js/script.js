// Base de Datos de Productos
const PRODUCTS = [
    {
        id: 1,
        title: "Conjunto Encaje 'Luna Cautivante'",
        category: "Conjuntos",
        price: 24500,
        oldPrice: 28000,
        badge: "Más Vendido",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=600&q=80",
        sizes: ["85", "90", "95", "100"],
        colors: ["Negro", "Vino", "Blanco"],
        description: "Conjunto de corpiño con aro y encaje de alta elasticidad acompañado de colaless regulable. Diseño sensual y sumamente cómodo."
    },
    {
        id: 2,
        title: "Corpiño Push Up 'Eclipse Soft'",
        category: "Corpiños",
        price: 16200,
        oldPrice: null,
        badge: "Confort",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1596475886686-3027ef839e55?auto=format&fit=crop&w=600&q=80",
        sizes: ["85", "90", "95", "100", "105"],
        colors: ["Nude", "Negro", "Blanco"],
        description: "Corpiño escote profundo con relleno ultra soft realzador sin incomodar. Breteles desmontables y multiposición."
    },
    {
        id: 3,
        title: "Bombacha Colaless 'Noche Estrellada'",
        category: "Bombachas",
        price: 6800,
        oldPrice: 8000,
        badge: "15% OFF",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
        sizes: ["1", "2", "3", "4"],
        colors: ["Rojo", "Negro", "Blanco", "Rosa"],
        description: "Colaless de tul bordado delicado con breteles laterales regulables. Perfecta adaptación al cuerpo sin marcar la prenda."
    },
    {
        id: 4,
        title: "Pijama Satén Premium 'Sueños de Seda'",
        category: "Pijamas",
        price: 38900,
        oldPrice: 44000,
        badge: "Premium",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Perla", "Rosa Viejo", "Verde Esmeralda", "Negro"],
        description: "Pijama de dos piezas (musculosa con delicado encaje en el escote + short). Tacto suave seda inolvidable."
    },
    {
        id: 5,
        title: "Combo x3 Vedetina Algodón 'Confort Diario'",
        category: "Combos",
        price: 15500,
        oldPrice: 19000,
        badge: "Pack Ahorro",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=600&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Pasteles Surtidos", "Básicos Negro/Blanco/Nude"],
        description: "Pack de 3 vedetinas confeccionadas en puro algodón con elastano hipoalergénico. Ideales para el uso diario continuo."
    },
    {
        id: 6,
        title: "Conjunto Bralette & Less 'Luna Nueva'",
        category: "Conjuntos",
        price: 22000,
        oldPrice: null,
        badge: "Nuevo",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=600&q=80",
        sizes: ["85", "90", "95"],
        colors: ["Blanco", "Rosa Fucsia", "Negro"],
        description: "Bralette triangular sin aros de encaje elastizado súper liviano + bombacha colaless a juego."
    },
    {
        id: 7,
        title: "Corpiño Sin Aro Multiposición 'Libertad'",
        category: "Corpiños",
        price: 14800,
        oldPrice: null,
        badge: "Tendencia",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=600&q=80",
        sizes: ["85", "90", "95", "100"],
        colors: ["Nude", "Negro"],
        description: "Corpiño de microfibra sin costura (seamless) con tazas removibles para un ajuste natural sin presiones."
    },
    {
        id: 8,
        title: "Bombacha Tiro Alto 'Sombra Elegante'",
        category: "Bombachas",
        price: 7500,
        oldPrice: 8900,
        badge: "Efecto Modelador",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
        sizes: ["1", "2", "3", "4"],
        colors: ["Negro", "Nude", "Vino"],
        description: "Vedetina de tiro alto con detalles laterales de tul traslúcido. Modela la cintura manteniendo una comodidad absoluta."
    },
    {
        id: 9,
        title: "Pijama Camisero 'Melodía Dulce'",
        category: "Pijamas",
        price: 42000,
        oldPrice: 48000,
        badge: "Invierno/Otoño",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gris Melange", "Rosa Soft"],
        description: "Pijama de pantalón largo y camisa manga larga en viscosa soft premium con vivos en contraste elegantes."
    },
    {
        id: 10,
        title: "Combo Regalo 'Caja Luna Llena'",
        category: "Combos",
        price: 32000,
        oldPrice: 38000,
        badge: "Especial Regalo",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80",
        sizes: ["S", "M", "L"],
        colors: ["Edición Negra & Fucsia"],
        description: "Caja de regalo que incluye 1 conjunto de encaje + 1 colaless extra + antifaz de satén para dormir."
    },
    {
        id: 11,
        title: "Body Encaje Seductor 'Diosa Nocturna'",
        category: "Conjuntos",
        price: 29900,
        oldPrice: null,
        badge: "Exclusivo",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=600&q=80",
        sizes: ["85", "90", "95", "100"],
        colors: ["Negro", "Rojo Pasión"],
        description: "Body entero de encaje con broche inferior en la entrepierna y escote cruzado en la espalda."
    },
    {
        id: 12,
        title: "Bata de Satén & Encaje 'Reina Luna'",
        category: "Pijamas",
        price: 34500,
        oldPrice: null,
        badge: "Lujo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80",
        sizes: ["S/M", "L/XL"],
        colors: ["Blanco Nupcial", "Negro", "Rosa Fucsia"],
        description: "Bata de kimono de satén con guarda de encaje en mangas y ruedo. Incluye cinto amarrable."
    }
];

const CATEGORIES = ["Todos", "Conjuntos", "Corpiños", "Bombachas", "Pijamas", "Combos"];

// Estado Global de la Aplicación
let state = {
    currentCategory: "Todos",
    searchQuery: "",
    sortBy: "featured",
    cart: JSON.parse(localStorage.getItem('mi_luna_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('mi_luna_wishlist')) || []
};

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCategoryChips();
    renderProducts();
    updateCartUI();
    updateWishlistBadge();
});

// Gestión de Tema Claro/Oscuro
function initTheme() {
    const savedTheme = localStorage.getItem('mi_luna_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Renderizado de Categorías
function renderCategoryChips() {
    const container = document.getElementById('categoryChips');
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => {
        const isActive = state.currentCategory === cat;
        return `
            <button 
                onclick="filterCategory('${cat}')" 
                class="chip-btn ${isActive ? 'active' : ''}"
            >
                ${cat === 'Todos' ? '✨ ' : ''}${cat}
            </button>
        `;
    }).join('');
}

function filterCategory(categoryName) {
    state.currentCategory = categoryName;
    renderCategoryChips();
    renderProducts();
}

function getFilteredProducts() {
    return PRODUCTS.filter(product => {
        const matchesCategory = state.currentCategory === 'Todos' || product.category === state.currentCategory;
        const matchesSearch = !state.searchQuery || 
            product.title.toLowerCase().includes(state.searchQuery) ||
            product.category.toLowerCase().includes(state.searchQuery) ||
            product.description.toLowerCase().includes(state.searchQuery);
        return matchesCategory && matchesSearch;
    }).sort((a, b) => {
        if (state.sortBy === 'price-low') return a.price - b.price;
        if (state.sortBy === 'price-high') return b.price - a.price;
        if (state.sortBy === 'name-asc') return a.title.localeCompare(b.title);
        return a.id - b.id;
    });
}

// Renderizado de la Grilla de Productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = getFilteredProducts();

    grid.innerHTML = filtered.map(product => {
        const isFavorite = state.wishlist.includes(product.id);
        return `
            <div class="product-card">
                <div class="card-top-actions">
                    <span class="product-badge">${product.badge}</span>
                    <button 
                        onclick="toggleWishlist(${product.id})" 
                        class="btn-wishlist ${isFavorite ? 'active' : ''}"
                        title="${isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}"
                    >
                        <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>

                <div class="product-image-box">
                    <img 
                        src="${product.image}" 
                        alt="${product.title}"
                        onerror="this.src='https://placehold.co/500x600/ff007f/ffffff?text=Mi+Luna+Lencer%C3%ADa'"
                    >
                </div>

                <div class="product-details">
                    <div>
                        <div class="product-meta">
                            <span class="product-cat">${product.category}</span>
                            <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                        </div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="size-chips">
                            ${product.sizes.map(s => `<span class="size-chip">${s}</span>`).join('')}
                        </div>
                    </div>

                    <div class="product-bottom">
                        <div class="price-box">
                            <span class="price-main">$${product.price.toLocaleString('es-AR')}</span>
                            ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toLocaleString('es-AR')}</span>` : ''}
                        </div>

                        <button class="add-cart-btn btn-add-quick" title="Consultar por WhatsApp">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>Consultar</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
        cartBadge.textContent = totalItems;
    }
}

// Lista de Deseos (Wishlist)
function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
    } else {
        state.wishlist.push(productId);
    }
    localStorage.setItem('mi_luna_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadge();
    renderProducts();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
        if (state.wishlist.length > 0) {
            badge.textContent = state.wishlist.length;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// Listener global corregido (solo intercepta botones de consulta)
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-cart-btn, .btn-add-quick");
    
    // Si NO es un botón de consultar, deja que el evento siga su curso normal (ej: Contacto)
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();
    
    // Captura la tarjeta contenedora del producto
    const card = btn.closest(".product-card, article");
    const titulo = card ? card.querySelector(".product-title, h3, h4")?.textContent.trim() : (btn.dataset.titulo || "esta prenda");
    
    const telefono = "5491140682871"; // Reemplazar por el número real
    const mensaje = encodeURIComponent(`¡Hola! Quisiera consultar por la prenda: *${titulo}*`);
    
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
});

// Funciones para abrir y cerrar el Modal de Contacto
function abrirModalContacto() {
    const modal = document.getElementById("modalContacto");
    if (modal) modal.classList.add("active");
}

function cerrarModalContacto() {
    const modal = document.getElementById("modalContacto");
    if (modal) modal.classList.remove("active");
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("modalContacto");
    if (e.target === modal) cerrarModalContacto();
});