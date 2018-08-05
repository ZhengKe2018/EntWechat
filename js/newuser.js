$(function(){
	
		window.onload = function(){
			
				$.ajax({
                    type: 'get',
                    url:"get_department_list.php",
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								var department_length = obj.department.length;

								for(var index=0;index<department_length;index++)
								{
									$("select.department_name").append("<option value="+obj["department"][index]['id']+">"+obj["department"][index]['name']+"</option>");
								}
							}    		
               }
             });				
		};
		
		$("#add_new_user").click(function(){
			var $UserID = $("#UserID").val();
			var $UserXM = $("#UserXM").val();
			var $UserSJ = $("#UserSJ").val();
			var $UserDep = $("#UserDep option:selected").val();
			
			if($UserID.length == 0)
			{
				alert("用户ID不能为空");
				return false;
			}
			if($UserXM.length == 0)
			{
				alert("用户姓名不能为空");
				return false;
			}
			if($UserSJ.length == 0)
			{
				alert("用户手机不能为空");
				return false;
			}
			if($UserDep.length == 0)
			{
				alert("用户部门不能为空");
				return false;
			}
			
			$.ajax({
                    type: 'get',
                    url:"add_new_user.php",
					data:"UserID="+$UserID+"&UserXM="+$UserXM+"&UserSJ="+$UserSJ+"&UserDep="+$UserDep,
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							if(parseInt(obj.errcode) == 0)
							{
								alert("添加成功");
							} 
							else
							{
								alert("添加不成功");
							} 
               }
             }); 
			
		});
});