var myAjax = {
	createXHR:function(){
		if(typeof XMLHttpRequest !=undefined){

			return new XMLHttpRequest();
		}else if(typeof ActiveXobject !=undefined){
			//ie情况下创建XHR
			if( typeof arguments.callee.activeXString !="string"){
				var versions = ["MXXML2.XMLHttp.6.0","MXXML2.XMLHttp.3.0","MXXML2.XMLHttp"],
				i,len;
				for(i = 0,len = versions.length;i<len;i++){
					try{
						new ActiveXobject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					}catch(error){
						// console.log(error.messgae);
					}
				}
			}
			return new ActiveXobject(arguments.callee.activeXString);
		}else{
			throw new Errow("NO XHR object available");
		}
	},
	ajax:function(options){
		xhr = this.createXHR();
		var params = getParams(options.data);
		options.async = options.async||true;
		if(options.type == "GET"){
			//get请求
			xhr.open(options.type,options.url+"?"+params,options.async);
			xhr.send(null);
		}else if(options.type == "POST"){
			//post请求
			xhr.open(options.type,options.url,options.async);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(params);
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status>=200 && xhr.status < 300|| xhr.status == 304){
					options.success(xhr.responseText);
				}
			}
		}
		function getParams(data){
			var arr = [];
			for(var key in data){
				//对参数进行编码
				arr.push(encodeURIComponent(key) + "=" +encodeURIComponent(data[key]));
			}
			return arr.join("&");
		}

	}
};