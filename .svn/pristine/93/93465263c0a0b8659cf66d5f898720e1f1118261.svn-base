$(".back").click(function() {
				window.open("my.html", "_self");
			})
			var jsonDatas = Fun.getJson("bill.json");
			$("#moneyNum").html(jsonDatas.balance);
			var jsonData=jsonDatas.bill;
			var html = "";
			for(var i = 0; i < jsonData.length; i++) {
				html += '<li><div class="moneyType '+jsonData[i].moneyType+'">'+jsonData[i].moneyText+'</div>' +
					'<div class="billInfo"><div class="billClass">'+jsonData[i].billClass+'</div>' +
					'<div class="billTime">'+jsonData[i].billTime+'</div></div>' +
					'<div class="billMoney '+jsonData[i].billMoneyType+'">'+jsonData[i].billMoney+'</div></li>';
			}
			$("#billList").append(html);
			if($("#billList>li").length==0){
				$("#empty").show();
			}
			//设置账单高度
			$("#billListArea").height($(document).height() - $("header").height() - $("#billTitle").height() - $("#money").height() - 50 + "px")
			//绑定支付宝
			$(".changeBtn").click(function() {
				window.open("bind.html", "_self");
			})