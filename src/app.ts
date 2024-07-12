import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors  from 'cors'
import { gameRoutes } from './routes/game.routes';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
      origin: 'http://localhost:4200',
      methods: ["GET", "POST"]
    }
  });
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/api', gameRoutes);

export { app, server, io };
