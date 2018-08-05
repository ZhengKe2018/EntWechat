$(function(){

		window.onload = function(){
			$("div[aria-controls='MyInfo']").trigger("click");
		};

		/*查看个人信息*/
	    $("div[aria-controls='MyInfo']").click(function(){
	    			$.ajax({
                    type: 'get',
                    url:"checkInfo.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		$("#XM").val(obj[0]['XM']);
                    		$("#XB").find("option:selected").text(obj[0]['XB']);
                    		$("#MZ").val(obj[0]['MZ']);  
                    		$("#SFZH").val(obj[0]['SFZH']); 
                    		$("#JG").val(obj[0]['JG']); 

                    		$("#HJSZD").val(obj[0]['HJSZD']);
                    		$("#BYYX").val(obj[0]['BYYX']);
                    		$("#ZGXL").find("option:selected").text(obj[0]['ZGXL']);
                    		$("#ZGXW").find("option:selected").text(obj[0]['ZGXW']);
                    		$("#LX").find("option:selected").text(obj[0]['LX']);

                    		$("#ZZMM").find("option:selected").text(obj[0]['ZZMM']);
                    		$("#HF").find("option:selected").text(obj[0]['HF']);
                    		$("#SXZY").val(obj[0]['SXZY']);
                    		$("#ZYZW").val(obj[0]['ZYZW']);
                    		$("#ZGZS").val(obj[0]['ZGZS']);
                    		$("#GZDW").val(obj[0]['GZDW']);

                    		$("#ZW").val(obj[0]['ZW']);
                    		$("#LXSJ").val(obj[0]['LXSJ']);
                    		$("#CSNY").val(obj[0]['CSNY']);
                    		$("#BYSJ").val(obj[0]['BYSJ']);
                    		$("#YX").val(obj[0]['YX']);

               }
        });             
      });

	/*填充个人基本信息*/
	$("#saveInfo").click(function(){
		var $XM = $("#XM").val();
		var $XB = $("#XB").find("option:selected").text();
		var $MZ = $("#MZ").val();
		var $SFZH = $("#SFZH").val();
		var $JG = $("#JG").val();

		var $HJSZD = $("#HJSZD").val();
		var $BYYX = $("#BYYX").val();
		var $ZGXL = $("#ZGXL").find("option:selected").text();
		var $ZGXW = $("#ZGXW").find("option:selected").text();
		var $LX = $("#LX").find("option:selected").text();

		var $ZZMM = $("#ZZMM").find("option:selected").text();
		var $HF = $("#HF").find("option:selected").text();
		var $SXZY = $("#SXZY").val();
		var $ZYZW = $("#ZYZW").val();
		var $ZGZS = $("#ZGZS").val();

		var $GZDW = $("#GZDW").val();
		var $ZW = $("#ZW").val();
		var $LXSJ = $("#LXSJ").val();
		var $CSNY = $("#CSNY").val();
		var $BYSJ = $("#BYSJ").val();
		var $YX = $("#YX").val();

		if($XM.length == 0)
		{
			alert("姓名不能为空");
			return false;
		}

		if($MZ.length == 0)
		{
			alert("民族不能为空");
			return false;
		}

		if($SFZH.length == 0)
		{
			alert("身份证不能为空");
			return false;
		}

		if($JG.length == 0)
		{
			alert("籍贯不能为空");
			return false;
		}

		if($HJSZD.length == 0)
		{
			alert("户籍所在地不能为空");
			return false;
		}

		if($BYYX.length == 0)
		{
			alert("毕业院校不能为空");
			return false;
		}

		if($ZZMM.length == 0)
		{
			alert("政治面貌不能为空");
			return false;
		}

		if($SXZY.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}

		if($ZYZW.length == 0)
		{
			alert("专业职务不能为空");
			return false;
		}

		if($ZGZS.length == 0)
		{
			alert("资格证书不能为空");
			return false;
		}

		if($GZDW.length == 0)
		{
			alert("目前工作单位不能为空");
			return false;
		}

		if($ZW.length == 0)
		{
			alert("职务不能为空");
			return false;
		}

		if($LXSJ.length == 0)
		{
			alert("联系手机不能为空");
			return false;
		}

		if($YX.length == 0)
		{
			alert("邮箱不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"saveInfo.php",
                    data:"XM="+$XM+"&XB="+$XB+"&MZ="+$MZ+"&SFZH="+$SFZH+"&JG="+$JG+"&HJSZD="+$HJSZD+"&BYYX="+$BYYX+"&ZGXL="+$ZGXL+"&ZGXW="+$ZGXW+"&LX="+$LX+"&ZZMM="+$ZZMM+"&HF="+$HF+"&SXZY="+$SXZY+"&ZYZW="+$ZYZW+"&ZGZS="+$ZGZS+"&GZDW="+$GZDW+"&ZW="+$ZW+"&LXSJ="+$LXSJ+"&CSNY="+$CSNY+"&BYSJ="+$BYSJ+"&YX="+$YX,
                    async:true,
                    success: function (data) {    
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    			alert("提交成功");
                    		else
                    			alert("提交失败");
               }
        });    

	});

	$("#InfoNext").click(function(){
		$("div[aria-controls='SchoolResume']").trigger("click");
	});

	$("#SchoolResumeNext").click(function(){
		$("div[aria-controls='WorkResume']").trigger("click");
	});
	$("#MyResumeNext").click(function(){
		$("div[aria-controls='MyFamily']").trigger("click");
	});
	$("#MyFamilyNext").click(function(){
		$("div[aria-controls='MySkill']").trigger("click");
	});
});