async function send(){

let input = document.getElementById("input");
let message = input.value;

if(message.trim()==""){
    return;
}

let chat = document.getElementById("messages");

chat.innerHTML += 
"<p class='user'>You: "+message+"</p>";

let reply = "I am thinking...";

chat.innerHTML += 
"<p class='bot'>Bot: "+reply+"</p>";

input.value="";

chat.scrollTop = chat.scrollHeight;

}
