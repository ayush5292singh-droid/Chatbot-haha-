window.speechSynthesis.speak(
new SpeechSynthesisUtterance("Hello, voice is working")
);
function send(){

    let input = document.getElementById("input");
    let message = input.value;

    if(message === ""){
        return;
    }

    let chat = document.getElementById("messages");

    chat.innerHTML += 
    "<p class='user'>You: " + message + "</p>";

    let reply = "I am a chatbot. You said: " + message;
let voice = new SpeechSynthesisUtterance(reply);

voice.lang = "en-US";
voice.rate = 1;
voice.pitch = 1;

window.speechSynthesis.speak(voice);
    chat.innerHTML += 
    "<p class='bot'>Bot: " + reply + "</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
