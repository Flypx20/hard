handleCart();
function handleCart(){
	var oCart=document.querySelector('.cart');
	var oCartBox=document.querySelector('.cart-box');
	console.log(oCartBox);
	var timer=null;

	oCart.onmouseenter=function(){
		timer=setTimeout(function(){
			oCartBox.style.display='block';
		},300)
		
	}
	oCart.onmouseleave=function(){
		timer=setTimeout(function(){
			oCartBox.style.display='none';
		},300)
	}
	oCartBox.onmouseenter=function(){
		clearTimeout(timer);
	}
	oCartBox.onmouseleave=function(){
		timer=setTimeout(function(){
			oCartBox.style.display='none';
		},300)
	}
} 
handleCarousel();
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:[
			'images/锤子便签1.png',
			'images/锤子便签2.png',
			'images/锤子便签3.png',
			
		],
		width:1224,
		height:503,
		playDuration:3000		
	})
}
handleLieBiao();
function handleLieBiao(){
	var oDownList=document.getElementById('down-list');
	var oList=document.querySelector('.xialakuang');
	var oBox=document.querySelector('.xialakuang-box');
	var timer=null;

	oDownList.onmouseenter=function(){
		timer=setTimeout(function(){
			oBox.style.borderTop='1px solid #ccc';
			animation(oList,{height:300},false);
		},30)
		
	}
	oList.onmouseenter=function(){
		clearTimeout(timer);
	}
	oDownList.onmouseleave=function(){
		timer=setTimeout(function(){
			oBox.style.borderTop='';
			animation(oList,{height:0},false);
		},30)
	}
	oList.onmouseleave=function(){
		timer=setTimeout(function(){
			oBox.style.borderTop='';
			animation(oList,{height:0},false);
		},30)
	}
}