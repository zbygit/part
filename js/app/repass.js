	var userCookie = $.cookie("userCookie");
			var userCookieArry = userCookie == "null" || userCookie == undefined ? [] : JSON.parse(userCookie);
			console.log(userCookieArry);
			var code = "";
			code = Fun.setCode(4, $(".codeNum"));

			$(".codeNum").click(function() {
				code = Fun.setCode(4, $(this));
			});

			//验证输入内容
			var verifyArry = [false, false, false];

			$("input").blur(function() {
				var index = $(this).attr("index");
				switch(index) {
					case "0":
						if(Fun.regTest($(this), 4).booleans == true) {
							verifyArry[0] = true;
							$(this).parent().css("border-color", "green");
						} else {
							verifyArry[0] = false;
							$(this).parent().css("border-color", "red");
							layer.msg(Fun.regTest($(this), 4).msg, {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}
						break;
					case "1":
						if(Fun.regTest($(this), 5).booleans == true) {
							verifyArry[1] = true;
							$(this).parent().css("border-color", "green");
						} else {
							$(this).parent().css("border-color", "red");
							verifyArry[1] = false;
							layer.msg(Fun.regTest($(this), 5).msg, {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}
						break;
					case "2":
						if($(this).val().toLowerCase() == code.toLowerCase()) {
							verifyArry[2] = true;
							$(this).parent().css("border-color", "green");
						} else {
							$(this).parent().css("border-color", "red");
							verifyArry[2] = false;
							code = Fun.setCode(4, $(".codeNum"));
							layer.msg("你输入的验证码不正确", {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}
						break;
					default:
						break;
				}
			})

			$("#login").click(function() {
				var IStrue = true;
				$.each(verifyArry, function(index, item) {
					//内容不正确
					if(item == false) {
						IStrue = false;
					}
				});
				if(IStrue) {

					if(userCookieArry.length > 0) {
						var hasUser = false;
						for(var i = 0; i < userCookieArry.length; i++) {
							if(userCookieArry[i].regPhone == $("#userName").val()) {
								hasUser = true;
								userCookieArry[i].pass = $("#password").val();

								$.cookie("userCookie", JSON.stringify(userCookieArry), {
										expires: 7 ,path:"/"
								});
								layer.msg('密码重置成功，正在跳转至登录页面', {
									icon: 1,
									time: 3000,
									offset: "c"
								});
								setTimeout(function() {
									window.open("login.html", "_self");
								}, 3000)
							}
						}
						if(!hasUser) {
							layer.msg('该手机号尚未注册，请尽快注册', {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}

					} else {
						layer.msg('该手机号尚未注册，请尽快注册', {
							icon: 2,
							time: 3000,
							offset: "c"
						});
					}
				} else {
					layer.msg("请正确填写信息", {
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