/*验证表单输入插件*/

//window.onload事件会在页面加载完成后触发。
window.onload=function(){
	//获取btn验证按钮存入bt变量
	var bt=document.getElementById("btn");
	//获取sjh输入框存入user_sjh变量
	var user_sjh=document.getElementById("sjh");
	//bt单击事件，单击触发函数
	bt.onclick=function(){
	//将用户输入框的值取出保存到变量user_call中
	var user_call = user_sjh.value;
	//判断表达式，是否为正确的手机号
	if(!(/^1[34578]\d{9}$/.test(user_call))){
				//获取error-phone-number给用户提示是否正确
		        document.getElementById("error-phone-number").innerText="×手机号不正确，请查正!";
				document.getElementById("error-phone-number").style.color="red";
			}else{
				//获取error-phone-number给用户提示是否正确
				document.getElementById("error-phone-number").innerText="手机号OK√";
				document.getElementById("error-phone-number").style.color="green";
				//用’？‘get传值给send.php
				window.location.href='send.php?type=' + user_call;
		}
	}
}




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

	//验证手机号是否正确
	function verify_checkPhone(){ 
	    var sjh = document.getElementById('sjh').value;
	    if(!(/^1[34578]\d{9}$/.test(sjh))){ 
	        document.getElementById("error-phone-number").innerText="×手机号不正确，请查正!";
			document.getElementById("error-phone-number").style.color="red";
		}else{
			document.getElementById("error-phone-number").innerText="手机号OK√";
			document.getElementById("error-phone-number").style.color="green";
			verify_submit=true;
		}
	    return verify_submit;
	}

	//判断用户名和密码以及手机号是否为真，为真可以提交，为假则无法提交
	function verify_submit() {
	var verify_submit = verify_user() && verify_password() && verify_checkPhone();
	return verify_submit;
	}