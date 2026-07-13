const OPENAI_API_KEY = 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
function send(){

let q=document.getElementById("question").value;

if(q=="") return;

let chat=document.getElementById("chat");

chat.innerHTML += 
"<div class='user'>"+q+"</div>";

chat.innerHTML +=
"<div class='bot'>Tôi đã nhận câu hỏi của bạn. AI sẽ được kết nối ở bước tiếp theo.</div>";

document.getElementById("question").value="";

chat.scrollTop=chat.scrollHeight;

}
