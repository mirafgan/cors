const express = require('express');
const axios = require('axios');
const xml = require('xml');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', async (req, res) => {
    // try {
        const date = new Date();
        let day = date.getDay()
        let month = date.getMonth() + 1
        let year = date.getFullYear();
        let currentDay = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
        console.log(currentDay);
        const response = await axios.get(`https://cbar.az/currencies/${req.query.time ?? currentDay}.xml`);
        res.type('application/xml');
        res.send(response.data);
    // } catch {
        // res.send('internal error');
    // }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
