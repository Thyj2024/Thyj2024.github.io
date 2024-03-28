var intelligence = 0,
    comfort = 0,
    health = 0,
    meili = 0,
    grade = "",
    myVariable = "";

function mybutton() {
    let audio = document.getElementById('Audio1');
    audio.play();

    // 获取container元素
    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "现在是三月，这是新学期的第一个月，你决定……";

    // Clear the content of the button element
    var button = document.querySelector(".button1");
    button.remove();

    // Remove the image
    var imageElement = document.querySelector("img");
    imageElement.remove();

    var pElement = document.querySelector("p");
    pElement.innerHTML = "";

    toggleButton.insertAdjacentHTML('afterend', '<br>'); // 添加换行符

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "认真听课，认识新老师";
    newContentButton.setAttribute("onclick", "uhke()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton2 = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton2.textContent = "还在放假的余韵中，不想上课";
    newContentButton2.setAttribute("onclick", "buuhke()");
    newContentButton2.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton2);
}



function uhke() {
    let audio = document.getElementById('Audio1');
    audio.play();

    // 获取container元素
    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10";

    intelligence += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "zoye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function buuhke() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10";

    comfort += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "zoye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function zoye() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '90vh'; // 设置较大的高度
    }
    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "老师布置了一些作业课后完成，你选择……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "这题我会，老师上课讲了，我要认真做完";
    newContentButton.setAttribute("onclick", "rfvfzozoye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定啊没有认真听课，不是很会，我要随便做做";
    newContentButton.setAttribute("onclick", "svbmzozo()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "一次作业，不做应该没事吧,不做了";
    newContentButton.setAttribute("onclick", "buzozoye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function rfvfzozoye() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "恭喜你，作业得分90+，老师很满意  智力+15";

    intelligence += 15;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function svbmzozo() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你的作业获得了60+  智力+5";

    intelligence += 5;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function buzozoye() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "很抱歉，老师扣了你的分  智力-10";

    intelligence -= 10;
    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function sjytyule() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '80vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '120vh'; // 设置较大的高度
    }
    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "刚开学你有60个小时的空闲时间（每次选择消耗20小时)";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "在宿舍玩会手机吧";
    newContentButton.setAttribute("onclick", "wjuzji()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "读一读感兴趣的书吧";
    newContentButton.setAttribute("onclick", "duuu()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "感觉学的知识还没掌握，复习吧";
    newContentButton.setAttribute("onclick", "fuxi()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "出去逛逛，看看音乐剧电影吧";
    newContentButton.setAttribute("onclick", "iuqu()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "最近运动没跟上，锻炼锻炼身体吧";
    newContentButton.setAttribute("onclick", "drlm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "有新的电视剧出来了诶，追追剧吧";
    newContentButton.setAttribute("onclick", "vvju()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function wjuzji() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function duuu() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '35vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 智力+5 闲余时间-20h";

    comfort += 10; intelligence += 5;
    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function fuxi() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 闲余时间-20h";

    intelligence += 5;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function iuqu() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 魅力+10 闲余时间-20h";

    comfort += 10; meili += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function drlm() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "健康+20 闲余时间-20h";

    health += 20;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function vvju() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function sjytyule1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '100vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }
    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你还有40个小时";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "在宿舍玩会手机吧";
    newContentButton.setAttribute("onclick", "wjuzji1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "读一读感兴趣的书吧";
    newContentButton.setAttribute("onclick", "duuu1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "感觉学的知识还没掌握，复习吧";
    newContentButton.setAttribute("onclick", "fuxi1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "出去逛逛，看看音乐剧电影吧";
    newContentButton.setAttribute("onclick", "iuqu1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "最近运动没跟上，锻炼锻炼身体吧";
    newContentButton.setAttribute("onclick", "drlm1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "有新的电视剧出来了诶，追追剧吧";
    newContentButton.setAttribute("onclick", "vvju1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function wjuzji1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function duuu1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '35vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 智力+5 闲余时间-20h";

    comfort += 10; intelligence += 5;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function fuxi1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 闲余时间-20h";

    intelligence += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function iuqu1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 魅力+10 闲余时间-20h";

    comfort += 10; meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function drlm1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "健康+20 闲余时间-20h";

    health += 20;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function vvju1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytyule2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function sjytyule2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '80vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }
    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你还有最后的20小时，你选择……";

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "在宿舍玩会手机吧";
    newContentButton.setAttribute("onclick", "wjuzji2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "读一读感兴趣的书吧";
    newContentButton.setAttribute("onclick", "duuu2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "感觉学的知识还没掌握，复习吧";
    newContentButton.setAttribute("onclick", "fuxi2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "出去逛逛，看看音乐剧电影吧";
    newContentButton.setAttribute("onclick", "iuqu2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "最近运动没跟上，锻炼锻炼身体吧";
    newContentButton.setAttribute("onclick", "drlm2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "有新的电视剧出来了诶，追追剧吧";
    newContentButton.setAttribute("onclick", "vvju2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function wjuzji2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function duuu2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '35vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 智力+5 闲余时间-20h";

    comfort += 10; intelligence += 5;

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function fuxi2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 闲余时间-20h";

    intelligence += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function iuqu2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 魅力+10 闲余时间-20h";

    comfort += 10; meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function drlm2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "健康+20 闲余时间-20h";

    health += 20;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function vvju2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 闲余时间-20h";

    comfort + 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function sjytuvmm() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }
    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "寝室十一点关灯了， 你选择……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "直接睡觉吧";
    newContentButton.setAttribute("onclick", "vijpuvjn()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "再追一会剧吧";
    newContentButton.setAttribute("onclick", "aoyevvju()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "再写一会作业吧";
    newContentButton.setAttribute("onclick", "zdxpzoye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function vijpuvjn() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "健康+10";

    health += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytvrih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function aoyevvju() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-5 健康-10";

    intelligence -= 5; health -= 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytvixm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function zdxpzoye() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+5 健康+5";

    intelligence += 5; health += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "sjytvixm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function updateTime() {
    var currentTime = new Date(); // 获取当前时间
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var hours = currentTime.getHours();

    // 获取显示时间的 HTML 元素
    var timeElement = document.getElementById('time');

    // 格式化时间，确保小时、分钟和秒数始终是两位数
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    hours = (hours < 10 ? "0" : "") + hours;

    // 显示时间
    timeElement.innerHTML = "8 :" + minutes + ":" + seconds;
}


function sjytvixm() {

    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '70vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "第二天早八，由于熬夜你错过了闹钟 你看了眼时间：";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "都这个点了，要不不去了..";
    newContentButton.setAttribute("onclick", "buquzcba()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "赶紧起来赶紧起来，再不起来就真的缺勤了";
    newContentButton.setAttribute("onclick", "gjquuhke()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // 初始调用一次以避免页面加载后等待一秒才显示时间
    updateTime();
}

// 示例：一个事件函数，当发生某些事情时，会停止时间更新
function someEventFunction() {
    stopUpdatingTime();
    // ... 其他代码 ...
}

function buquzcba() {

    // 获取显示时间的 HTML 元素
    var timeElement = document.getElementById('time');

    // 移除时间标签
    timeElement.parentNode.removeChild(timeElement);

    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "surprise！老师点名了，你的考勤被扣分了  智力-10  心得：看来还是要好好上课呀";

    intelligence -= 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytvrih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);


}
function gjquuhke() {

    // 获取显示时间的 HTML 元素
    var timeElement = document.getElementById('time');

    // 移除时间标签
    timeElement.parentNode.removeChild(timeElement);

    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "surprise！老师点名了，你的考勤被扣分了  智力-10  心得：看来还是要好好上课呀";

    intelligence -= 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytvrih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);


}

function siytvrih() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "A Few Moments Later...";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siyt()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function siyt() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 600) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度

    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "快期中考试了，你决定在图书馆复习。\
    正当你认真复习，突然楼下传来了很大的争吵声，你选择……";


    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "太好奇了，吃会瓜吧";
    newContentButton.setAttribute("onclick", "iigx()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "不行！马上要考试了不能分心！奋斗！";
    newContentButton.setAttribute("onclick", "ffdz()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function iigx() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你回过神来发现一上午在沉浸式吃瓜中过去了 \
    智力-5";
    intelligence -= 5;



    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "izrf()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function ffdz() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");


    h1Element.innerHTML = "智力+5";
    intelligence += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "xihrderflntm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function izrf() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "课上老师随机点名抽中了你,你选择……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "认真回答老师的问题";
    newContentButton.setAttribute("onclick", "hvdawfti()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
    // Add new content to the button element

    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "说自己不会";
    newContentButton.setAttribute("onclick", "uobuhv()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}



function xihrderflntm() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '80vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "正当你准备低头的时候，忽然看见喜欢的人 走过来和你聊天，你选择说……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "对不起同学我要复习，我们晚点再聊吧";
    newContentButton.setAttribute("onclick", "wjdmzdln()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "我们要不先一起学习，等会再聊吧";
    newContentButton.setAttribute("onclick", "yiqixtqi()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "我们出去聊吧，正好我要走了";
    newContentButton.setAttribute("onclick", "iuquln()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function wjdmzdln() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 魅力+5";

    intelligence += 10; meili += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "later()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function yiqixtqi() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 魅力+10";

    intelligence += 10; meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "later()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function iuquln() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+0 魅力+10";

    meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "later()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function hvdawfti() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10";

    intelligence += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "hvdawfti2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function uobuhv() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-5";

    intelligence -= 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "hvdawfti3()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function hvdawfti2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "老师记住了你，并和你说欢迎下课来\
    讨论，你选择……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "下课去找老师认真讨论";
    newContentButton.setAttribute("onclick", "rfvftcly()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "太困了，下课速速溜回去睡觉";
    newContentButton.setAttribute("onclick", "hvquuvjn()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}


function later() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "A Few Moments Later...";

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "izrf()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);


}

function rfvftcly() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+5";

    intelligence += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siythods()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function hvquuvjn() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+0";

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siythods()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function hvdawfti3() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你感到有些羞愧，你选择……";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "算了摆烂了，反正我成绩就这样了";
    newContentButton.setAttribute("onclick", "srlebdlj()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "下定决心认真学习";
    newContentButton.setAttribute("onclick", "rfvfxtxi()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function srlebdlj() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-5 魅力-5";

    intelligence - 5; meili -= 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siythods()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function rfvfxtxi() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10 魅力+5";

    intelligence += 10; meili += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siythods()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function siythods() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "这个月活动很多，但是很多都和课程撞了  你很想去广院之星，但是有晚课，你选择...";


    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "以后有机会再去吧，还是上课更重要";
    newContentButton.setAttribute("onclick", "yihzzduo()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "机不可失，一年一度的广院之星我不能错过";
    newContentButton.setAttribute("onclick", "bungcogo()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function yihzzduo() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10";

    intelligence += 10

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });



    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "goicqimnye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function bungcogo() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-5 魅力+10";

    intelligence -= 5; meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });



    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "goicqimnye()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}



function goicqimnye() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "国潮奇妙夜就要举办了，那天你刚好没课！  你的好朋友帮你获得了参与表演的报名表，你选择...";


    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "难得的机会，参加一下吧";
    newContentButton.setAttribute("onclick", "cjjxyixx()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "还是算了吧";
    newContentButton.setAttribute("onclick", "srle()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function cjjxyixx() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "魅力+10";

    meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "tjvu()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function srle() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+5";

    comfort += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "tjvu()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function tjvu() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你在公众号上看到推送可以报名当摊主，你选择...";

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "火速申请";
    newContentButton.setAttribute("onclick", "hosuufqk()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "不知道卖些啥呀，我还是只逛逛街吧";
    newContentButton.setAttribute("onclick", "dhgljpde()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}

function hosuufqk() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+5 魅力+5 舒适+5";

    intelligence += 5; meili += 5; comfort += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytqita()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function dhgljpde() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+5";

    comfort += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytqita()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function siytqita() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "这个月空余时间不多，你选择和朋友一起玩，好好睡觉";

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "siytqita2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function siytqita2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10 健康+10";

    comfort += 10; health += 10;

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuytvrih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function wuytvrih() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '65vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "5月来了！ 这个月是点名月，所以你一节课都没有落下， 好好学习";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuyt2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function wuyt2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+20";

    intelligence += 20;

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuytyule()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function wuytyule() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '65vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "这个月活动也超级多! 首先到来的是运动会，你选择...";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "积极参与项目";
    newContentButton.setAttribute("onclick", "cjjxxlmu()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "好好当观众";
    newContentButton.setAttribute("onclick", "dhgrvs()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "太热了，还是在宿舍呆着吧";
    newContentButton.setAttribute("onclick", "buquyydshv()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function cjjxxlmu() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "魅力+10 健康+10";

    meili += 10; health += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "yydshvbisd()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function dhgrvs() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+5 健康+5";

    comfort += 5; health += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "heihtr()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function buquyydshv() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+10";

    comfort += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "heihtr()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function yydshvbisd() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '50vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '70vh'; // 设置较大的高度
    }


    if (meili >= 40) {
        var h1Element = document.querySelector("h1");
        h1Element.innerHTML = "主席台播报比赛名次了<br><br>恭喜你，拿到名次了欸！";
    }
    else {
        var h1Element = document.querySelector("h1");
        h1Element.innerHTML = "主席台播报比赛名次了<br><br>哎呀，竟然错失了名次 下次再战吧！";
    }

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "heihtr()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function heihtr() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "合唱比赛就要举行了，学院 正在召集合唱团，你选择...";

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "我唱歌还不错，参与一下吧";
    newContentButton.setAttribute("onclick", "cjyuheih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "算了，我想多休息一会";
    newContentButton.setAttribute("onclick", "doxqxi()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function cjyuheih() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "魅力+10";

    meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "heihbisd()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function doxqxi() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+5";

    comfort += 5;

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "glyrviiy()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function heihbisd() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    if (meili >= 40) {
        var h1Element = document.querySelector("h1");
        h1Element.innerHTML = "比赛结束后公布了最终结果<br>恭喜你，获得了最佳表现奖";
    }
    else {
        var h1Element = document.querySelector("h1");
        h1Element.innerHTML = "比赛结束后公布了最终结果<br>你拿到了鼓励奖，再接再厉吧！";
    }

    // Clear the content of the button element
    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "glyrviiy()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

}
function glyrviiy() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '65vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "广院之春也要举行了，你在第一时间看 到了转发集赞的公众号，你选择...";


    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "速速转发获取门票去看表演";
    newContentButton.setAttribute("onclick", "susuvrfa()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "还是多休息会吧";
    newContentButton.setAttribute("onclick", "doxqxihvba()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function susuvrfa() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "魅力+10";

    meili += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function doxqxihvba() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "舒适+5";

    comfort += 5;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuytuvmm()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function wuytuvmm() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '40vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '65vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "这个月空闲时间比较多，你睡得很好";

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "wuytuvmm2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function wuytuvmm2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "健康+10";

    health += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "lqytvrih()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function lqytvrih() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '60vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "More Moments Later...";

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "lqyt()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function lqyt() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '90vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "6月来了！终极期末生存月来了！ 最后一节课上老师讲了一个知识点， 你没太听懂，你选择...";


    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "下课去找老师讨论";
    newContentButton.setAttribute("onclick", "xxkequtcly()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "下课直接回宿舍休息";
    newContentButton.setAttribute("onclick", "xxkehvsuue()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function xxkequtcly() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+20";

    intelligence += 20;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "iuquwj()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function xxkehvsuue() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-10";

    intelligence -= 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "iuquwj()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function iuquwj() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "你朋友考完试了邀请你出去玩， 可是你还有一科没考，你选择...";

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "委婉拒绝她，下次再约吧";
    newContentButton.setAttribute("onclick", "zdyt()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "不想伤害友情，去玩完再复习吧";
    newContentButton.setAttribute("onclick", "wjwjzdfuxi()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function zdyt() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '30vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '50vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力+10";

    intelligence += 10;

    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "qimoigji1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function wjwjzdfuxi() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "智力-5";

    intelligence -= 5;

    var button = document.querySelector(".button");
    button.remove();

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "qimoigji1()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function qimoigji1() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '65vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '100vh'; // 设置较大的高度
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "现在你的各项数值是：<br>智力:" + intelligence + "<br>舒适度：" + comfort + "<br>魅力：" + meili + "<br>健康:" + health;

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "qimoigji2()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function qimoigji2() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }
    if (intelligence >= 110) {
        grade = "优秀";
    } else if (intelligence >= 70) {
        grade = "良好";
    } else if (intelligence >= 40) {
        grade = "及格";
    } else if (intelligence >= -20) {
        grade = "不及格，需要重修了...";
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "根据你的智力值，<br>本学期你的期末成绩是：<br>" + grade;

    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "ufti()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function ufti() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    if (health >= 50) {
        grade = "身体素质很好！<br>朝气蓬勃";
    } else if (health >= 5) {
        grade = "身体素质有点儿下降，<br>需要多多运动噢";
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "根据你的健康值，<br>这学期你的身体健康状况是：<br>" + grade;


    var button = document.querySelector(".button");
    button.remove();


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "xbli()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function xbli() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    if (comfort >= 50) {
        grade = "积极乐观，阳光开朗";
    } else if (comfort >= 5) {
        grade = "或许最近有些焦虑萎靡，<br>快好起来吧";
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "根据你的舒适值，<br>这学期你的心理健康状况是:<br>" + grade;


    var button = document.querySelector(".button");
    button.remove();

    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "mwli()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function mwli() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '60vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    if (meili >= 50) {
        grade = "看到了你散发的魅力，慢慢的向你靠近了";
    } else if (meili >= 5) {
        grade = "和你玩成了好伙伴";
    }

    // Clear the content of the h1 element
    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "根据你的魅力值，<br><br>你喜欢的人" + grade;
    // 设置 <h1> 元素的字体大小为 24 像素


    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "确定";
    newContentButton.setAttribute("onclick", "zvvs()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}
function zvvs() {
    let audio = document.getElementById('Audio1');
    audio.play();

    var container = document.querySelector('.container');

    // 会先检查，所以屏幕大小更改的时候无变化
    // 检查设备类型或屏幕宽度
    if (window.innerWidth <= 768) { // 手机或小屏幕设备
        container.style.height = '80vh'; // 设置较小的高度
    } else { // 电脑或大屏幕设备
        container.style.height = '80vh'; // 设置较大的高度
    }

    var h1Element = document.querySelector("h1");
    h1Element.innerHTML = "我们的团队成员有<br>崔子芊、杨玥、汤艳君<br><br>contact us<br>vx:19947896970<br><br>最后我们给你准备了一份小惊喜";



    document.querySelectorAll(".button").forEach(function (button) {
        button.remove();
    });


    // Add new content to the button element
    var newContentButton = document.createElement("button"); // Use 'button' instead of 'button1'
    newContentButton.textContent = "拆开最后的惊喜";
    newContentButton.setAttribute("onclick", "suprise()");
    newContentButton.className = "button"; // Add class names to the button
    document.querySelector(".button-container").appendChild(newContentButton);
}

function suprise() {
    // 在新窗口中打开链接
    window.open("surprise.html");
}