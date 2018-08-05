<?php
$file = file_get_contents("./access_token.json",true);
$result = json_decode($file,true);
$access_token = $result['access_token'];

$JSONData = file_get_contents('php://input');

$headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
$curl = curl_init();
$url = "https://qyapi.weixin.qq.com/cgi-bin/user/update?access_token=$access_token";
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $JSONData);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

echo $output;
?>