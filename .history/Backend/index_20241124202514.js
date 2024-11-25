require('dotenv').config();
const express = require('express');
const connectDB = require('./Configs/dbConnection');
const eventLogRoutes = require('./routes/eventLogRoute');

const app = express();
connectDB();

app.use(express.json());
app.use('/eventlog', eventLogRoutes);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));