$('.item.server').on('mouseenter',function(){
    $('.subTitleBox').show();
})
$('.item.server').on('mouseleave',function(){
    $('.subTitleBox').hide();
})
$('.subTitle').on('click', function(){
    if(this.className.indexOf("aa") !== -1){
        window.location.href = "/publicsign"
    }
    else if(this.className.indexOf("bb") !== -1){
        window.location.href = "/smallprogram"
    }
    else if(this.className.indexOf("cc") !== -1){
        window.location.href = "/operate"
    }
    else if(this.className.indexOf("dd") !== -1){
        window.location.href = "/website"
    }
})
//导航栏样式函数，判断距离顶部距离
$(window).bind("scroll", function () {
    var navH = $(window).scrollTop();
    var $head = $("#header");
    var $sideTop = $("#side_top");
    if (navH > 20) {
        $head.addClass("active");
        $('.logo_banner').show();
        $sideTop.fadeIn();
    };
    if (navH <= 20) {
        $head.removeClass("active");
        $sideTop.fadeOut();
        $('.logo_banner').hide();
    };
});