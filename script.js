window.speechSynthesis.speak(
new SpeechSynthesisUtterance("Hello, voice is working")
);
function send(){

    let input = document.getElementById("input");
    let message = input.value;
let voice = new SpeechSynthesisUtterance(message);
    
voice.lang = "en-US";
voice.rate = 1;
voice.pitch = 1;

window.speechSynthesis.speak(voice);
    if(message === ""){
        return;
    }

    let chat = document.getElementById("messages");

    chat.innerHTML += 
    "<p class='user'>You: " + message + "</p>";

    let reply = "I am a chatbot. You said: " + message;
setTimeout(function(){

let voice = new SpeechSynthesisUtterance(reply);

voice.lang = "en-US";
voice.rate = 1;
voice.pitch = 1;

window.speechSynthesis.speak(voice);

},500);
    chat.innerHTML += 
    "<p class='bot'>Bot: " + reply + "</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
function startVoice(){

let recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.onresult = function(event){

let text = event.results[0][0].transcript;

document.getElementById("input").value = text;

};

recognition.start();

}
