/*
移动端轮播原理：
1.在页面刚加载时，设置盒子的translateX为0，并取消定时器。
2.当手指按下的时候，取消其transition，判断当前属于第几张图片，当为第零张图片的时候，将盒子迅速拉至复制出来的图片的第一张，当图片在最后一张的时候，将盒子迅速拉至未复制的图片的最后一张。
3.当手指滑屏时，改变其box的tranflateX.
4.当手指抬起时，得到处于第几张照片，然后将其滑入，并开启定时器。
掌握了以上原理之后，再去开发效果 就容易多了

 */
window.onload = function() {
    var wrap = document.querySelector(".wrap");
    var box = document.querySelector(".box");
    box.innerHTML += box.innerHTML;
    var aLi = document.querySelectorAll(".box li");
    var aNav = document.querySelectorAll("nav span");
    var aHeight = aLi[0].offsetHeight;
    var aWidth = wrap.offsetWidth;

    wrap.style.height = aHeight + 'px';
    // 为box赋值宽度 动态计算宽度
    box.style.width = aLi.length * 100 + "%";
    // 为每一个 li 赋值宽度
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.width = 1 / aLi.length * 100 + "%";
    }

    var startPoint = 0;
    var startEle = 0;
    var now = 0;
    var timer = 0;
    cssTransform(box, "translateX", 0);
    auto();

    wrap.addEventListener("touchstart", function(e) {
        clearInterval(timer);
        box.style.transition = "none";
        var moveX = cssTransform(box, "translateX");
        now = Math.round(-moveX / aWidth);
        if (now == 0) {
            now = aNav.length;
        } else if (now == aLi.length - 1) {
            now = aNav.length - 1;
        }
        cssTransform(box, "translateX", -now * aWidth);
        startPoint = e.changedTouches[0].pageX;
        startEle = cssTransform(box, "translateX");
    });

    wrap.addEventListener("touchmove", function(e) {
        var endPoint = e.changedTouches[0].pageX;
        var disX = endPoint - startPoint;
        cssTransform(box, "translateX", disX + startEle);
    });

    wrap.addEventListener("touchend", function(e) {
        var moveX = cssTransform(box, "translateX");
        now = Math.round(-moveX / aWidth);
        tab();
        auto();

    });
    // 自动轮播
    function auto() {
        clearInterval(timer);
        timer = setInterval(function() {
            if (now == aLi.length - 1) {
                now = aNav.length - 1;
            }
            box.style.transition = "none";
            cssTransform(box, "translateX", -now * aWidth);
            setTimeout(function() {
                now++;
                tab();
            }, 30);
        }, 2000);
    };

    function tab() {
        box.style.transition = ".5s";
        cssTransform(box, "translateX", -now * aWidth);
        for (var i = 0; i < aNav.length; i++) {
            aNav[i].className = "";
        };
        aNav[now % aNav.length].className = "active";
    }
}

function cssTransform(ele, attr, val) {
    if (!ele.transform) {
        ele.transform = {};
    };

    //当传入值时对属性进行设置。
    if (arguments.length > 2) {
        ele.transform[attr] = val;
        var sval = "";
        for (var s in ele.transform) {
            if (s == "translateX") {
                sval += s + "(" + ele.transform[s] + "px)";
            }
            ele.style.WebkitTransform = ele.style.transform = sval;
        }

    } else {
        val = ele.transform[attr];
        if (typeof val == "undefined") {
            if (attr == "translateX") {
                val = 0;
            }
        };
        console.log(val);
        return val;
    }
}