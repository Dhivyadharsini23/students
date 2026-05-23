const express = require('express');

const logger = require('../middleware/logger');

const userRoutes = require('./userRoutes');

const app = express();

// JSON middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.use('/students', userRoutes);

app.listen(3000, () => {
    console.log("Server Started on Port 3000");
});