const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const binanceApiBaseUrl = 'https://api.binance.com/api/v3';

// Endpoint to fetch the latest price for a specific symbol
app.get('/price/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const response = await axios.get(`${binanceApiBaseUrl}/ticker/price?symbol=${symbol}`);
    const price = response.data.price;
    res.json({ symbol, price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
