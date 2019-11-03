var userCookieArry = ($.cookie('userCookie') == "null") || ($.cookie('userCookie') == undefined) ? [] : JSON.parse($.cookie('userCookie'));
var friendIcon, myIcon;
for (let i = 0; i < userCookieArry.length; i++) {
	if (userCookieArry[i].currentLogin == true) {
		myIcon = userCookieArry[i].userIcon;
	}
}

var pos = Fun.getUrl();
var currentFriend = userCookieArry[pos.itemindex];
friendIcon = currentFriend.userIcon;

$(".title").html(currentFriend.nickname);
var msg = currentFriend.msg;
var html = "";
if (msg != []) {
	for (var i = 0; i < msg.length; i++) {

		var msgHtml = "";

		if (msg[i].msgArry[0] != undefined) {
			msgHtml += '<div class="friendMsgArea msgItemlist"><img src="' + friendIcon + '" class="friendIcon" /><div class="friendMsg"><div class="pointleft"></div><div class="text">' + msg[i].msgArry[0] + '</div></div></div>';
		}

		if (msg[i].msgArry[1] != undefined) {
			msgHtml += '<div class="myMsgArea msgItemlist"><img src="' + myIcon + '" class="myIcon" /><div class="myMsg"><div class="pointright"></div><div class="text">' + msg[i].msgArry[1] + '</div></div></div>';
		}

		html += '<div class="msgItem"><p class="timer">' + msg[i].timer + '</p><div class="itemText">' + msgHtml + '</div></div>';

	}
	$("#content").append(html);
}

var gifShow = 0;
$("#git").click(function () {
	if (gifShow % 2 == 0) {
		var gifIcon = "";
		for (var i = 1; i <= 142; i++) {
			gifIcon += '<img class="gifIcon" gifText="' + i + '" src="../../image/gif/1 (' + i + ').gif"/>';
		}
		$("#gifIcon").append(gifIcon);
		gifShow = 1;
		$("#gifIcon").fadeIn(100);
	} else {
		gifShow = 0;
		$("#gifIcon").fadeOut(100);
	}
})
$(document).keydown(function () {
	$("#gifIcon").fadeOut(100);
	gifShow = 0;

})
$("#text").focus(function () {
	gifShow = 0;

	$("#gifIcon").fadeOut(100);
})

$(document).on("click", ".gifIcon", function () {
	$("#text").val($("#text").val() + "[" + $(this).attr("gifText") + "]");
})
//发送消息
var oldTime = 0,
	nowTime = null;
$(".send").click(function () {
	nowTime = new Date().getTime();

	if ($("#text").val() == "") {
		return;
	}
	var textStr = "";
	var reg = /\[[0-9]+\]/img
	textStr = $("#text").val().replace(/\[[0-9]+\]/img, function (e) {
		var indexIcon = e.split('[')[1].split(']')[0];
		return '<img class="git" src="../../image/gif/1 (' + indexIcon + ').gif"/>'
	});
	var msgAreaHtml = "", html = "", times = "";
	if ($(this).attr("form") == "my") {
		var myStr = textStr
		html = '<div class="myMsgArea msgItemlist"><img src="' + myIcon +
			'" class="myIcon" /><div class="myMsg"><div class="pointright"></div><div class="text my">' + myStr + '</div></div></div>';
	} else {
		var fStr = textStr
		html = '<div class="friendMsgArea msgItemlist"><img src="' + friendIcon +
			'" class="friendIcon" /><div class="friendMsg"><div class="pointleft"></div><div class="text friend">' + fStr + '</div></div></div>';
	}
	if (nowTime - 60000 > oldTime) {
		times = new Date(nowTime);
		times =(times.getHours()>9?times.getHours():"0"+times.getHours()) + ':' + (times.getMinutes()>10?times.getMinutes():"0"+times.getMinutes());
		msgHtml = '<div class="msgItem"><p class="timer">' + times + '</p><div class="itemText">' + html + '</div></div>';
		$("#content").append(msgHtml);

	} else {
		times = "";
		$(".msgItem:last-of-type").children(".itemText").append(html);
	}
	currentFriend.msg.push({
		"timer": times,
		"msgArry": [fStr, myStr]
	})




	$("#gifIcon").fadeOut(100);
	gifShow = 0;
	$("#text").val("");
	oldTime = nowTime;
	//判断内容高估是否大于可是高度
	if ($("#content").height() > $(window).height()) {
		$(window).scrollTop($("#content").height());
	}
	$.cookie("userCookie", JSON.stringify(userCookieArry), {
		expires: 7, path: "/"
	});

	console.log(userCookieArry);

})