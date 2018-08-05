<?php
require "get_access_token.php";
$access_token = getToken();

$UserID = trim($_GET['UserID']);
$UserXM = trim($_GET['UserXM']);
$UserSJ = trim($_GET['UserSJ']);
$UserDep = trim($_GET['UserDep']);

$data = array("userid"=>$UserID,"name"=>$UserXM,"department"=>$UserDep,"mobile"=>$UserSJ);
foreach($data as $key => $value)
	$data[$key] = urlencode($value);
$data = urldecode(json_encode($data));


$headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
$curl = curl_init();
$url = "https://qyapi.weixin.qq.com/cgi-bin/user/create?access_token=$access_token";
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

echo $output;
?>