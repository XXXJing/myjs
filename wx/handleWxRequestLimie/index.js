/**
* @description 默认超时时间和最大超时时间都是 60s
 request、uploadFile、downloadFile 的最大并发限制是 10 个
 网络请求的 referer header 不可设置。其格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，
 其中 {appid} 为小程序的 appid，
 {version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本
 ，版本号为 devtools 表示为开发者工具，其余为正式版本。
 小程序进入后台运行后（非置顶聊天），如果 5s 内网络请求没有结束，会回调错误信息 fail interrupted；在回到前台之前，网络请求接口调用都会无法调用
*  参考链接https://blog.csdn.net/weixin_34010949/article/details/88803141
* */
// 解决思路
// 达到并发限制数量之后，延迟之后的请求，待之前的请求结束，再去发送之前延迟的请求
const handleWxRequestLimit = (() => {
    // 设置一个闭包作为标记当前并发请求的个数
    let count = 0;
    // 请求完成以后释放当前请求的的标记方法
    const counter = () => {
        count --;
    };
    return function (fn) {
        // 判断当前当前请求的个数
        if(count < 10) {
            count ++;
            // 执行释放标记的回调
            fn(counter);
        } else {
            setTimeout(handleWxRequestLimit.bind(null, fn), 300)
        }
    }
})();


// 模拟请求事件
const request = (fn) => {
    setTimeout(() => {
        console.log(new Date().getTime().toString().slice(-4));
        fn()
    }, 2000)
};
const requestList = Array(20).fill(1);

requestList.map(() => handleWxRequestLimit(request));
