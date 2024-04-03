<?php
// submit_data.php

$mysqli = new mysqli("127.0.0.1:3308", "root", "root", "login");


// 检测连接
if ($mysqli->connect_error) {
    die ("连接失败: " . $mysqli->connect_error);
}

// 预防 SQL 注入
$stmt = $mysqli->prepare("INSERT INTO myinfo (nickname, hobby, introduction, gender, birthday, area, phone_num, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $nickname, $hobby, $introduction, $gender, $birthday, $area, $phone_num, $email);

// 变量和参数绑定

if (isset ($_POST['hobby'])) {
    if (is_array($_POST['hobby'])) {
        $hobby = implode(',', $_POST['hobby']);
    } else {
        $hobby = $_POST['hobby'];
    }
} else {
    $hobby = ''; // 或者任何默认值
}


$nickname = $_POST['nickname'];
$introduction = $_POST['introduction'];
$gender = $_POST['gender'];
$birthday = $_POST['birthday'];
$area = $_POST['area'];
$phone_num = $_POST['phone_num'];
$email = $_POST['email'];

// 执行
if ($stmt->execute()) {
    echo "<script>alert('个人资料修改成功');window.location.href='shop.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// 关闭连接
$stmt->close();
$mysqli->close();

