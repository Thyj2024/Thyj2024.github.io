// TODO:光标打字效果
document.addEventListener('DOMContentLoaded', function () {
    var typewriterText = document.getElementById('typewriter-text');
    var text = typewriterText.innerText;
    var index = 0;
    typewriterText.innerText = ''; // 清空文本以开始打字效果

    function typeWriter() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 200); // 调整这里的延迟以控制打字速度
        } else {
            typewriterText.innerHTML += '<div class="typewriter-cursor"></div>'; // 打字结束后添加光标效果
        }
    }

    typeWriter(); // 开始打字效果
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        document.title = "你找不到我😋";
    } else {
        document.title = "啊哈被你找到了😒";
        setTimeout(function () {
            document.title = "江文珺的个人网站";
        }, 2000); // 两秒后恢复原始标题
    }
});

