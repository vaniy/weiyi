;$(function(){


	$(".flow-s").hover(function(){
		var tit = $(this).text();
		var i = $(this).data('id');
		var arr = ['项目需求前期的沟通整理在整个项目开发过程中起着关键作用，此阶段云趋将和客户充分沟通，从我们专业角度给到客户建议，避免后期走弯路。','从产品到设计，设计的效果会实时反馈客户，开发过程中会阶段性给到客户验收，避免最后结果和需求有差异。','开发完成后我们内部会做全面测试，然后给到客户测试，客户测试的问题我们会第一时间做好沟通和问题解决。','项目测试完毕后，我们会撰写必要的文档，给到客户做备案。','客户项目验收完毕后，付清尾款，期待后续继续合作。'];
		$(".flow-s").removeClass("s-active");
		$(this).addClass("s-active");
		$(".flow-txt").find("h4").text(tit);
		$(".flow-txt").find("p").text(arr[i]);		
	})

	$(".index-task").hover(function(){
		$(".index-task").removeClass("other-task");
		$(this).addClass("other-task");
	},function(){
		$(this).removeClass("other-task");
	});

	// 首页数字递增;
	var shuzu = $(".done>div"),data=[500,200,3,95],sudu=[100,50,1,20];
	$.each(shuzu,function(i,val){
		var v=0,sp = $(val).find('span');
		$(val).on("mouseenter",function(){
			shuzidizeng(sp,i,v,data,sudu)
		})
	})

	function shuzidizeng(sp,i,v){
	if (v<=data[i]) {
		setTimeout(function(){
			sp.html(v+'+');
			v+=sudu[i];
			shuzidizeng(sp,i,v)
		},100)
	}else{
		sp.html(data[i]+'+');
	}
}

	// 暂时隐藏那个点
	$(".swiper-pagination").hide();

	// 暂时禁止案例详情链接
	$('.case-bd').find('a').removeAttr('href')

	

	//右侧
	gotop();
	$('.gotop').click(function(){
		$('body,html').animate({scrollTop:0},500);
	})
	$('.qq').hover(function(){
			$('.qq-msg').show();
		},function(){
			$('.qq-msg').hide();
	})
	$('.tel').hover(function(){
			$('.tel-phone').show();
		},function(){
			$('.tel-phone').hide();
	})
	$('a.wx').hover(function(){
			$('.weixin-msg').show();
		},function(){
			$('.weixin-msg').hide();
	})



})

function gotop(){
	h = $(window).height();	
	t = $(document).scrollTop();
	if(t > h/2){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(window).scroll(function(e){
	gotop();		
})



function upInfo(data) {
    var page = window.location.href;
    $.post('/stat/event',{
        category: "联系",
        client: 'pc',
        action: data,
        page: page
    },function () {

    })
}