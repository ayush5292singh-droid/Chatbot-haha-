function send(){

let input = document.getElementById("input");
let message = input.value;

if(message.trim()==""){
    return;
}


// Speak only YOUR message
let voice = new SpeechSynthesisUtterance(message);

voice.lang = "en-US";
voice.rate = 1;
voice.pitch = 1;

window.speechSynthesis.cancel();
window.speechSynthesis.speak(voice);


// Show your message
let chat = document.getElementById("messages");

chat.innerHTML += 
"<p>You: "+message+"</p>";


// Bot reply
let botReply = "";

let q = message.toLowerCase();

if(q.includes("hello") || q.includes("hi")){
    botReply = "Hello! 😊 Nice to talk with you. How can I help you?";
}

else if(q.includes("your name")){
    botReply = "I am your personal AI assistant.";
}

else if(q.includes("how are you")){
    botReply = "I am working perfectly and ready to help you.";
}

else if(q.includes("who made you")){
    botReply = "I was created by you as a chatbot project.";
}

else if(q.includes("thank")){
    botReply = "You're welcome! 😊";
}

else{
    botReply = "I am still learning. Try asking me something else.";
}

chat.innerHTML += 
"<p>Bot: "+botReply+"</p>";


input.value="";

}
