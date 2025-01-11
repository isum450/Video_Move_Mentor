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
        const { name, msg, time } = data;
        const item = new LiModel(name, msg, time);
        item.makeLi();
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000');
  });

function LiModel(name, msg, time) {
this.name = name;
this.msg = msg;
this.time = time;

this.makeLi = () => {
    const li = document.createElement('li');
    li.classList.add(nickname.value === this.name ? 'sent' : 'received');
    const dom = `<span class="profile">
    <span class="user">${this.name}</span>
    <img class="image" src="https://placeimg.com/50/50/any" alt="any" /></span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
};
}