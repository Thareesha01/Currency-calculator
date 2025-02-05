const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Get all currencies
app.get("/getallcurrencies", async (req, res) => {
    const nameURL = `https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=${process.env.EXCHANGE_API_KEY}`;

    try {
        const nameResponse = await axios.get(nameURL);
        const nameData = nameResponse.data;
        return res.json(nameData);
    } catch (err) {
        console.error("Error fetching currencies:", err.message);
        return res.status(500).json({ error: "Something went wrong" });
        
    }
});

// Listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
