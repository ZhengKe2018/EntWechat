<?php
require "get_access_token.php";
$ID = trim($_GET['ID']);
$access_token = getToken();
$headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
$curl = curl_init();
$url = "https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=$access_token&department_id=$ID";
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

echo $output;
?>