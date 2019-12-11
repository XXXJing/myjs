var cookieUtil = {
	get: function(name){
		//获取cookie相应的值；
		var cookieName = encodeURIComponent(name) + "=",//对cookie的名字进行编码
			cookieStart = document.cookie.indexOf(cookieName),//获取cookie开始时的位置
			cookieValue = null;

		if(cookieStart > -1){
			var cookieEnd = document.cookie.indexOf(";",cookieStart);
			if(cookieEnd == -1){
				cookieEnd = document.cookie.length;
			};
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length ,cookieEnd));
		}
		return cookieValue;
	},
	set:function(name,value,expires,path,domain,secure){
		//设置cookie
		//name:名字；value：值；expires:失效时间，path:可选URL路劲，domian:域；secure:是否添加secure,布尔值
		var cookieText = encodeURIComponent(name) + "=" +encodeURIComponent(value);
		if(expires instanceof Date){
			cookieText += "; expires="+expires.toGMTString();
		};
		if(path){
			cookieText += "; path="+path;
		};
		if(domain){
			cookieText += "; domain="+domain;
		};
		if(secure){
			cookieText += "; secure="+secure;
		};
		document.cookie = cookieText;
		
	},
	unset:function(name,path,domain,secure){
		//删除指定cookie
		this.set(name,"",new Date(0),path,domain,secure);
	}
};
