function updateClock() {
    const now = new Date();

    const options = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    const date = now.toLocaleDateString('vi-VN', options);
    const time = now.toLocaleTimeString('vi-VN');

    const clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = `${date}<br>${time}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

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

    let answer = "";

    const q = text.toLowerCase();

    if (q.includes("xin chào")) {
        answer = "Xin chào! Tôi là AI Lê Mạnh Dũng. Rất vui được hỗ trợ bạn.";
    }
    else if (q.includes("thủ tục")) {
        answer = "Chức năng tra cứu thủ tục sẽ được cập nhật trong phiên bản tiếp theo.";
    }
    else if (q.includes("mường nhé")) {
        answer = "Mường Nhé là một xã thuộc tỉnh Điện Biên.";
    }
    else if (q.includes("thời tiết")) {
        answer = "Chức năng thời tiết sẽ sớm được tích hợp.";
    }
    else {
        answer = "Đây là phiên bản thử nghiệm. Sau này website sẽ kết nối AI để trả lời thông minh như ChatGPT.";
    }

    setTimeout(() => {

        chat.innerHTML += `
            <div class="ai">
                🤖 ${answer}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 500);

    input.value = "";
}

document.getElementById("question").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
