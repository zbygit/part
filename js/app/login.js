			var userCookie = $.cookie("userCookie");
			var userCookieArry = userCookie == "null" || userCookie == undefined ? [] : JSON.parse(userCookie);
			console.log(userCookieArry);
			//登录
			$("#login").click(function() {
				var userName = $("#userName");
				var pass = $("#password");
				var canLogin=false,hasUser = false;
				//判断是否输入内容

				if(Fun.regTest(userName, 4).booleans == true) {
					if(Fun.regTest(pass, 5).booleans == true) {
						//判断是否存在

						if(userCookieArry.length > 0) {
							for(var i = 0; i < userCookieArry.length; i++) {
								//判断用户存在情况
								if(userCookieArry[i].regPhone == userName.val()) {
									hasUser=true;
									//判断密码是否正确
									if(userCookieArry[i].pass == pass.val()) {

										var  infoIndex=i;
										canLogin=true;
										for(var i = 0; i < userCookieArry.length; i++) {
											if (i==infoIndex) {
												userCookieArry[i].currentLogin=true;
											} else {
												userCookieArry[i].currentLogin=false;
											}
										}
										
								
										$.cookie("userCookie", JSON.stringify(userCookieArry), {
												expires: 7 ,path:"/" 
										});
									
										layer.msg('登录成功，即将进入首页', {
												icon: 16,
												time: 2000,
												offset: "c"
											});
											setTimeout(function() {
												window.open("../index/index.html", "_self");
											}, 2000);

									} 
								} 
							}
							
							//判断用户是否存在于数据中
							
								if(!hasUser) {
									layer.msg('您尚未注册，请尽快进行注册', {
										icon: 2,
										time: 3000,
										offset: "c"
									});
									return;
								}

								if(!canLogin) {
									layer.msg('密码输入有误，请重新输入', {
										icon: 2,
										time: 3000,
										offset: "c"
									});
									return;

								}

						} else {
							layer.msg("您尚未注册，请尽快注册", {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}
					} else {
						layer.msg(Fun.regTest(pass, 5).msg, {
							icon: 2,
							time: 3000,
							offset: "c"
						});
					}

				} else {
					layer.msg(Fun.regTest(userName, 4).msg, {
						icon: 2,
						time: 3000,
						offset: "c"
					});
				}

			})
	
				//设置密码查看
				$(".look").click(function() {
				if($(this).attr("click") == "0") {
					$(this).css({
						"background": "url(../../image/yanj.png)center no-repeat",
						"background-size": "auto 1.5rem"
					});
					$(this).siblings().attr("type", "text");
					$(this).attr("click", "1");
				} else {
					$(this).css({
						"background": "url(../../image/yanj_b.png)center no-repeat",
						"background-size": "auto 1.5rem"
					});
					$(this).siblings().attr("type", "password");
					$(this).attr("click", "0");

				}

			})
		//找回密码
		$("#findPwd").click(function  () {
			window.open("Repassword.html","_self");
		})
			$("#reg").click(function  () {
			window.open("register.html","_self");
		})