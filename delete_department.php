<?php
require "get_access_token.php";
$access_token = getToken();

$ID = trim($_GET['ID']);

$curl = curl_init();
$url = "https://qyapi.weixin.qq.com/cgi-bin/department/delete?access_token=$access_token&id=$ID";
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

echo $output;
?>