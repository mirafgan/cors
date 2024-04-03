const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.get('/', async (req, res) => {
    try {
        const date = new Date();
        let day = date.getDay()
        let month = date.getMonth() + 1
        let year = date.getFullYear();
        let currentDay = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
        const response = await axios.get(`https://cbar.az/currencies/${req.query.time ?? currentDay}.xml`);
        res.type('application/xml');
        res.send(response.data);
    } catch {
        res.send('internal error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
