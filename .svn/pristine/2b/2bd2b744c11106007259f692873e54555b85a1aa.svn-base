		$(function() {

				//返回钱包页面
				$(".back").click(function() {
					window.open("wallet.html", "_self");
				})

				//验证码
				var code = "";
				//支付密码
				var passArry = [], //设定的密码
					rePassArry = []; //确定密码
				$("#verifyCodes").click(function() {
					code = Fun.setCode(4, $(this));
				});
				//创建对象保存信息
				var person = {
					"userNameTrue": null,
					"userCodeNum": null,
					"payCodePhone": null,
					"payPass": null
				}
				//下一步点击
				$(".next").click(function() {
					var clicks = +$(this).attr("stepIndex");
					switch(clicks) {
						case 0:
							//获取输入框的值
							var page1 = [$("#userNameTrue"), $("#userCodeNum"), $("#payCode")];
							if(Fun.regTest(page1[0], 0).booleans == true) {
								if(Fun.regTest(page1[1], 1).booleans == true) {
									if(Fun.regTest(page1[2], 2).booleans == true) {
										person.userNameTrue = $("#userNameTrue").val();
										person.userCodeNum = $("#userCodeNum").val();
										$(".currentBg").css("width", "50%");
										setTimeout(function() {
											$($(".stepCycle")[1]).addClass("currentStep");
											$($(".infoWrite")[1]).show().siblings().hide();
											$(".prev").html("上一步");
											$(".prev").attr("stepIndex", "1");
											$(".next").attr("stepIndex", "1");
											code = Fun.setCode(4, $("#verifyCodes"));
										}, 1500)
									} else {
										layer.msg(Fun.regTest(page1[2], 2).msg, {
											icon: 2,
											time: 3000,
											offset: "c"
										});
									}
								} else {
									layer.msg(Fun.regTest(page1[1], 1).msg, {
										icon: 2,
										time: 3000,
										offset: "c"
									});
								}

							} else {
								layer.msg(Fun.regTest(page1[0], 0).msg, {
									icon: 2,
									time: 3000,
									offset: "c"
								});
							}

							break;
						case 1:
							var page2 = [$("#payCodePhone"), $("#verifyCodein"), $("#alipayPass")];
							if(Fun.regTest(page2[0], 4).booleans == true) {
								if(page2[1].val().toLowerCase() == code.toLowerCase()) {
									if(Fun.regTest(page2[2], 6).booleans == true) {
										$(".currentBg").css("width", "100%");
										person.payCodePhone = $("#payCodePhone").val();
										setTimeout(function() {
											$($(".stepCycle")[2]).addClass("currentStep");
											$($(".infoWrite")[2]).show().siblings().hide();
											$(".prev").html("上一步");
											$(".prev").attr("stepIndex", "2");
											$(".next").attr("stepIndex", "2");
											$(".next").html("完成");
											$(".next").addClass("complete");

											//设置密码输入框的高度
											$(".payCodeArea li").height($(".payCodeArea li").width() + "px");
											$("#payPassSet").height($(".payCodeArea li").width() + "px");

										}, 1500)
									} else {
										layer.msg(Fun.regTest(page2[2], 6).msg, {
											icon: 2,
											time: 3000,
											offset: "c"
										});
									}
								} else {
									layer.msg("验证码不正确", {
										icon: 2,
										time: 3000,
										offset: "c"
									});
									setTimeout(function() {
										page2[1].val("");
										code = Fun.setCode(4, $("#verifyCodes"));
									}, 1500)

								}

							} else {
								layer.msg(Fun.regTest(page2[0], 4).msg, {
									icon: 2,
									time: 3000,
									offset: "c"
								});
							}

							break;
						case 2:
							var page3 = [passArry.join(""), rePassArry.join("")];
							var regs = /^[0-9]{6}$/
							if(passArry.length != 0 || rePassArry.length != 0) {
								if(regs.test(page3[0]) && regs.test(page3[1]) && page3[0] == page3[1]) {
									person.payPass = page3[0];
									layer.msg("支付宝绑定成功", {
										icon: 1,
										time: 3000,
										offset: "c"
									});

									$.cookie("bindAlipay", JSON.stringify(person), {
											expires: 7 ,path:"/"
									});
									setTimeout(function() {
										window.open("wallet.html", "_self");
									}, 1500)

								} else {
									layer.msg("两次密码输入不一致", {
										icon: 2,
										time: 3000,
										offset: "c"
									});
								}
							} else {
								layer.msg("请输入完整信息", {
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
				//上一步点击
				$(".prev").click(function() {
					var stepindex = +$(this).attr("stepIndex");
					switch(stepindex) {
						case 0:
							window.open("wallet.html", "_self");
							break;
						case 1:
							$($(".stepCycle")[0]).addClass("currentStep").siblings().removeClass("currentStep");
							$(".currentBg").css("width", "0%");
							setTimeout(function() {
								$($(".infoWrite")[0]).show().siblings().hide();
								$(".prev").html("取消");
								$(".next").html("下一步");
								$(".prev").attr("stepIndex", "0");
								$(".next").attr("stepIndex", "0");
								$(".next").removeClass("complete");
							}, 1500)
							break;
						case 2:
							$($(".stepCycle")[2]).removeClass("currentStep");
							$(".currentBg").css("width", "50%");
							setTimeout(function() {
								$($(".infoWrite")[1]).show().siblings().hide();
								$(".prev").html("上一步");
								$(".next").html("下一步");
								$(".prev").attr("stepIndex", "1");
								$(".next").attr("stepIndex", "1");
								$(".next").removeClass("complete");
								code = Fun.setCode(4, $("#verifyCodes"));
							}, 1500)
							break;
						default:
							break;
					}
				})
				//48 - 57 位数字
				// 65 - 90 为字母

				setpass("payPassSetInput", "payPassSet", passArry);
				setpass("rePayPassInput", "rePayPass", rePassArry);
				//设置密码
				function setpass(obj, input, arry) {
					$("#" + obj).click(function() {
						$("#" + input).focus();
					})

					$("#" + input).keyup(function(e) {
						var key = e.keyCode;
						//删除键
						if(key == 8) {
							$($("#" + obj + ">li")[arry.length - 1]).html("");
							arry.splice(arry.length - 1, 1);
						}
						var reg = /[0-9A-Za-z]{1}/g
						if(reg.test($(this).val()) && $(this).val().length == 1) {
							if(arry.length < 6) {
								arry.push($(this).val());
								for(var i = 0; i < arry.length; i++) {
									$($("#" + obj + ">li")[i]).html("<div class='point'></div>");
								}
							}

							$(this).val("");
						} else {
							$(this).val("");
						}
					})

				}

			})
		