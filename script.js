// DATA MAKANAN (20 MENU)
const makanan = [
    {nama: "Rawon", foto: "https://source.unsplash.com/featured/?rawon", link:"#rawon"},
    {nama: "Soto Lamongan", foto: "https://source.unsplash.com/featured/?soto", link:"#soto-lamongan"},
    {nama: "Rujak Cingur", foto: "https://source.unsplash.com/featured/?rujak", link:"#rujak-cingur"},
    {nama: "Tahu Tek", foto:"https://source.unsplash.com/featured/?tahu", link:"#tahu-tek"},
    {nama: "Lontong Balap", foto:"https://source.unsplash.com/featured/?lontong", link:"#lontong-balap"},
    {nama: "Tahu Campur", foto:"https://source.unsplash.com/featured/?tahu", link:"#tahu-campur"},
    {nama: "Pecel Madiun", foto:"https://source.unsplash.com/featured/?pecel", link:"#pecel-madiun"},
    {nama: "Sate Madura", foto:"https://source.unsplash.com/featured/?sate", link:"#sate-madura"},
    {nama: "Nasi Krawu", foto:"https://source.unsplash.com/featured/?rice", link:"#nasi-krawu"},
    {nama: "Nasi Pecel Tulungagung", foto:"https://source.unsplash.com/featured/?pecel", link:"#pecel"},
    {nama: "Lodeh Kikil", foto:"https://source.unsplash.com/featured/?lodeh", link:"#lodeh-kikil"},
    {nama: "Sego Sambel", foto:"https://source.unsplash.com/featured/?sambal", link:"#sego-sambel"},
    {nama: "Krengsengan", foto:"https://source.unsplash.com/featured/?meat", link:"#krengsengan"},
    {nama: "Botok Tempe", foto:"https://source.unsplash.com/featured/?tempe", link:"#botok-tempe"},
    {nama: "Ayam Lodho", foto:"https://source.unsplash.com/featured/?ayam", link:"#ayam-lodho"},
    {nama: "Nasi Goreng Jawa", foto:"https://source.unsplash.com/featured/?friedrice", link:"#nasgor-jawa"},
    {nama: "Semanggi Surabaya", foto:"https://source.unsplash.com/featured/?vegetables", link:"#semanggi"},
    {nama: "Soto Madura", foto:"https://source.unsplash.com/featured/?soto", link:"#soto-madura"},
    {nama: "Bakso Malang", foto:"https://source.unsplash.com/featured/?bakso", link:"#bakso-malang"},
    {nama: "Rawon Setan", foto:"https://source.unsplash.com/featured/?rawon", link:"#rawon-setan"}
];

// DATA MINUMAN (10 MENU)
const minuman = [
    {nama:"Es Kopi Susu Gula Aren", foto:"https://source.unsplash.com/featured/?icedcoffee", link:"#kopi-gula-aren"},
    {nama:"Matcha Latte", foto:"https://source.unsplash.com/featured/?matcha", link:"#matcha"},
    {nama:"Thai Tea", foto:"https://source.unsplash.com/featured/?thaitea", link:"#thaitea"},
    {nama:"Es Coklat Premium", foto:"https://source.unsplash.com/featured/?chocolate-drink", link:"#coklat"},
    {nama:"Es Lemon Tea", foto:"https://source.unsplash.com/featured/?lemontea", link:"#lemontea"},
    {nama:"Milkshake Oreo", foto:"https://source.unsplash.com/featured/?milkshake", link:"#milkshake"},
    {nama:"Es Yakult Lemon", foto:"https://source.unsplash.com/featured/?yakult", link:"#yakult"},
    {nama:"Es Cappuccino", foto:"https://source.unsplash.com/featured/?cappuccino", link:"#cappuccino"},
    {nama:"Brown Sugar Boba", foto:"https://source.unsplash.com/featured/?boba", link:"#boba"},
    {nama:"Es Soda Gembira", foto:"https://source.unsplash.com/featured/?soda", link:"#soda-gembira"}
];

// Render makanan
const makananList = document.getElementById("makananList");
makanan.forEach(item => {
    makananList.innerHTML += `
        <div class="menu-card">
            <img src="${item.foto}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <a href="${item.link}">Lihat Menu</a>
        </div>
    `;
});

// Render minuman
const minumanList = document.getElementById("minumanList");
minuman.forEach(item => {
    minumanList.innerHTML += `
        <div class="menu-card">
            <img src="${item.foto}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <a href="${item.link}">Lihat Menu</a>
        </div>
    `;
});
