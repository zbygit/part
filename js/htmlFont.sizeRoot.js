var nowRem;
function resetSize() {
    var vHeight = document.documentElement.clientHeight;//委托获取浏览器可视窗口高
    var vWidth = document.documentElement.clientWidth;//委托获取浏览器可是窗口宽
    // console.log("高"+vHeight);//这个数据是 浏览器可视窗口宽高 随拖动变化
    // console.log("宽"+vWidth);

    nowRem = parseInt(vWidth / 375 * 10);  //根据iphone6设置字体大小
    // console.log(nowRem);
    var body=document.getElementsByTagName("body")[0];
    var html=document.getElementsByTagName("html")[0];
    html.style.fontSize = nowRem +"px";  //设置自定义字体大小  提示 font-Size=1rem 注意大小写
    body.style.height = vHeight + "px";  //通过变量接受 拼接 +“px”
    //注意这里body的高设置成了可视窗口的高，body的高不在没有内容就是默认0的状态了。

}
resetSize();//一开始就触发一次
window.onresize=function(){  //这段必不可少 它绑定了window 大小调整 也就是说每次window有变化都会触发里面的
    resetSize();//封装 命名触发它
};
