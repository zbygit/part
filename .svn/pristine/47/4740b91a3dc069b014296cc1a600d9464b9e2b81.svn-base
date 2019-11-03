$(function () {

	// 获取注册用户信息
	var myIcon; //当前登录者头像
	var userArry = [];//所有注册用户姓名及头像
	var userNamePYInfo = [];
	var userCookieArry = ($.cookie('userCookie') == "null") || ($.cookie('userCookie') == undefined) ? [] : JSON.parse($.cookie('userCookie'));

	for (let i = 0; i < userCookieArry.length; i++) {
		if (userCookieArry[i].currentLogin == true) {
			myIcon = userCookieArry[i].userIcon;
		} else {
			// var REG = /^[\u4e00-\u9fa5]+$/
			// if (REG.test(userCookieArry[i].nickname)) {
				userArry.push([userCookieArry[i].userIcon, userCookieArry[i].nickname, i,userCookieArry[i].friend]);
			// }

		}
	}

	// 循环用户数组，生成userNamePYInfo数组
	/**
	 * 0 ---首字母
	 * 1 -- 数据cookie下标
	 * 2 -- 用户头像
	 * 3 -- 用户昵称
	 */
	for (let i = 0; i < userArry.length; i++) {
		userNamePYInfo.push([makePy(userArry[i][1].charAt(0).toUpperCase())[0], userArry[i][2], userArry[i][0], userArry[i][1], userArry[i][3]]);

	}


	userNamePYInfo.sort();
console.log(userNamePYInfo);
	var friendLists = "";//好友列表
	var html = "";//整体模块
	for (let i = 0; i < userNamePYInfo.length; i++) {
		html = "";
		friendLists = "";
		if(userNamePYInfo[i][4]==true){
		
			friendLists += '<li class="friendItem" type="look" itemIndex="' + userNamePYInfo[i][1] + '"><img src="' + userNamePYInfo[i][2] + '" class="letterIcon" />' +
				'<p class="letterName">' + userNamePYInfo[i][3] + '</p></li>';
			html += '<div class="friendList"><div class="letterPos">' + userNamePYInfo[i][0] + '</div>' +
				'<ul class="letterFriend">' + friendLists + '</ul></div>';
	
		}	
		$("#friend").append(html);
	}
	for (let i = 0; i < $(".letterPos").length; i++) {
		if ($($(".letterPos")[i]).html() == $($(".letterPos")[i + 1]).html()) {
			$($(".letterPos")[i + 1]).hide();
		}

	}
	letterList = "",
		letterNum = 0;
	//设置字母
	for (var i = 0; i < userNamePYInfo.length; i++) {
		if(userNamePYInfo[i][4]==true){
		letterNum++;
		letterList += '<li>' + userNamePYInfo[i][0] + '</li>';
	}
	}
	// 消息点击数据加载
	var  msgLiist="";
		for (let i = 0; i < userCookieArry.length; i++) {
		if (userCookieArry[i].currentLogin != true) {
			if (userCookieArry[i].msg.length>0) {
				var Lasetext=userCookieArry[i].msg[userCookieArry[i].msg.length-1].msgArry[0]==null?userCookieArry[i].msg[userCookieArry[i].msg.length-1].msgArry[1]:userCookieArry[i].msg[userCookieArry[i].msg.length-1].msgArry[0];
				var timer="";
				var msgA=userCookieArry[i].msg;
				for (let i = msgA.length-1; i >=0; i--) {
					if (msgA[i].timer !="") {
						timer=msgA[i].timer;
						break;
					}
					
				}
				msgLiist+='<li itemindex="'+i+'"><img src="'+userCookieArry[i].userIcon+'"  class="friendIcon" /><div class="msgInfo"><div class="friendName">'+userCookieArry[i].nickname+'</div><div class="msgText">'+Lasetext+'</div></div><div class="sendTime">'+timer+'</div></li>'
			
			}
		}
		
	}
	$("#msgList").html(msgLiist);

	$("#msgList>li").click(function () {
		window.open("chat.html?itemindex=" + $(this).attr("itemindex"), "_self");
	})
	//设置字母区域高度
	$(".letter").height($(window).height() - $("header").height() - $("#searchFriend").height() - $(".footerArea").height() - 50 + "px");
	$(".letter>li").css("line-height", $(".letter").height() / letterNum + "px");
	$(".letter>li").css("font-size", $(".letter").height() / letterNum + "px");

	$(".letter").html(letterList);
	for (let i = 0; i < $(".letter>li").length; i++) {
		if ($($(".letter>li")[i]).html() == $($(".letter>li")[i + 1]).html()) {
			$($(".letter>li")[i + 1]).hide();
		}

	}
	//判断滚动距离
	var posTOP = [];
	for (var i = 0; i < $(".letterPos").length; i++) {
		posTOP.push($($(".letterPos")[i]).offset().top);
	}

	$('.letter>li').click(function () {
		var page = $(this).index();
		$("letter").html($(this).html());
		$("letter").fadeIn(1000);
		setTimeout(function () {
			$("letter").fadeOut(500);
			$(window).scrollTop(posTOP[page] - $("header").height());
		}, 1000)
	})


	//显示切换
	$(".pageChange").click(function () {
		$($(".contentList")[$(this).index()]).show().siblings().hide();
		$($(".pageChange")[$(this).index()]).addClass("currentPage").siblings().removeClass("currentPage");
	})




	//好友列表点击
	$(".friendItem").click(function () {
		window.open("friendInfo.html?itemIndex=" + $(this).attr("itemIndex")+"&type="+ $(this).attr("type"), "_self");
	})
	$(".changeBtn").click(function () {
		window.open("addFriend.html", "_self");
	})
})