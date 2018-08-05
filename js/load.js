$(function(){

	$("button[type='submit']").click(function(){
		var $UserName = $("#UserName").val();
		var $PassWord = $("#PassWord").val();

		if($UserName == "admin" && $PassWord == "admin")
			window.location.href = "index.html";
		else
			alert("用户名或密码错误");
		
		return false;
	});
});