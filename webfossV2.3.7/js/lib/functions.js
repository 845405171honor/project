/*=======================================================
    ->防止Ctrl+mousewheel放大页面
 ========================================================*/
document.onmousewheel = function(eve){
    var e;
    eve ? e = eve : e = window.event;
    if(e.ctrlKey){
        return false;
    }
};
/*=======================================================
    ->canvas画圆
 ========================================================*/
function drawArc(canvas,radian){
    canvas = canvas[0];
    radian = (2*Math.PI)*radian;
    if(canvas.getContext){
        var unit = Math.PI/45;
        var num = Math.ceil(radian/unit);
        var dx = radian/num;
        var count = 0;
        var rad = 0;
        var timer = setInterval(function(){
            rad += dx;
            //获取对应的CanvasRenderingContext2D对象(画笔)
            var ctx = canvas.getContext("2d");
            //开始一个新的绘制路径
            ctx.beginPath();
            ctx.strokeStyle = "#fff";
            var circle = {
                x : 50,    //圆心的x轴坐标值
                y : 51,    //圆心的y轴坐标值
                r : 50      //圆的半径
            };
            //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
            ctx.arc(circle.x, circle.y, circle.r, Math.PI*1.2,rad-Math.PI*2.8, false);
            //按照指定的路径绘制弧线
            ctx.stroke();
            count++;
            if(count == num) clearInterval(timer);
        },30)
    }
}
/*=======================================================
    ->数字变化,o为$(dom),nmb为目标数字，n为跳动次数，t为时间（单位：ms)
 ========================================================*/
function nmbChange(o,nmb,n,t){
    var dt = t/ n,
        dn = parseInt(nmb/n),
        v = 0;                  //起始值
    var timer = setInterval(function(){
        v += dn;
        if(v > nmb){
            v = nmb;
            clearInterval(timer)
        }
        o.html(v);
    },dt);
}

/*=======================================================
    ->在元素中插入n个随机数字或字母字符
 ========================================================*/
function getStr(o,n){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var res = "";
    for(var i = 0; i < n; i ++){
        res += chars.charAt(Math.floor(Math.random()*62));
    }
    o.html(res);
}
/*=======================================================
    ->改变窗口大小时重新定义元素尺寸
 ========================================================*/
function winResize(){
    var $all = $(document).find("*");
    var ori = [ [] , [] ];
    var wW = $(window).width(),
        wH = $(window).height(),
        ww = wW, hh = wH;
    for(var i = 0; i < $all.length; i++){
        ori[0][i] = $($all[i]).width();
        ori[1][i] = $($all[i]).height();
    }
    $(window).resize(function(){
        //重新获取窗口尺寸
        ww = $(window).width();
        hh = $(window).height();
        //刷新元素的尺寸
        var ow, oh;
        for(i = 0; i < $all.length; i++){
            ow = ori[0][i] / wW * ww;
            oh = ori[1][i] / wH * hh;
            $($all[i]).width(ow).height(oh);
        }
    });
}

