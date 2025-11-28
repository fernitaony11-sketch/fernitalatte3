// 20 MAKANAN KHAS JAWA TIMUR
const makanan = [
    "Rawon", "Soto Lamongan", "Rujak Cingur", "Tahu Tek",
    "Lontong Balap", "Tahu Campur", "Pecel Madiun", "Sate Madura",
    "Nasi Krawu", "Nasi Pecel Tulungagung", "Lodeh Kikil",
    "Sego Sambel", "Krengsengan", "Botok Tempe", "Ayam Lodho",
    "Nasi Goreng Jawa", "Semanggi Surabaya", "Soto Madura",
    "Bakso Malang", "Rawon Setan"
];

// 10 MINUMAN TRENDING
const minuman = [
    "Es Kopi Susu Gula Aren", "Matcha Latte", "Thai Tea",
    "Es Coklat Premium", "Es Lemon Tea", "Milkshake Oreo",
    "Es Yakult Lemon", "Es Cappuccino", "Brown Sugar Boba",
    "Es Soda Gembira"
];

// Render makanan
const makananList = document.getElementById("makananList");
makanan.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
        <h3>${i + 1}. ${item}</h3>
        <p>Makanan khas Jawa Timur.</p>
    `;
    makananList.appendChild(card);
});

// Render minuman
const minumanList = document.getElementById("minumanList");
minuman.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
        <h3>${i + 1}. ${item}</h3>
        <p>Minuman kekinian & trending.</p>
    `;
    minumanList.appendChild(card);
});
