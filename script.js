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
