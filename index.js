import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import mongoose from'mongoose';
import cors from'cors';
import jwt from 'jsonwebtoken';
import bcrypt from'bcryptjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://belyseurwidukunda:Urwidukunda0255@cluster0.xqbjzo5.mongodb.net/expense-tracker")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/routes/users.route.js');
app.use('/api/expensesRoutes.js', router);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
