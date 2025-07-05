const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, asdkjbaknbasd!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});