const express = require('express');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Configure MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'orders_db'
});

db.connect(err => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Connected to database.");
    }
});

// Endpoint to handle orders
app.post('/api/order', (req, res) => {
    const orderId = uuidv4();
    const products = req.body.products;

    // Calculate total price for the order
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    // Insert order into 'orders' table
    const orderQuery = 'INSERT INTO orders (order_id, total_price) VALUES (?, ?)';
    db.query(orderQuery, [orderId, totalPrice], (err, result) => {
        if (err) {
            console.error("Error inserting order:", err);
            res.status(500).json({ message: "Error saving order" });
            return;
        }

        // Insert each item into 'order_items' table
        const orderItemsQuery = 'INSERT INTO order_items (order_id, product_id, price) VALUES ?';
        const orderItemsValues = products.map(product => [orderId, product.id, product.price]);

        db.query(orderItemsQuery, [orderItemsValues], (err, result) => {
            if (err) {
                console.error("Error inserting order items:", err);
                res.status(500).json({ message: "Error saving order items" });
                return;
            }

            res.status(201).json({ message: "Order created successfully", orderId });
        });
    });
});

// Start server
app.listen(3007, () => {
    console.log("Server running at http://localhost:3007");
});
