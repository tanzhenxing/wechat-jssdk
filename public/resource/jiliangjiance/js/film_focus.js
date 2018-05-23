// JavaScript Document
(function(A){
	A.fn.th_video_focus=function(E){
		
		var G={
			actClass:"cur",
			navContainerClass:".focus_pic_preview",
			focusContainerClass:".focus_pic",
			animTime:600,
			delayTime:5000
		};
		
		if(E){
			A.extend(G,E)
		}
		
		var C=G.actClass, D=G.navContainerClass, B=G.focusContainerClass, F=G.animTime, H=G.delayTime, I=null;
		
		return this.each(function(){
			
			var O=A(this), M=A(D+" li",O), P=A(B+" li",O), L=M.length, K=O.height();
			
			function N(R){
				var V=K*R*-1;
				var U=A(B+" li",O), W=null, T=null;
				for(var S=0;S<=R;S++){
					W=U.eq(S);
					T=W.find('script[type="text/templ"]');
					if(T.length>0){
						W.html(T.html())
					}
				}
				A(B,O).stop().animate({top:V},F,function(){
					var Y=O.find("h3"), X=Y.height();
					Y.height(0).html(A(B+" li").eq(R).find("img").attr("alt")).animate({height:X},600)
				});
				A(D+" li").eq(R).addClass(C).siblings().removeClass(C)
			}
			
			function Q(){
				if(I){
					clearInterval(I)
				}
				I=setInterval(function(){
					var R=A(D+" li."+C).index();
					N((R+1)%L)
				},H)
			}
			
			O.hover(function(){
				if(I){
					clearInterval(I)
				}
			},function(){
				Q()
			});
		
			var J=null;
			
			M.hover(function(){
				
				var R=A(this).index();
				
				if(I){
					clearInterval(I)
				}
				J=setTimeout(function(){
					N(R)
				},300)
			},function(){
				if(J){
					clearTimeout(J)
				}
				Q()
			}).click(function(T){
				var R=A(this).index(), S=P.eq(R).find("a");
				if(document.uniqueID||window.opera){
					S[0].click();
					T.stopPropagation();
					T.preventDefault()
				}
			});
			
			Q()
			
		})
	}
	
})(jQuery);

$(function(){
	
	
	$(".film_focus").th_video_focus({
		navContainerClass:".film_focus_nav",
		focusContainerClass:".film_focus_imgs",
		delayTime:3000
	});
	
});	