const products = [
  { id: 1, name: "Ryzen 5 5600x", price: 129.69 },
  { id: 2, name: "Corsair DDR4 2x8GB RAM 3200Mhz", price: 29.99 },
  {id: 3, name: "GTX 1060 3GB", price: 49.69}
];

const container = document.getElementById('product-list');

products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `<h2>${p.name}</h2><p>€${p.price}</p><button>Peržiūrėti</button>`;
  container.appendChild(div);
});