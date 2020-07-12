$(document).ready(function () {
    /*
     real interaction with server example
     $.ajax({
        url: local_sheet,
        type:"post",
        dataType: "json",//based on require
        success: function (data) {
            console.log(data);
        }
    })
     */

    //mock interaction with server


    $.mockjax({
        url: "captcha.action",
        response: function (settings) {
            //check verify code
        },
        responseTime: 500
    });

    $.mockjax({
        url: "users.action",
        response: function (settings) {
            var user = settings.data.username,
                users = ["asdf", "Peter", "Peter2", "George"];
            this.responseText = "true";
            if ($.inArray(user, users) !== -1) {
                this.responseText = "false";
            }
        },
        responseTime: 500
    });

    // validate signup form on keyup and submit
    $("#sign_up_form").validate({
        debug: true,

        onfocusout: function (element) {
            $(element).valid();
        },
        // the errorPlacement has to take the table layout into account
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },

        rules: {
            username: {
                required: true,
                remote: "users.action"
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            phoneNumber: {
                required: true,
                minlength: 11,
                maxlength: 11,
            },
            captcha: {
                required: true,
                minlength: 4,
                remote: "captcha.action"
            }
        },

        messages: {
            username: {
                required: "请填写昵称",
                remote: jQuery.validator.format("该昵称已被使用")
            },
            password: {
                required: "密码长度为8-20",
                minlength: "密码长度为8-20",
                maxlength: "密码长度为8-20"
            },
            phoneNumber: {
                required: "请输入手机号",
                minlength: "请填写正确的中国大陆地区手机号",
                maxlength: "请填写正确的中国大陆地区手机号",
                remote: jQuery.validator.format("请填写正确的中国大陆地区手机号")
            },
            captcha: {
                required: "...................请输入验证码",
                minlength: "...................验证码输入错误",
                remote: "...................验证码输入错误"
            }
        },

        // specifying a submitHandler prevents the default submit, good for the demo
        submitHandler: function () {
            alert("submitted!");
        },
        // set this class to error-labels to indicate valid fields
        success: function (label) {
            // set &nbsp; as text for IE
            label.html("&nbsp;").addClass("checked");
        },
        highlight: function (element, errorClass) {
            $(element).parent().next().find("." + errorClass).removeClass("checked");
        },
    });
});