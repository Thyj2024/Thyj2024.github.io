<?php
    $errors = ''; // 初始化错误消息字符串

    if (empty($_POST["username"])) {
        $errors .= "用户名不能为空!!<br>"; // 添加错误消息
    }
    if (strlen($_POST["password"]) < 6) {
        $errors .= "密码不能小于六位<br>"; // 添加错误消息
    }
    if ($_POST["tpassword"] !== $_POST["password"]) {
        $errors .= "两次输入密码不一致<br>"; // 添加错误消息
    }

    // 检查是否有错误消息
    if (!empty($errors)) {
        die($errors); // 显示所有错误消息并终止脚本
    }

    $password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);
    // echo $_POST["password"];
    // echo $password_hash;


    $name = $_POST["username"];
    $mail = $_POST["email"];


    $mysqli = new mysqli("127.0.0.1:3308", "root", "root", "login");
    if ($mysqli->connect_errno) {
        die("数据库连接错误：" . $mysqli->connect_error);
    }

    if (isset($_POST["reg"])) {
        $sql = "INSERT INTO user (username,email,pass_hash) VALUES ('$name','$mail','$password_hash')";
        $mysqli->query($sql);

        if ($mysqli->affected_rows > 0) {
            echo "<script>alert('恭喜你，注册成功，马上跳转至登录页面');window.location.href='login.html';</script>";
        }
    }
    

