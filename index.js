require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 9001;

app.use(cors());
app.use(express.json());

app.use('/api/1.0', require('./app/routes'));


dbConnect()
app.listen(PORT, () => {
    console.log(`Server on port:http://localhost:${PORT}`);
} )