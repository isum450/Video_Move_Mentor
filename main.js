const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'Main'))); 

io.on('connection', (socket) => {
    socket.on('chatting', (data) => {
        io.emit('chatting', data);
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000');
  });