const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS Configuration


// Middleware
app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://udit-portfolio-1048.netlify.app'
  ],
}));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI_API;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if cannot connect to database
  });

// Define Booking Schema
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Routes
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('Received booking request:', req.body);
    const booking = new Booking(req.body);
    await booking.save();
    console.log('Booking saved successfully:', booking);
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(400).json({ 
      message: 'Error creating booking', 
      error: error.message,
      details: error.toString()
    });
  }
});

// Get all bookings (for admin purposes)
app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});