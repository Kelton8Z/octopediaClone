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

function login() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "chatbot.html",
        data: $('#login_in_form').serialize(),
        success: function (result) {
            console.log(result);//debug
            if (result.resultIndex === 200) {
                alert("登陆成功");
            }
        },
        error: function () {
            alert("登陆失败");
        }
    })
}

function signUp() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "chatbot.html",
        data: $('#sign_up_form').serialize(),
        success: function (result) {
            console.log(result);//debug
            if (result.resultIndex === 200) {
                alert("注册成功");
            }
        },
        error: function () {
            alert("注册失败");
        }
    })
}