window.onload = function(){
    let oldChat = localStorage.getItem("chat");

    if(oldChat){
        document.getElementById("messages").innerHTML = oldChat;
    }
}


function send(){

let input = document.getElementById("input");
let message = input.value;

if(message.trim()==""){
    return;
}

let chat = document.getElementById("messages");


chat.innerHTML += 
"<p class='user'>You: "+message+"</p>";

let reply = await getAIReply(message);

else if(q.includes("name")){
    reply="I am your AI Assistant.";
}

else if(q.includes("math")){
    reply="I can help you solve maths problems.";
}

else if(q.includes("science")){
    reply="I can explain science topics.";
}

else if(q.includes("bye")){
    reply="Goodbye! Have a nice day.";
}


chat.innerHTML += 
"<p class='bot'>Bot: "+reply+"</p>";


localStorage.setItem("chat", chat.innerHTML);


input.value="";

chat.scrollTop=chat.scrollHeight;

}
async function getAIReply(message){

let response = await fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
});

let data = await response.json();

return data.reply;

}
