// ===== Đồng hồ =====
function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString("vi-VN") +
        "<br>" +
        now.toLocaleTimeString("vi-VN");
}

setInterval(updateClock, 1000);
updateClock();

// ===== Gửi tin nhắn =====
function sendMessage() {

    const input = document.getElementById("question");
    const chat = document.getElementById("chatBox");

    const text = input.value.trim();

    if (text === "") return;

    chat.innerHTML += `
        <div class="user">
            👤 ${text}
        </div>
    `;

    input.value = "";

    setTimeout(() => {

        let answer = getAIAnswer(text);

        chat.innerHTML += `
            <div class="ai">
                🤖 ${answer}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 500);

}

// ===== Trả lời =====
function getAIAnswer(question){

    question = question.toLowerCase();

    if(question.includes("xin chào"))
        return "Xin chào! Tôi là AI Lê Mạnh Dũng.";

    if(question.includes("mường nhé"))
        return "Mường Nhé là xã thuộc tỉnh Điện Biên.";

    if(question.includes("thời tiết"))
        return "Chức năng thời tiết sẽ được kết nối trong phiên bản tiếp theo.";

    if(question.includes("thủ tục"))
        return "Tôi sẽ hỗ trợ tra cứu thủ tục hành chính trong phiên bản Pro.";

    if(question.includes("pháp luật"))
        return "Tôi sẽ hỗ trợ tra cứu văn bản pháp luật.";

    if(question.includes("ai"))
        return "Tôi đang được phát triển để trở thành trợ lý AI phục vụ người dân.";

    return "Xin cảm ơn câu hỏi của bạn. Phiên bản hiện tại đang chạy ngoại tuyến. Phiên bản tiếp theo sẽ kết nối AI để trả lời thông minh như ChatGPT.";
}

// ===== Enter để gửi =====
document.getElementById("question").addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});
