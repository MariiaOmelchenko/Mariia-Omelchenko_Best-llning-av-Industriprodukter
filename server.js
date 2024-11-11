const express = require('express');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Konfigurera databasanslutning
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '1234', 
    database: 'orders_db'
});

// Anslut till databasen
db.connect(err => {
    if (err) {
        console.error("Fel vid anslutning till databasen:", err);
    } else {
        console.log("Ansluten till databasen.");
    }
});

// Skapa en endpoint för att hantera beställningar
app.post('/api/orders', (req, res) => {
    const orderId = uuidv4(); // Skapa ett unikt ID för beställningen
    const productId = req.body.productId;
    const lineNumber = Math.floor(Math.random() * 1000); // Exempel på radnummer

    // Spara beställningen i databasen
    const query = `INSERT INTO orders (order_id, product_id, line_number) VALUES (?, ?, ?)`;
    db.query(query, [orderId, productId, lineNumber], (err, result) => {
        if (err) {
            console.error("Fel vid insättning av beställning:", err);
            res.status(500).send("Fel vid sparande av beställning.");
        } else {
            res.status(201).json({ message: "Beställning skapad", orderId });
        }
    });
});

// Starta servern
app.listen(3007, () => {
    console.log("Server körs på http://localhost:3007");
});
