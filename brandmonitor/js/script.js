$(function(){
	var height = $(window).height();
	$(".intro").css("margin-top",height*0.35);
	//$(".download").css("margin-top",height*0.55);
	//$(".intro_block").css("margin-top",height*0.25);
	$(".container,header").height(height);
	<!-- ¹ö¶¯¶¯»­ -->
	var a,b,c;
	a=$(window).height();	
	$(window).scroll(function(){	
		var b=$(this).scrollTop();
		$(".introImg").each(function(){
			c=$(this).offset().top;	
			if(a+b>c){
				$(this).addClass("move");
			}
			else{
				$(this).removeClass("move");
			}
		});	
	});
})