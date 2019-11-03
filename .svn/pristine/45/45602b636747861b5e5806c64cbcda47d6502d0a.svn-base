			//获取注册用户
			var userCookie = $.cookie("userCookie");
			var userCookieArry = userCookie == "null" || userCookie == undefined ? [] : JSON.parse(userCookie);
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
							verifyArry[1] = false;
								$(this).parent().css("border-color", "red");
							layer.msg(Fun.regTest($(this), 5).msg, {
								icon: 2,
								time: 3000,
								offset: "c"
							});
						}
						break;
					case "2":
						if(Fun.regTest($(this), 5).booleans == true) {
							if($(this).val() === $("#password").val()) {
								verifyArry[2] = true;
								$(this).parent().css("border-color", "green");
							} else {
									$(this).parent().css("border-color", "red");
								verifyArry[2] = false;
								layer.msg("两次密码不一致", {
									icon: 2,
									time: 3000,
									offset: "c"
								});
							}
						} else {
							verifyArry[2] = false;
								$(this).parent().css("border-color", "red");
							layer.msg(Fun.regTest($(this), 5).msg, {
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
			//密码查看
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

			// 随机生成用户名
			function nickname() {
				var name = "";
				//字符
				var codeChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				];
	
				for(var i = 0; i < 8; i++) {
					var charNum = Math.floor(Math.random() * 52);
					name += codeChars[charNum];
				}
				return name;
			}
			//注册
			$("#reg").click(function() {
				//判断输入内容是否正确
				$.each(verifyArry, function(index, item) {
					//内容不正确
					if(item == false) {
						layer.msg("请正确填写信息", {
							icon: 2,
							time: 3000,
							offset: "c"
						});
						return;
					}
				});
				//内容正确
				var userObj = {
					"userIcon":"../../image/friendIcon/png_01.png",
					"pass": $("#password").val(), //用户密码
					"nickname":nickname(),    //用户昵称
					"signature":"未设定",	//个性签名
					"username":"未设定",   //用户真实姓名
					"age":"未设定",		//年龄
					"sex":"未设定",   //性别
					"height":"未设定",  //身高
					"regPhone": $("#userName").val(),  //注册手机号
					"school":"未设定",   //所在学校
					"currentLogin":false , //当前登录
					"friend":false,
					"msg":[]
				}

				//判断是否存在注册信息数据
				if(userCookieArry.length > 0) {
					//判断账号是否存在
					for(var i = 0; i < userCookieArry.length; i++) {
						//用户已存在
						if(userCookieArry[i].regPhone == $("#userName").val()) {
							layer.msg('该账号已注册，您可直接登录', {
								icon: 7,
								time: 3000,
								offset: 'c'
							});
							return;
						}
					}
					userCookieArry.push(userObj);
					$.cookie("userCookie", JSON.stringify(userCookieArry), {
							expires: 7 ,path:"/"
					});
					layer.msg('您已注册成功，正在跳转...', {
						icon: 1,
						time: 3000,
						offset: 'c'
					});
					setTimeout(function() {
						window.open("login.html", "_self");
					}, 3000)
				} else {
					userCookieArry.push(userObj);
					$.cookie("userCookie", JSON.stringify(userCookieArry), {
							expires: 7 ,path:"/"
					});
					layer.msg('您已注册成功，正在跳转...', {
						icon: 1,
						time: 3000,
						offset: 'c'
					});
					setTimeout(function() {
						window.open("login.html", "_self");
					}, 3000)
				}
			})