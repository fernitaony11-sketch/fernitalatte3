<!DOCTYPE html>
padding: 10px 15px;
border-radius: 8px;
cursor: pointer;
margin-top: 10px;
}
button:hover { background: #187bcd; }


.cart {
margin-top: 40px;
background: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.cart h2 { margin-top: 0; }
</style>
</head>
<body>
<header>Toko Online Sederhana</header>


<div class="container">
<h2>Produk Kami</h2>
<div class="product-list" id="productList"></div>


<div class="cart" id="cartSection">
<h2>Keranjang Belanja</h2>
<ul id="cartItems"></ul>
<p><strong>Total: Rp <span id="totalPrice">0</span></strong></p>
</div>
</div>


<script>
const products = [
{ id: 1, name: "Kaos Premium", price: 75000, img: "https://via.placeholder.com/300" },
{ id: 2, name: "Hoodie Tebal", price: 150000, img: "https://via.placeholder.com/300" },
{ id: 3, name: "Topi Trucker", price: 50000, img: "https://via.placeholder.com/300" }
];


const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
let cart = [];


function renderProducts() {
products.forEach(p => {
const card = document.createElement("div");
card.className = "product";
card.innerHTML = `
<img src="${p.img}" alt="${p.name}" />
<h3>${p.name}</h3>
<p>Harga: Rp ${p.price}</p>
<button onclick="addToCart(${p.id})">Tambah ke Keranjang</button>
`;
productList.appendChild(card);
});
}


function addToCart(id) {
const item = products.find(p => p.id === id);
cart.push(item);
renderCart();
}


function renderCart() {
cartItems.innerHTML = "";
let total = 0;
cart.forEach(c => {
const li = document.createElement("li");
li.innerText = `${c.name} - Rp ${c.price}`;
cartItems.appendChild(li);
total += c.price;
});
totalPrice.innerText = total;
}


renderProducts();
</script>
</body>
</html>
