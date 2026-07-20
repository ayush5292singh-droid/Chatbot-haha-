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
let botReply = "I am ready to answer your questions.";

chat.innerHTML += 
"<p>Bot: "+botReply+"</p>";


input.value="";

}
