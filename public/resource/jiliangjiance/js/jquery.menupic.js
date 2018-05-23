// JavaScript Document
$(function(){
    var j = 0,k = 0,id = 0;
    init();
    $.each( [0,1,2,3,4,5,6], function(m){
        $("div.box-zzsc>ul>li").eq(m).find("span").click(function () {
            $.each( [0,1,2,3,4,5,6], function(i){
                $("div.box-zzsc>ul>li").eq(i).find("span").removeClass("current");
                $("div.box-zzsc>ul>li").eq(i).find("img").hide();
            });
            $("div.box-zzsc>ul>li").eq(m).find("span").addClass("current");
            $("div.box-zzsc>ul>li").eq(m).find("img").fadeIn({queue:false, duration:100, easing:"easeInSine"});
            j = m + 1;
            clearTimeout(id);
            id = setTimeout(function(){init()},6000);
        });       
    });
    function init()
    {        
        $.each( [0,1,2,3,4,5,6], function(n){
            $("div.box-zzsc>ul>li").eq(n).find("span").removeClass("current");
            $("div.box-zzsc>ul>li").eq(n).find("img").hide();
        });
        k = j%7;
        $("div.box-zzsc>ul>li").eq(k).find("span").addClass("current");
        $("div.box-zzsc>ul>li").eq(k).find("img").fadeIn({queue:false, duration:100, easing:"easeInSine"});
        j = j+1;
        id = setTimeout(function(){init()},4000);
    }
});
$(".t1 a").click(function(){
 dialog("ÑûÇëÅóÓÑÒ»ÆðÍæ°É","id:tc","300px","auto","id");
});
var miso_a = mx_ver;
var miso_c = mx_verNum;
$('div.down').find('a').attr('href', miso_a);
$('div.down>a').find('span').html(miso_c);