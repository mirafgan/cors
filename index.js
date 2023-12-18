const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/cbar', async (req, res) => {
    try {
        const response = await axios.get(`https://cbar.az/currencies/${req.query.time}.xml`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});