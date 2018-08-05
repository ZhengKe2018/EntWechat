<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=wx382d2e49831d65a7&corpsecret=Gc1Obkp-izvRoniN8rhzloZCbGfDjCcniefLp24DZ-o");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$data = json_decode(curl_exec($ch));

$access_token = $data->access_token;

echo $access_token;
/*
$data = array("userid"=>"zhangsan","name"=>"张三","department"=>"4659221","mobile"=>"15913215421");
foreach($data as $key => $value)
	$data[$key] = urlencode($value);
$data = urldecode(json_encode($data));

$headerArray =array("Content-type:application/json;charset='utf-8'","Accept:application/json");
$curl = curl_init();
//$url = 'https://qyapi.weixin.qq.com/cgi-bin/user/create?access_token=DCjtjWN08SXbACi6YJVWQqLpxy2VUT-UWizhUsW7zo5U7VrAt5KvmAvC8WUqPj7LU4FNY7IPqu5341-1ca-nctJ7PQ3l0ByfykgInNBd5H7UuOYHSIT9wnVXqUk9Yo6UQ7gX2nWJfdZToy-YYHubZavO4vUF0zwiTpJskdEzf71KojJIGrWPOyez2h-iuTbTs7clCygpcVP-1iBP5l_Eyg';
//$url = 'https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=pU2A8EauBW5oM7Zu87VcI6Wkqd1m74eUFjfcmfoz-azfCRYavOMHH0aPdOqtLeeHz298--M-NMsbxgNS40PZ_YWe5apbKSeeSHASUjOPspzRO9KoooEdaP2K0u40h4Hg1mlZY8y54qHEygzFPHfZHuj3cTLL16wyjxLUAU_uXUmqVGL7pToKax37AGYIzQBWiq4bzij0tgeX_fAEndDF6Q&department_id=4659221';
$url = 'https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=pU2A8EauBW5oM7Zu87VcI6Wkqd1m74eUFjfcmfoz-azfCRYavOMHH0aPdOqtLeeHz298--M-NMsbxgNS40PZ_YWe5apbKSeeSHASUjOPspzRO9KoooEdaP2K0u40h4Hg1mlZY8y54qHEygzFPHfZHuj3cTLL16wyjxLUAU_uXUmqVGL7pToKax37AGYIzQBWiq4bzij0tgeX_fAEndDF6Q&department_id=4659221';
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl,CURLOPT_HTTPHEADER,$headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
curl_close($curl);

$department_list = json_decode($output,true);
var_dump(count($department_list['department']));
//echo count($department_list);
*/
?>