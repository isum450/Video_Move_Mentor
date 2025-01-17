const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const http = require('http');
const moment = require('moment');
const Database = require("better-sqlite3");
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

// SQLite �����ͺ��̽� �ʱ�ȭ
const db = new Database('chat.db');

// ���̺� ���� (������ ����)
db.exec(`
  CREATE TABLE IF NOT EXISTS chat_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    msg TEXT NOT NULL,
    time TEXT NOT NULL
  );
`);

app.use(express.static(path.join(__dirname, 'Main'))); 

io.on('connection', (socket) => {
  console.log('A user connected');

  const select = db.prepare('SELECT name, msg, time FROM chat_logs ORDER BY id ASC');
  const chatHistory = select.all();
  socket.emit('chatHistory', chatHistory);

  socket.on('chatting', (data) => {
    const { name, msg } = data;
    const time = moment(new Database()).format('h:mm A');

    const insert = db.prepare('INSERT INTO chat_logs (name, msg, time) VALUES (?, ?, ?)');
    insert.run(name, msg, time);

    io.emit('chatting', {
      name,
      msg,
      time,
    });
  }); 
});

server.listen(port, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3000');
});