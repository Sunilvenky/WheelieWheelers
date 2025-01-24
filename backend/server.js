import express from 'express'
import mongoose from 'mongoose'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

// Middleware
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ladakh-bike-trips')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Ladakh Bike Trips API' })
})

// Socket.io connection
io.on('connection', (socket) => {
  console.log('a user connected')
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
