const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req,res)=>{

let userMessage = req.body.message;


// Here the AI model connection will be added
// using your AI API key safely


res.json({
reply:"AI connection is ready. Add your AI API key to start answering questions."
});

});


app.listen(3000,()=>{
console.log("AI Chatbot running");
});
