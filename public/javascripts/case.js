$('.li-img').on('mouseenter',function(){
    if(this.children.length === 2){
        jQuery(this.firstElementChild).hide() 
        jQuery(this.lastElementChild).show()  
    }  
})
$('.li-img').on('mouseleave',function(){
    if(this.children.length === 2){
        jQuery(this.firstElementChild).show() 
        jQuery(this.lastElementChild).hide()   
    } 
})