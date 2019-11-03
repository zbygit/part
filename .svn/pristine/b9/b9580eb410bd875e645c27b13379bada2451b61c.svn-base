var jsonData = Fun.getJson("friend.json");
var userCookieArry = ($.cookie('userCookie') == "null") || ($.cookie('userCookie') == undefined) ? [] : JSON.parse($.cookie('userCookie'));
var pos = Fun.getUrl();
var friendInfo = userCookieArry[pos.itemIndex];
var type = pos.type;
console.log(type);
var bottomHtml = "";
if (type == "look") {
	bottomHtml = '<div id="btn"><div id="send" itemindex="' + pos.itemIndex + '">聊一聊</div><div id="del">删除好友</div></div>';
} else {
	bottomHtml = '<div id="btn"><div id="add" itemindex="' + pos.itemIndex + '">加为好友</div></div>';
}


var contentHtml = '<header><div id="pageTitle"><div class="back"></div><div class="title">好友信息</div></div><div id="top"><img src="' + friendInfo.userIcon +
	'" class="friendIcon" /><div id="friendText"><div id="friendName">' + friendInfo.nickname +
	'</div><div id="signature">' + friendInfo.signature + '</div></div></div></header>' +
	'<ul id="userInfo">' +
	'<li><span class="item">真实姓名</span><span class="info">' + friendInfo.username + '</span></li>' +
	'<li><span class="item">年龄</span><span class="info">' + friendInfo.age + '</span></li>' +
	'<li><span class="item">性别</span><span class="info">' + friendInfo.sex + '</span></li>' +
	'<li><span class="item">身高</span><span class="info">' + friendInfo.height + '</span></li>' +
	'<li><span class="item">所在学校</span><span class="info">' + friendInfo.school + '</span></li></ul>' + bottomHtml;
$("body").html(contentHtml);
$(".back").click(function () {
	window.open("msg.html", "_self");
})
$("#send").click(function () {
	window.open("chat.html?itemindex=" + $(this).attr("itemindex"), "_self");
})
$("#del").click(function () {
	friendInfo.friend = false;
	$.cookie("userCookie", JSON.stringify(userCookieArry), {
		expires: 7, path: "/"
	});
	layer.msg('<span style="font-size:1.8rem;">好友已经删除</span>', {
		icon: 1,
		offset: "c",
		shift: 0,
		time: 3000,
		scrollbar: false
	});
	setTimeout(function () {
		window.open("msg.html", "_self");
	}, 3000)

})
$("#add").click(function (params) {
	friendInfo.friend = true;
	$.cookie("userCookie", JSON.stringify(userCookieArry), {
		expires: 7, path: "/"
	});
	layer.msg('<span style="font-size:1.8rem;" >好友添加成功</span>', {
		icon: 1,
		offset: "c",
		shift: 0,
		time: 3000,
		scrollbar: false
	});
	setTimeout(function () {
		window.open("msg.html", "_self");
	}, 3000)
})