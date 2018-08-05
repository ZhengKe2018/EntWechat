<?php

function getToken(){
    $corpid='wx382d2e49831d65a7';
    $corpsecret='Gc1Obkp-izvRoniN8rhzloZCbGfDjCcniefLp24DZ-o';
    $file = file_get_contents("./access_token.json",true);
    $result = json_decode($file,true);
	if (time() > $result['expires_in'])
	{
			$data = array();
			$data['access_token'] = getNewToken($corpid,$corpsecret);
			$data['expires_in']=time()+7200;
			$jsonStr =  json_encode($data);
			$fp = fopen("./access_token.json", "w");
			fwrite($fp, $jsonStr);
			fclose($fp);
			return $data['access_token'];
	}
	else
			return $result['access_token'];
}
function getNewToken($corpid,$corpsecret){
    $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid={$corpid}&corpsecret={$corpsecret}";
    $access_token_Arr =  https_request($url);
	echo $access_token_Arr;
    return $access_token_Arr['access_token'];
}
function https_request ($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $out = curl_exec($ch);
        curl_close($ch);
        return  json_decode($out,true);
}
?>