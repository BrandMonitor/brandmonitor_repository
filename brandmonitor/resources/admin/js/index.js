(function(){

	//配置
	/*var config = {
		'audio':{
			'icon':'audio-record-play',
			'text':true
		},
		'loading': 'loading-ic'
	};*/
	
	//var isAnimating = false;
	
	//禁用手机默认的触屏滚动行为
	/*document.addEventListener('swipeRight',function(event){
		event.preventDefault(); },false);//event.preventDefault，取消事件的默认动作
	document.addEventListener('swipeLeft',function(event){
		event.preventDefault(); },false);*/
	
	
	$(document).swipeRight(function(){
		alert(123);
		$(".page-1").removeClass('pt-page-moveFromRight');
		$(".page-1").removeClass('pt-page-moveToLeft');
		$(".page-1").addClass('pt-page-moveToRight');
		//$('section label>img').addClass(".imgtrans");
	})
	
	$(document).swipeLeft(function(){
		$(".page-1").removeClass('pt-page-moveToRight');
		$(".page-1").addClass('pt-page-moveFromRight');
		$(".page-1").addClass('pt-page-moveToLeft');
	})
	//$("body").bind("touchmove",function(event){event.preventDefault;//code})
	/*if(e&&e.preventDefault){
		window.event.returnValue = false;
	}*/
})();