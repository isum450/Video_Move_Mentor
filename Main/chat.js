'use strict';

const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container');

sendButton.addEventListener('click', () => {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit('chatting', param);
});

// 이전 채팅 기록을 처리하는 이벤트
socket.on('chatHistory', (chatHistory) => {
  chatHistory.forEach(({ name, msg, time }) => {
    const item = new LiModel(name, msg, time);
    item.makeLi();
  });
  // 이전 기록이 로드된 후 스크롤을 가장 아래로 이동
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

socket.on('chatting', (data) => {
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
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

chatInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit('chatting', param);
  chatInput.value = ''; 
}

sendButton.addEventListener('click', send);

