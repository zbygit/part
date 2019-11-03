$(".back").click(function () {
	window.History.back();
})
//获取json数据
var userCookieArry = ($.cookie('userCookie') == "null") || ($.cookie('userCookie') == undefined) ? [] : JSON.parse($.cookie('userCookie'));
var currentUserIndex = null;
for (let i = 0; i < userCookieArry.length; i++) {
	if (userCookieArry[i].currentLogin == true) {
		currentUserIndex = i;
		var html =' <li><span class="item">用户头像</span><span  class="info"><img  id="userIcon" src="' + userCookieArry[i].userIcon + '" /></span></li>'+
			'<li><span class="item">昵称</span><input type="text" placeholder="用户昵称" class="info"   value="' + userCookieArry[i].nickname + '" /></li>' +
			'<li><span class="item">个性签名</span><input type="text" placeholder="个性签名" class="info"   value="' + userCookieArry[i].signature + '" /></li>' +
			'<li><span class="item">真实姓名</span><input type="text" placeholder="真实姓名" class="info"   value="' + userCookieArry[i].username + '" /></li>' +
			'<li><span class="item">年龄</span><input type="text"  id="year" placeholder="真实姓名"readonly class="info"   value="' + userCookieArry[i].age + '" /></li>' +
			'<li><span class="item">性别</span><input type="text" placeholder="身高" class="info"   value="' + userCookieArry[i].sex + '" /></li>' +
			'<li><span class="item">身高</span><input type="text" placeholder="身高" class="info"   value="' + userCookieArry[i].height + '" /></li>' +
			'<li><span class="item">手机号</span><input type="text" placeholder="手机号" class="info"   value="' + userCookieArry[i].regPhone + '" /></li>' +
			'<li><span class="item">所在学校</span><input type="text" placeholder="所在学校" class="info"   value="' + userCookieArry[i].school + '" /></li>' +
			'<li class="submit"><div id="submit">提交</div></li>'
		$("#userInfo").append(html);
	}

}


$("#userIcon").click(function (params) {
	$("#userImgSet").fadeIn(1000);
		for (var i = 0; i < $(".userIcon").length; i++) {
			if($($(".userIcon")[i]).attr("src") == userCookieArry[currentUserIndex].userIcon){
			console.log(i);
			$($(".userIcon")[i]).addClass("imgCurrent").siblings().removeClass("imgCurrent");
		}
		
	}

})
$("#exit").click(function (params) {
	$("#userImgSet").fadeOut(1000);
})

$("#add").click(function (params) {
	$("#userImgSet").fadeOut(1000);
	$("#userIcon").attr("src", $(".imgCurrent").attr("src"));
})
// 头像选择

$(".userIcon").click(function () {
	$(this).addClass("imgCurrent").siblings().removeClass("imgCurrent");
})
var year = $.selectDate("#year", {
	start: 1949,
	end: 2200,
	select: [2012, 2, 15]
}, function (data) {
	var years = new Date().getFullYear() - data.year;
	if (years <= 0) {
		layer.msg("您在跟我开玩笑吗？", {
			icon: 2,
			time: 2000,
			offset: "c"
		});
	} else {
		$("#year").val(years);
	}
});

$("#submit").click(function () {
	userCookieArry[currentUserIndex].userIcon = $("#userIcon").attr("src"),
		userCookieArry[currentUserIndex].nickname = $($(".info")[1]).val(),
		userCookieArry[currentUserIndex].signature = $($(".info")[2]).val(),
		userCookieArry[currentUserIndex].username = $($(".info")[3]).val(),
		userCookieArry[currentUserIndex].age = $($(".info")[4]).val(),
		userCookieArry[currentUserIndex].sex = $($(".info")[5]).val(),
		userCookieArry[currentUserIndex].height = $($(".info")[6]).val(),
		userCookieArry[currentUserIndex].Mobilephone = $($(".info")[7]).val(),
		userCookieArry[currentUserIndex].school = $($(".info")[8]).val()
	layer.msg("个人信息编辑成功", {
		icon: 1,
		time: 3000,
		offset: "c"
	});

	$.cookie("userCookie", JSON.stringify(userCookieArry), {
		expires: 7, path: "/"
	});
	setTimeout(function () {
		window.open("my.html", "_self");
	}, 1500)
})