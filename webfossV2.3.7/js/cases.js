function casesLoaded(){
    $("img.lazy").lazyload({effect: "fadeIn"});
    //tabs选项卡
    var $tabs_ico=$(".tabs .tabs-ico p");
    var $img=$(".tabs .tabs-ico p img");
    $tabs_ico.hover(function(){
        var i=$(this).index()
        //console.log(i);
        $img.eq(i).attr("src","img/cases/ico"+(i+1)+".png");
    },function(){
        var i=$(this).index()
        $img.eq(i).attr("src","img/cases/icos"+(i+1)+".png");
    });

    //图标点击事件
    var nav=$(".tabs .tabs-ico .nav");
    var computer=$(".tabs .tabs-ico .computer");
    var phone=$(".tabs .tabs-ico .phone");
    var $lie=$(".logos .logos_one li:even");
    var $lio=$(".logos .logos_one li:odd");
     nav.click(function(){
         $lio.fadeIn();
         $lie.fadeIn();
         $li.css({"opacity":"1"});
     });
    computer.click(function(){
        $li.css({"opacity":"1"});
        $lie.fadeOut();
        $lio.fadeIn();
    });

    phone.click(function(){
        $li.css({"opacity":"1"});
        var $lio=$(".logos .logos_one li:odd");
        $lio.fadeOut();
        var $lie=$(".logos .logos_one li:even");
        $lie.fadeIn();
    });




    ////图片特效部分监听
    //var $imgs=$(".logos .logos_one li:even");
    ////console.log($imgs);
    //$imgs.addClass("animated bounceInRight")
    //var $imgs1=$(".logos .logos_one li:odd");
    ////console.log($imgs1);
    //$imgs1.addClass("animated bounceInLeft");


    var $li=$(".logos .logos_one li");
    var offsetTop1 = $(".Customer").offset().top;
    var $cs2=$(".logos .logos_one .c2");
    var $cs3=$(".logos .logos_one .c3");
    var $cs4=$(".logos .logos_one .c4");
    var $cs5=$(".logos .logos_one .c5");
    var $cs6=$(".logos .logos_one .c6");
    var $cs7=$(".logos .logos_one .c7");
    var $cs8=$(".logos .logos_one .c8");
    $cs2.css({"opacity":"0"});
    $cs3.css({"opacity":"0"});
    $cs4.css({"opacity":"0"});
    $cs5.css({"opacity":"0"});
    $cs6.css({"opacity":"0"});
    $cs7.css({"opacity":"0"});
    $cs8.css({"opacity":"0"});
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    var scroll1=$(document).scrollTop();//获取滚轮的高度
    var Customer=$(".Customer");
    var document1=$(window).height();//获取窗口的高度
    var window1=$li.eq(0).offset().top;
    var window2=$li.eq(4).offset().top;
    var window3=$li.eq(8).offset().top;
    var window4=$li.eq(12).offset().top;
    var window5=$li.eq(16).offset().top;
    var window6=$li.eq(20).offset().top;
    var window7=$li.eq(24).offset().top;
    var window8=$li.eq(28).offset().top;
    var imgHeight=$(".logos .logos_one .rotate1 img").height()
    //console.log(imgHeight);

        var $c1=$(".logos .logos_one .c1:even");
        $c1.addClass("animated bounceInRight")
        var $c1s=$(".logos .logos_one .c1:odd");
        $c1s.addClass("animated bounceInLeft");

    console.log(offsetTop1);
    //var f=120;
    //滚轮监听
    $(window).bind("scroll", function(){
        top = $(this).scrollTop(); // 当前窗口的滚动距离
        console.log(top);
        Customer=$(".Customer");
        //console.log(showOdd.length);
        scroll1=$(document).scrollTop();//获取滚轮的高度
        //console.log(scroll1);
        document1=$(window).height();//获取窗口的高度
        console.log(document1*2);
        if(offsetTop1+scroll1>=(document1)*2){
            Customer.css({"right":"0"})
        }
        //图片特效部分
        //if(scroll1 + document1 >= (window1) ){
        //    var $c1=$(".logos .logos_one .c1:even");
        //    $c1.addClass("animated bounceInRight")
        //    var $c1s=$(".logos .logos_one .c1:odd");
        //    $c1s.addClass("animated bounceInLeft");
        //}
        if(scroll1 + document1 >= (window2+imgHeight-300) ){
            $cs2.css({"opacity":"1"});
            var $c2=$(".logos .logos_one .c2:even");
            $c2.addClass("animated bounceInRight");
            var $c2s=$(".logos .logos_one .c2:odd");
            $c2s.addClass("animated bounceInLeft");

        }
        if(scroll1 + document1 >= (window3+imgHeight-300) ){
            $cs3.css({"opacity":"1"});
            var $c3=$(".logos .logos_one .c3:even");
            $c3.addClass("animated bounceInRight")
            var $c3s=$(".logos .logos_one .c3:odd");
            $c3s.addClass("animated bounceInLeft");
        }
        if(scroll1 + document1 >= (window4+imgHeight-300) ){
            $cs4.css({"opacity":"1"});
            var $c4=$(".logos .logos_one .c4:even");
            $c4.addClass("animated bounceInRight")
            var $c4s=$(".logos .logos_one .c4:odd");
            $c4s.addClass("animated bounceInLeft");
        }
        if(scroll1 + document1 >= (window5+imgHeight-300) ){
            $cs5.css({"opacity":"1"});
            var $c5=$(".logos .logos_one .c5:even");
            $c5.addClass("animated bounceInRight")
            var $c5s=$(".logos .logos_one .c5:odd");
            $c5s.addClass("animated bounceInLeft");
        }
        if(scroll1 + document1 >= (window6+imgHeight-300) ){
            $cs6.css({"opacity":"1"});
            var $c6=$(".logos .logos_one .c6:even");
            $c6.addClass("animated bounceInRight")
            var $c6s=$(".logos .logos_one .c6:odd");
            $c6s.addClass("animated bounceInLeft");
        }
        if(scroll1 + document1 >= (window7+imgHeight-300) ){
            $cs7.css({"opacity":"1"});
            var $c7=$(".logos .logos_one .c7:even");
            $c7.addClass("animated bounceInRight")
            var $c7s=$(".logos .logos_one .c7:odd");
            $c7s.addClass("animated bounceInLeft");
        }
        if(scroll1 + document1 >= (window8+imgHeight-300) ){
            $cs8.css({"opacity":"1"});
            var $c8=$(".logos .logos_one .c8:even");
            $c8.addClass("animated bounceInRight")
            var $c8s=$(".logos .logos_one .c8:odd");
            $c8s.addClass("animated bounceInLeft");
        }

    })
}
setTimeout(function(){
    $(".pageBody").fadeIn();
    $(".loadingBg").fadeOut();
    $(".loadingText").fadeOut();
    casesLoaded();
},2000);