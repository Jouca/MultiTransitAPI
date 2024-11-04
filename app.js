require('dotenv').config();

const express = require('express');
const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on http://${host}:${port}`);
});