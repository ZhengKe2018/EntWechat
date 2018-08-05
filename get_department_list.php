<?php
require "get_access_token.php";
$access_token = getToken();
$headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
$curl = curl_init();
$url = "https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=$access_token";
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

echo $output;

//$department_list = json_decode($output,true);
//var_dump(count($department_list['department']));
//echo count($department_list);

?>