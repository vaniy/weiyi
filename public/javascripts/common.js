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