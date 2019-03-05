/*验证表单输入插件*/
	//验证用户名是否少于三位
	function verify_user(){
		var verify_submit=false;
		var x = document.getElementById("user");
		if (x.value.length<3) {
			document.getElementById("error-user").innerText="×用户名长度不得小于三位!";
			document.getElementById("error-user").style.color="red";
		}else{
			document.getElementById("error-user").innerText="账号OK√";
			document.getElementById("error-user").style.color="green";
			verify_submit=true;
		}
		return verify_submit;

	}
	//验证密码是否少于六位
	function verify_password(){
		var verify_submit=false;
		var y = document.getElementById("password");
		if (y.value.length<6) {
			document.getElementById("error-password").innerText="×密码长度不得小于六位!";
			document.getElementById("error-password").style.color="red";
		}else{
			document.getElementById("error-password").innerText="密码OK√";
			document.getElementById("error-password").style.color="green";
			verify_submit=true;
		}
		return verify_submit;
	}
	//判断用户名和密码的是否为真，为真可以提交，为假则无法提交
	function verify_submit() {
	var verify_submit = verify_user() && verify_password();
	return verify_submit;
	}