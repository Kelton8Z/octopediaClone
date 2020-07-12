//5 second captcha sending
function sendCode() {
    var btn = document.getElementById("sendCaptchaBtn");
    btn.disabled = true;
    let time = 5;
    var timer = setInterval(fun1, 1000);

    function fun1() {
        time--;
        if (time >= 0) {
            btn.innerHTML = time + "s后重新发送";
        } else {
            btn.innerHTML = "发送验证码";
            btn.disabled = false;
            clearTimeout(timer);
            time = 5;
        }
    }
}

function login(){
    //need check validation
    location.href="chatbot.html";
}