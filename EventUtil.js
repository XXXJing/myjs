var EventUtil = {};
EventUtil.addHandler=function(element,type,handler){
//添加事件方法
	//element:传入的元素节点
	//tpye:时间类型；
	//handler:函数方法；
	if(element.addEventListener){//能力检测 DOM2级方法
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		//ie8已下版本
		element.attachEvent("on"+type,handler);
	}else{
		//dom0级方法
		element["on"+type] = handler;
	}
};
EventUtil.removeHandler=function(element,type,handler){//删除事件方法
	if(element.removeEventListener){//能力检测 DOM2级方法
		element.removeEventListener(element,type,false);
	}else if(element.detachEvent){
		//ie8已下版本
		element.detachEvent("on"+type,handler);
	}else{
		//dom0级方法
		element["on"+type] = null;
	}
};
EventUtil.getEvent=function(event){
	//获取event对象的引用；跨浏览器能力检测
	return event?event:window.event;
};
EventUtil.getTarget=function(event){
	//获取事件目标
	return event.target||event.srcElement;
}
EventUtil.preventDefault=function(event){
	//取消事件默认行为
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
};
EventUtil.stopPropagation=function(){
	//阻止事件流
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.canceBubble = true;
	}
}