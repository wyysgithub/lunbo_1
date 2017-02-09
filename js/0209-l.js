// JavaScript Document
var i=0;
$(document).ready(function() {
     
	$('.tu:eq(0)').fadeIn(300).siblings().fadeOut(300);
	$('.d:eq(0)').addClass('co').siblings().removeClass('co');
	B();
	
	$('.d').hover(function tt(){
		window.clearInterval(time);
		i=$(this).index();
		//console.log(i);
		$('.tu:eq('+i+')').fadeIn(300).siblings().fadeOut(300);
		$('.d:eq('+i+')').addClass('co').siblings().removeClass('co');
		
		
		},function(){
			B();
			})
	
	$('.le').click(function(){
		i--;
		if(i==-1){
			i=4;
			}
		window.clearInterval(time);
		$('.tu:eq('+i+')').fadeIn(300).siblings().fadeOut(300);
		$('.d:eq('+i+')').addClass('co').siblings().removeClass('co');
		B();
		});
	$('.ri').click(function(){
		i++;
		if(i==5){
			i=0;
			}
		window.clearInterval(time);
		$('.tu:eq('+i+')').fadeIn(300).siblings().fadeOut(300);
		$('.d:eq('+i+')').addClass('co').siblings().removeClass('co');
		B();
		});
});

function B(){
	time=window.setInterval(function(){
		i++;
		if(i==5){
			i=0;
			}
		$('.tu:eq('+i+')').fadeIn(300).siblings().fadeOut(300);
		$('.d:eq('+i+')').addClass('co').siblings().removeClass('co');
		
		},3000);
	}