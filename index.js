const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useCreateIndex: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
