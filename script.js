// =========================
// DUNG AI PRO v1.0
// =========================

const OPENAI_API_KEY = " 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";

const chat = document.getElementById("chat");
const sendBtn = document.getElementById("send");
const question = document.getElementById("question");

sendBtn.addEventListener("click", sendMessage);

question.addEventListener("keydown", function(e){
    if(e.key==="Enter" && !e.shiftKey){
        e.preventDefault();
        sendMessage();
    }
});

function addUser(text){

    chat.innerHTML += `
    <div class="user">
        <div class="bubble">${escapeHtml(text)}</div>
        <div class="avatar">👤</div>
    </div>`;

    scrollBottom();
}

function addAI(text){

    chat.innerHTML += `
    <div class="ai">
        <div class="avatar">🤖</div>
        <div class="bubble">${text}</div>
    </div>`;

    scrollBottom();
}

function scrollBottom(){
    chat.scrollTop = chat.scrollHeight;
}

function escapeHtml(text){
    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;");
}

async function sendMessage(){

    const text = question.value.trim();

    if(text==="") return;

    addUser(text);

    question.value="";

    const loading=document.createElement("div");

    loading.className="ai";

    loading.innerHTML=`
        <div class="avatar">🤖</div>
        <div class="bubble">
            ⏳ Dung AI Pro đang suy nghĩ...
        </div>
    `;

    chat.appendChild(loading);

    scrollBottom();

    try{

        const response=await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method:"POST",
                headers:{
                    "Authorization":"Bearer "+OPENAI_API_KEY,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({

                    model:"openai/gpt-4.1-mini",

                    messages:[
                        {
                            role:"system",
                            content:"Bạn là Dung AI Pro. Luôn trả lời bằng tiếng Việt, lịch sự, chính xác."
                        },
                        {
                            role:"user",
                            content:text
                        }
                    ]

                })
            }
        );

        const data=await response.json();

        loading.remove();

        if(data.error){

            addAI("❌ "+data.error.message);

            return;
        }

        addAI(data.choices[0].message.content);

    }
    catch(e){

        loading.remove();

        addAI("❌ Không kết nối được tới OpenRouter.");

        console.error(e);

    }

}
