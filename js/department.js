$(function(){

		/*查看部门列表*/
	    $("div[aria-controls='departmentList']").click(function(){
	    			$("#show_department_list").html("");
	    			$.ajax({
                    type: 'get',
                    url:"get_department_list.php",
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								var department_length = obj.department.length;
								var row = parseInt(department_length / 2);

								for(var index=0;index<row;index++)
								{
									var $new_department_list = '<div class="row DeparmentDiv"><div class="col-xs-2">'+obj["department"][2*index]['id']+'</div><div class="col-xs-4">'+obj["department"][2*index]['name']+'</div><div class="col-xs-2">'+obj["department"][2*index+1]['id']+'</div><div class="col-xs-4">'+obj["department"][2*index+1]['name']+'</div></div></div></div>';
									$("#show_department_list").append($new_department_list);
								}
								
								if(parseInt(department_length % 2) == 1)
								{
									var $new_department_list = '<div class="row ReadDeparmentDiv"><div class="col-xs-2">'+obj["department"][2*row]['id']+'</div><div class="col-xs-4">'+obj["department"][2*row]['name']+'</div></div></div></div>';
									$("#show_department_list").append($new_department_list);
								}
							}    		
               }
             });
        });
		
		/*查看部门列表*/
	    $("div[aria-controls='deleteDepartment']").click(function(){
	    			$("#delete_department_list").html("");
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
									var $new_department_list = '<div class="row DeleteDeparmentDiv"><div class="col-xs-1">'+(index+1)+'</div><div class="col-xs-2">'+obj["department"][index]['id']+'</div><div class="col-xs-4">'+obj["department"][index]['name']+'</div><div class="col-xs-1"></div><button class="btn btn-danger btn-xs" data-id='+obj["department"][index]['id']+' data-toggle="modal" data-target="#removeDepartment"><span class="glyphicon glyphicon-remove"></span>删除</button></div>';
									$("#delete_department_list").append($new_department_list);
								}
							}    		
               }
             });
        });
		
		$("#read_department_name_btn").click(function(){
				var $ID = $("#read_department_name").val();
		    	$("#ReadUserBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"get_department_name.php",
					data:"ID="+$ID,
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								var userlist_length = obj.userlist.length;

								for(var index=0;index<userlist_length;index++)
								{
									var $new_user_list = '<div class="row ReadUserDiv"><div class="col-xs-3">'+(index+1)+'</div><div class="col-xs-3">'+obj["userlist"][index]['userid']+'</div><div class="col-xs-6">'+obj["userlist"][index]['name']+'</div></div>';
									$("#ReadUserBody").append($new_user_list);
								}
							}   		
               }
             });
		});
		
		$("#delete_department_name_btn").click(function(){
				
				var $ID = $("#delete_department_name").val();
		    	$("#DeleteUserBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"get_department_name.php",
					data:"ID="+$ID,
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								var userlist_length = obj.userlist.length;

								for(var index=0;index<userlist_length;index++)
								{
									var $new_user_list = '<div class="row DeleteUserDiv"><div class="col-xs-1"><input type="checkbox" name="delete_department_name" value='+obj["userlist"][index]['userid']+'></div><div class="col-xs-2">'+(index+1)+'</div><div class="col-xs-2">'+obj["userlist"][index]['name']+'</div></div>';
									$("#DeleteUserBody").append($new_user_list);
								}
							}   		
               }
             }); 
		});
		
		$("#update_department_name_btn").click(function(){	
				var $ID = $("#update_department_name").val();
		    	$("#UpdateUserBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"get_department_name.php",
					data:"ID="+$ID,
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								var userlist_length = obj.userlist.length;

								for(var index=0;index<userlist_length;index++)
								{
									var $new_user_list = '<div class="row UpdateUserDiv" id='+obj["userlist"][index]['userid']+'><div class="col-xs-4">'+(index+1)+'</div><div class="col-xs-4">'+obj["userlist"][index]['name']+'</div><div class="col-xs-4"><button class="btn btn-yellow btn-xs" data-id='+obj["userlist"][index]['userid']+' data-toggle="modal" data-target="#changeUserInfo"><span class="glyphicon glyphicon-pencil"></span>修改</button></div></div>';
									$("#UpdateUserBody").append($new_user_list);
								}
							}   		
               }
             }); 
		});
		
		$("#delete_user_select_all").change(function(){
				if($("#delete_user_select_all").is(':checked'))
				{
					$("input[type='checkbox']").prop("checked",true);
				}
				else
				{
					$("input[type='checkbox']").prop("checked",false);
				}
			});
			
		$("#delete_selected_user").click(function(){
			var $userList = [];
			var $useridlist = {};
			$.each($("input:checkbox[name='delete_department_name']:checked"),function(){
				$userList.push($(this).val());
			});
			$useridlist["useridlist"] = $userList;
			$.ajax({
                    type: 'post',
                    url:"delete_department_list_name.php",
					contentType:"application/json;charset=utf-8",
					data:JSON.stringify($useridlist),
					dataType:"JSON",
                    async:true,
                    success: function (data) { 
						if(parseInt(data.errcode) == 0)
							{
								alert("删除成功");
							} 
							else
							{
								alert("删除失败");
							} 
               }
             }); 			
		});
		
		$("#update_user_info").click(function(){
			 $XM = $("#update_user_xm").val();
			 $SJ = $("#update_user_sj").val();
			 $ID = $("#update_user_id").val();
			
			if($XM.length == 0)
			{
					alert("姓名不能为空");
					return false;
			}

			if($SJ.length == 0)
			{
					alert("手机不能为空");
					return false;
			}
			
			var $userInfo = {"userid":$ID,"name": $XM,"mobile":$SJ};
			
			$.ajax({
                    type: 'post',
                    url:"update_user_info.php",
					contentType:"application/json;charset=utf-8",
					data:JSON.stringify($userInfo),
					dataType:"JSON",
                    async:true,
                    success: function (data) { 
						if(parseInt(data.errcode) == 0)
							{
								alert("更新成功");
							} 
							else
							{
								alert("更新失败");
							} 
               }
             }); 
		});
		
		$("#add_new_department").click(function(){
				$XM = $("#DepartmenName").val();
				if($XM.length == 0)
				{
					alert("部门名称不能为空");
					return false;
				}
				var $departmentInfo = {"name":$XM,"parentid": 1};
				
				$.ajax({
                    type: 'post',
                    url:"create_departmet.php",
					contentType:"application/json;charset=utf-8",
					data:JSON.stringify($departmentInfo),
					dataType:"JSON",
                    async:true,
                    success: function (data) { 
						if(parseInt(data.errcode) == 0)
							{
								alert("添加成功");
							} 
							else
							{
								alert("添加失败");
							} 
               }
             }); 

			});
			
	$("#deleleDepartmentBtn").click(function(){
			var $ID = $("#delete_department_ID").val();
				 $.ajax({
                    type: 'get',
                    url:"delete_department.php",
					data:"ID="+$ID,
                    async:true,
                    success: function (data) { 
							var obj = jQuery.parseJSON(data);
							
							if(parseInt(obj.errcode) == 0)
							{
								alert("删除成功");
							}  
							else
							{
								alert("删除失败");
							}
					}
             }); 
		});

    $('#changeUserInfo').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId); 

                      $("#update_user_xm").val($("div.UpdateUserDiv#"+modalId).children("div").eq(1).html());
    });
	
	$('#removeDepartment').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId); 
					  
					  $("#delete_department_ID").val(modalId);
    });
});