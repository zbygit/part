window.onload = function() {
	var header = document.getElementsByClassName("header")[0];
	var hint = document.getElementsByClassName("hint")[0];
	var daiti = document.getElementsByClassName("daiti");
	var lis = document.getElementsByClassName("lis")[0];
	var scroll = document.documentElement.scrollTop;

	//用来做限制的变量；

	var jsonData = Fun.getJson("treasury.json");

	//数据加载
	function dataAdd(index, num) {
		for(var i = index; i < num; i++) {
			var html = '<a class="bibleTo" itemIndex="' + i + '"><li style="' + jsonData[i].style + '"><p class="article">' +
				jsonData[i].bibleName + '<span class="time">发布时间：' +
				jsonData[i].foundTime + '</span></p></li></a>';
			$(lis).append(html);
			pageOpen();
			if(jsonData[i + 1] == undefined) {
				return;
			}

		}

	}
	dataAdd(0, 5);

	var astrict = 0;
	window.onscroll = function() {
		if(getScrollTop() + getWindowHeight() == getScrollHeight()) {
			astrict++;

			if(astrict < Math.ceil(jsonData.length / 5)) {
				dataAdd(astrict * 5, (astrict + 1) * 5);
			} else {
				$(".hint").html("已经没有数据可以加载了");
			}
		}
	};
	//点击跳转
	function pageOpen() {
		$(".bibleTo").click(function() {
			window.open("../../view/bible/treasury1.html?itemIndex=" + $(this).attr("itemIndex"), "_self");
		})
	}



}