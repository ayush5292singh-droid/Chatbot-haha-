function send(){

let input = document.getElementById("input");
let message = input.value;

if(message.trim()==""){
    return;
}

let chat = document.getElementById("messages");

chat.innerHTML += 
"<p class='user'>You: "+message+"</p>";


let reply = "Sorry, I am still learning.";

let q = message.toLowerCase();


if(q.includes("hello") || q.includes("hi")){
    reply="Hello! How can I help you?";
}

else if(q.includes("name")){
    reply="I am your AI Assistant.";
}

else if(q.includes("math")){
    reply="I can help you with mathematics.";
}

else if(q.includes("science")){
    reply="Science explains how the world works.";
}

else if(q.includes("who made you")){
    reply="I was created using HTML, CSS and JavaScript.";
}

else if(q.includes("thank")){
    reply="You're welcome!";
}


chat.innerHTML += 
"<p class='bot'>Bot: "+reply+"</p>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}
