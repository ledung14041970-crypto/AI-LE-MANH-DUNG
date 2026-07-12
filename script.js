function updateClock() {
    const now = new Date();

    const days = [
        "Chủ nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy"
    ];

    const day = days[now.getDay()];

    const date = now.toLocaleDateString("vi-VN");

    const time = now.toLocaleTimeString("vi-VN");

    const clock = document.getElementById("clock");

    if(clock){
        clock.innerHTML = day + "<br>" + date + "<br>" + time;
    }
}

setInterval(updateClock,1000);

updateClock();

function sendMessage(){

    const input=document.getElementById("question");

    const chat=document.getElementById("chatBox");

    if(!input || !chat) return;

    const text=input.value.trim();

    if(text==="") return;

    chat.innerHTML+=
    "<div class='user'>👤 Bạn: "+text+"</div>";

    let answer="Xin lỗi, tôi chưa có dữ liệu.";

    const q=text.toLowerCase();

    if(q.includes("xin chào"))
        answer="Xin chào anh! Tôi là AI Lê Mạnh Dũng.";

    else if(q.includes("thủ tục"))
        answer="Anh hãy chọn mục Thủ tục hành chính.";

    else if(q.includes("pháp luật"))
        answer="Tôi sẽ hỗ trợ tra cứu văn bản pháp luật.";

    else if(q.includes("mường nhé"))
        answer="Mường Nhé là xã thuộc tỉnh Điện Biên.";

    else if(q.includes("đảng"))
        answer="Tôi có thể hỗ trợ tìm hiểu các quy định của Đảng.";

    else
        answer="Cảm ơn anh. Phiên bản AI đầy đủ sẽ trả lời thông minh hơn.";

    setTimeout(function(){

        chat.innerHTML+=
        "<div class='ai'>🤖 AI: "+answer+"</div>";

        chat.scrollTop=chat.scrollHeight;

    },500);

    input.value="";
}
