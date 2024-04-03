<?php
$mysqli = new mysqli("127.0.0.1:3308", "root", "root", "login");
if ($mysqli->connect_errno) {
    die("数据库连接错误：" . $mysqli->connect_error);
}

$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);
$name = $_POST["username"];

if (isset($_POST["log"])) {
    $sql = "SELECT pass_hash FROM user WHERE username='$name'";
    $res = $mysqli->query($sql)->fetch_assoc();
    if($res){
        if(password_verify($_POST["password"],$res["pass_hash"])){
            echo "<script>window.location.href='shop.html';</script>";
        }else{
            echo "<script>alert('请输入正确的密码！！');history.go(-1);</script>";
        }

    }else{
        echo "<script>alert('用户不存在！！');history.go(-1);</script>";
    }

}

