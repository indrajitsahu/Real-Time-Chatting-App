const socket = io();
let name;
let text = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");
var audio = new Audio('ting1.mp3');

do {
  name = prompt("Please enter your name:");
} while (!name);

document.getElementById("btn").addEventListener("click", sendMsg);

function sendMsg(){
  // console.log("clicked");
  if(text.value != ""){
    sendMessage(text.value);
    text.value=null;
  }
}

text.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && text.value != "") {
    sendMessage(e.target.value);
    text.value=null;
  }
});

function sendMessage(masg) {
  let msgUser = {
    user: name,
    message: masg.trim(),
  };
  // message append
  appendMessage(msgUser, "outgoing");

  // Send to server
  socket.emit('message', msgUser)
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement('div');
  let className = type;
  mainDiv.classList.add(className, "message");
  let markup = 
        `   <h4>${msg.user}</h4>
            <p>${msg.message}</p>
        `;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
  scrollToBottom();
}

// Recieve message
socket.on('message', (rmsg)=>{
    // console.log(rmsg);
    appendMessage(rmsg, 'incoming')
    scrollToBottom();
    audio.play();
})

function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}