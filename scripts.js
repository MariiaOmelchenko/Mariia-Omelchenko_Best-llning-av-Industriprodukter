 // Ladda produkter från industrial.json och fyll i dropdown-menyn
 fetch('/path/to/industrial.json') // Ändra till rätt path
 .then(response => response.json())
 .then(products => {
     const productSelect = document.getElementById('productSelect');
     products.forEach(product => {
         const option = document.createElement('option');
         option.value = product.id;
         option.textContent = `${product.name} - ${product.price} kr`;
         productSelect.appendChild(option);
     });
 })
 .catch(error => console.error("Fel vid laddning av produkter:", error));

// Skicka formuläret med ett POST-anrop
document.getElementById('orderForm').addEventListener('submit', event => {
 event.preventDefault();
 const selectedProductId = document.getElementById('productSelect').value;

 fetch('http://localhost:3007/api/orders', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ productId: selectedProductId })
 })
 .then(response => response.json())
 .then(data => {
     alert(`Beställning lyckades! Order-ID: ${data.orderId}`);
 })
 .catch(error => console.error('Fel vid beställning:', error));
});