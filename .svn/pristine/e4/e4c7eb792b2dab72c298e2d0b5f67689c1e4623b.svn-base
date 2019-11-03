//设置rem
function setRem() {
	var clientWidth = $(window).width();
	var nowRem = (clientWidth / 414 * 10);
	$("html").css("font-size", parseInt(nowRem, 10) + "px");
};
setRem();

var timer;
$(window).bind("resize", function() {
	clearTimeout(timer)
	timer = setTimeout(function() {
		setRem();
	}, 100)
})

//页面跳转
$(".footerArea>li").click(function(e) {
	var str = $(this).attr("pageTo");
	switch(str) {
		case "1":
			window.open("../../view/index/index.html", "_self");
			break;
		case "2":
			window.open("../../view/bible/treasury.html", "_self");
			break;
		case "3":
			window.open("../../view/msg/msg.html", "_self");
			break;
		case "4":
			window.open("../../view/my/my.html", "_self");
			break;
		default:
			break;
	}
})

//返回上一级
$(".back").click(function() {
	window.history.back(-1);
})

//滚动条在Y轴上的滚动距离

	function getScrollTop() {
		var scrollTop = 0,
			bodyScrollTop = 0,
			documentScrollTop = 0;
		if(document.body) {
			bodyScrollTop = document.body.scrollTop;
		}
		if(document.documentElement) {
			documentScrollTop = document.documentElement.scrollTop;
		}
		scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
		return scrollTop;
	}

	//文档的总高度

	function getScrollHeight() {
		var scrollHeight = 0,
			bodyScrollHeight = 0,
			documentScrollHeight = 0;
		if(document.body) {
			bodyScrollHeight = document.body.scrollHeight;
		}
		if(document.documentElement) {
			documentScrollHeight = document.documentElement.scrollHeight;
		}
		scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		return scrollHeight;
	}

	//浏览器视口的高度
	function getWindowHeight() {
		var windowHeight = 0;
		if(document.compatMode == "CSS1Compat") {
			windowHeight = document.documentElement.clientHeight;
		} else {
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	}

//document.onselectstart=new Function("event.returnValue=false");  
var Fun = {
	//获取url参数转换成对象
	getUrl: function() {
		//取得查询字符串并去掉开头的问号
		var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
			//保存数据的对象
			args = {},
			//取得每一项
			items = qs.length ? qs.split("&") : [],
			item = null,
			name = null,
			value = null,
			//在 for 循环中使用
			i = 0,
			len = items.length;
		//逐个将每一项添加到 args 对象中
		for(i = 0; i < len; i++) {
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if(name.length) {
				args[name] = value;
			}
		}
		return args;
	},

	//ajax获取json数据（同步

	getJson: function(url) {
		var datas;
		$.ajax({
			type: "get",
			url: "../../data/" + url,
			async: false,
			success: function(data) {
				datas = data;
			}
		})
		return datas;

	},
	regTest: function(dom, index) {
		var resullt = {
			"msg": null,
			"booleans": null
		}
		if(dom.val().trim().length == 0) {
			resullt.msg = "请完整填写信息";
			resullt.booleans = false;
			return resullt;
		}

		/*
		 * regArry 正则验证数组
		 * 0 中文最少1位
		 * 1 身份证
		 * 2 账号  可为中文英文数字字母 
		 * 3 邮箱
		 * 4 手机号
		 * 5 登录密码 只能为6-10位的数字字母
		 * 6 支付密码 需为6位数字
		 * */
		var regArry = [/^[\u4e00-\u9fa5]+$/, /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
			/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/, /^[0-9a-zA-Z._-]+@[a-zA-Z0-9]{2,}.((com)|(cn))$/,
			/^[1][3,4,5,7,8][0-9]{9}$/,
			/[0-9a-zA-Z]{6,10}/, /^[0-9]{6}$/
		]
		var reg = regArry[index];
		var regMsgError = ["用户姓名不符合要求", "身份证号不合法", "支付宝账号不合法", "邮箱不符合格式", "手机号不符合要求", "密码格式不正确", "密码不符合要求"]
		if(reg.test(dom.val())) {
			resullt.msg = "";
			resullt.booleans = true;
			return resullt;
		} else {
			resullt.msg = regMsgError[index];
			resullt.booleans = false;
			return resullt;
		}
	},
	//生成验证码
	/*
	 
	 * 
	 * codeLen  验证码长度
	 * dom     显示验证码的元素
	 * return 返回生成的验证码
	 * */
	setCode: function(codeLen, dom) {
		var code = "";
		//字符
		var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		];
		var codeColors = ['#f44336', '#009688', '#cddc39', '#03a9f4', '#9c27b0', '#5e4444', '#9ebf9f', '#ffc8c4', '#2b4754', '#b4ced9', '#835f53', '#aa677e'];

		for(var i = 0; i < codeLen; i++) {
			var charNum = Math.floor(Math.random() * 52);
			code += codeChars[charNum];
		}
		for(var i = 0; i < codeColors.length; i++) {
			var charNum = Math.floor(Math.random() * 12);
			codeColor = codeColors[charNum];
		}
		if(dom) {
			dom.css('color', codeColor);
			dom.html(code);
		}
		return code;
	}
}