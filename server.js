import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import http from 'http'
import AppRoutes from './routes/index.js'
import connectDB from './config/DB.js'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const server = http.createServer(app)

const io = new Server(server, {cors:{origin:"*"}})

connectDB()
app.use(cors())
app.use(express.json())

app.set('socketio', io)

app.use("/api", AppRoutes)

const PORT = process.env.PORT || 8000 

app.get('/', (req, res)=>{
    res.json({message: `app is running in the port ${PORT}`})
})

server.listen(PORT, ()=>{
    console.log(`server running in the port: ${PORT}`)
})