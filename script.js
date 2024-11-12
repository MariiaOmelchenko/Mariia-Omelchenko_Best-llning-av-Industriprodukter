let selectedProducts = [];

fetch('industrial.json') 
    .then(response => response.json())
    .then(products => {
        const productTableBody = document.getElementById('productTable').querySelector('tbody');
        const categoryFilter = document.getElementById('categoryFilter');
        const totalCountElem = document.getElementById('totalCount');
        const totalPriceElem = document.getElementById('totalPrice');
        const placeOrderButton = document.getElementById('placeOrder');

        // Get unique categories from products
        const categories = Array.from(new Set(products.map(product => product.category)));
        
        // Populate category filter dropdown
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Function to render the products in the table
        function renderTable(filteredProducts) {
            productTableBody.innerHTML = ''; // Clear existing rows
            filteredProducts.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" class="productCheckbox" data-id="${product.productId}" data-price="${product.price}"></td>
                    <td>${product.productName}</td>
                    <td>${product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                `;
                productTableBody.appendChild(row);
            });
        }

        // Initially render all products
        renderTable(products);

        // Filter products based on selected category
        categoryFilter.addEventListener('change', () => {
            const selectedCategory = categoryFilter.value;
            const filteredProducts = selectedCategory === 'all' 
                ? products 
                : products.filter(product => product.category === selectedCategory);
            renderTable(filteredProducts);
        });

        // Update total count and price when items are selected
        productTableBody.addEventListener('change', (event) => {
            if (event.target.classList.contains('productCheckbox')) {
                const checkbox = event.target;
                const productId = checkbox.getAttribute('data-id');
                const productPrice = parseFloat(checkbox.getAttribute('data-price'));

                if (checkbox.checked) {
                    selectedProducts.push({ id: productId, price: productPrice });
                } else {
                    selectedProducts = selectedProducts.filter(p => p.id !== productId);
                }

                const totalCount = selectedProducts.length;
                const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);

                totalCountElem.textContent = totalCount;
                totalPriceElem.textContent = totalPrice.toFixed(2);
            }
        });

        // Send order to server
        placeOrderButton.addEventListener('click', () => {
            if (selectedProducts.length === 0) {
                alert("Please select at least one product.");
                return;
            }

            fetch('http://localhost:3007/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ products: selectedProducts })
            })
            .then(response => response.json())
            .then(data => {
                alert("Order placed successfully!");
                selectedProducts = []; // Reset selection
                totalCountElem.textContent = '0';
                totalPriceElem.textContent = '0.00';
            })
            .catch(error => console.error("Error placing order:", error));
        });
    })
    .catch(error => console.error("Error loading products:", error));
