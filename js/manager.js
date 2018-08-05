$(function(){

	$("#Manager_Check_Resume").click(function(){
			$("#Manager_Show_Resume").html("");

				$.ajax({
                    type: 'get',
                    url:"checkInfo.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	                    		var $new_resume_list = '<div class="row ManagerResume"  id='+obj[index]['id']+'><div class="col-xs-1">'+obj[index]['XM']+'</div><div class="col-xs-1">'+obj[index]['XB']+'</div><div class="col-xs-2">'+obj[index]['CSNY']+'</div><div class="col-xs-1">'+obj[index]['MZ']+'</div><div class="col-xs-2">'+obj[index]['SFZH']+'</div><div class="col-xs-2">'+obj[index]['BYYX']+'</div><div class="col-xs-1">'+obj[index]['ZGXL']+'</div><div class="col-xs-1">'+obj[index]['ZGXW']+'</div><div class="col-xs-1">'+obj[index]['LXSJ']+'</div></div></div></div>';
	               				$("#Manager_Show_Resume").append($new_resume_list);
                    		} 


               }
        }); 
	});

	$("#Manager_Output_Excel").click(function(){
		window.location.href = "Manager_Output_Excel.php"
		});

});