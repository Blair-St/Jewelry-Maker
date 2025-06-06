const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes (we'll add these later)
app.use('/api/materials', require('./routes/api/materials'));

// Simple test route
app.get('/', (req, res) => {
  res.send('Jewelry Management API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});