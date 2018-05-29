
fzfHeaderNav();
fzfTop();
fzfDownload();
fzfCart();
fzfCart2();
function fzfTop(){
	var isShow = false;	
	window.onscroll = function(){
		var oDiv = document.getElementById('box');
		var iTop = document.body.scrollTop || document.documentElement.scrollTop;
		var oHeader = document.querySelector('#box');
		var oPhone = document.querySelectorAll('#box ul li a');
		var oPhoneNav = document.querySelector('.header  .header-nav ul');
		var oNav = document.querySelector('.header .header-nav');
		var oHeaderCarts = document.querySelector('.header-carts');
		//console.log(oHeaderCarts);
		var timer = null;
		var time = null;
		if(iTop >= 100){
				oNav.style.position = 'fixed';
				oNav.style.top = '60px';
			if(!isShow){
				animation(oDiv,{height:60});
				animation(oHeaderCarts,{opacity:100});
				for (var i = 0; i < oPhone.length - 1; i++) {
						if (i == 1) {
							oPhone[i].onmouseenter = function() {
								clearTimeout(timer);
								clearTimeout(time);
								oHeader.style.background = '#ebebeb';
								oHeader.style.borderBottom = 'none';
								oPhoneNav.style.borderTop = '1px solid #d8d8d8';
								animation(oPhoneNav, {opacity:100});
								animation(oNav, {height:350});
							};
						}else{
							oPhone[i].onmouseenter = function() {
								clearTimeout(time);
								timer = setTimeout(function(){
									oPhoneNav.style.borderTop = 'none';
									animation(oNav, {height:0});
									animation(oPhoneNav, {opacity:0});
								},500);
							};
						}		
				}
				oHeader.onmouseenter = function(){
					oHeader.style.background = '#ebebeb';
					clearTimeout(time);
				};
				oHeader.onmouseleave = function(){
					oHeader.style.background = '#f7f7f7';
					oHeader.style.borderBottom = '1px solid #dadada';
					timer = setTimeout(function(){
					oPhoneNav.style.borderTop = 'none';
						animation(oNav, {height:0});
						animation(oPhoneNav, {opacity:0});
					},500);
				};
				oNav.onmouseenter = function(){
					oHeader.style.background = '#ebebeb';
					oHeader.style.borderBottom = 'none';
					clearTimeout(timer);
				};
				oNav.onmouseleave = function(){
					oHeader.style.background = '#f7f7f7';
					oHeader.style.borderBottom = '1px solid #dadada';
					time = setTimeout(function(){
					oPhoneNav.style.borderTop = 'none';
						animation(oNav, {height:0});
						animation(oPhoneNav, {opacity:0});
					},500);
				};
				isShow = true;
			}
		}else{
			oNav.style.position = 'position';
			oNav.style.top = '189px';
			if(isShow){
				animation(oHeaderCarts,{opacity:0});
				animation(oDiv,{height:0});
				
				isShow = false;
			}
		}
	};
}
function fzfHeaderNav(){
	var oHeader = document.querySelector('.header');
	var oPhone = document.querySelectorAll('.header  .phone-nav a');
	var oPhoneNav = document.querySelector('.header  .header-nav ul');
	var oNav = document.querySelector('.header .header-nav');
	var timer = null;
	for (var i = 0; i < oPhone.length - 3; i++) {
		if (i == 1) {
			oPhone[i].onmouseenter = function() {
				clearTimeout(timer);
				oPhoneNav.style.borderTop = '1px solid #d8d8d8';
				animation(oPhoneNav, {opacity:100});
				animation(oNav, {height:350});
			};
		}else{
			oPhone[i].onmouseenter = function() {
				timer = setTimeout(function(){
					oPhoneNav.style.borderTop = 'none';
					animation(oNav, {height:0});
					animation(oPhoneNav, {opacity:0});
				},400);
			};
		}		
	}
	oHeader.onmouseleave = function(){
		timer = setTimeout(function(){
			oPhoneNav.style.borderTop = 'none';
			animation(oNav, {height:0});
			animation(oPhoneNav, {opacity:0});
		},400);
	};		
}
function fzfDownload(){
	var oPhone = document.querySelectorAll('.header  .phone-nav a')[9];
	var oPhonec = document.querySelectorAll('#box ul li a')[9];
	var oFlow = document.querySelector('.flow');
	var oTable = document.querySelector('.table');
	var oBtn = document.querySelector('.table .btn button');
	oPhone.onclick = function(){
		oFlow.style.display = 'block';
		oTable.style.display = 'block';
	};
	oPhonec.onclick = function(){
		oFlow.style.display = 'block';
		oTable.style.display = 'block';
	};
	oFlow.onclick = function(){
		oFlow.style.display = 'none';
		oTable.style.display = 'none';
	};
	oBtn.onclick = function(){
		oFlow.style.display = 'none';
		oTable.style.display = 'none';
	};
}
function fzfCart(){
	var oCart = document.querySelector('.top .cart .fa-shopping-cart');
	var oSpan = document.querySelector('.top .cart span');
	var oCarts = document.querySelector('.carts');
	var oCartContent = document.querySelector('.carts .cart-content');
	var oLittle = document.querySelector('.carts .little');
	var oCart1 = document.querySelector('#box .cart .fa-shopping-cart');
	var oSpan1 = document.querySelector('#box .cart span');
	var time = null;
	oSpan.onmouseenter = function(){
		clearTimeout(time);
		oCart.style.color = '#fff';
		oCarts.style.display ='block';
		animation(oCartContent, {opacity:100});
		animation(oLittle, {opacity:100});
	};
	oSpan.onmouseleave = function(){

		time = setTimeout(function(){
			oCart.style.color = '#999';
			animation(oCartContent, {opacity:0});
			animation(oLittle, {opacity:0});
			oCarts.style.display ='none';

		},300);
		
	};
	oCarts.onmouseenter = function(){
		clearTimeout(time);
	};
	oCarts.onmouseleave = function(){
		time = setTimeout(function(){
			oCart.style.color = '#999';
			oCarts.style.display ='none';
			animation(oCartContent, {opacity:0});
			animation(oLittle, {opacity:0});
		},300)
	};
}
function fzfCart2(){
	var oBoxSpan = document.querySelector('#box span');
	var oCart2 = document.querySelector('#box .fa-shopping-cart');
	var oHeaderCarts = document.querySelector('.header-carts');
	var timer = null;
	oBoxSpan.onmouseenter = function(){
		clearTimeout(timer);
		oCart2.style.color = '#666';
		oHeaderCarts.style.display ='block';
	};
	oBoxSpan.onmouseleave = function(){
		timer = setTimeout(function(){
			oCart2.style.color = '#b0b0b0';
			oHeaderCarts.style.display ='none';
		},300);
	};
	oHeaderCarts.onmouseenter = function(){
		clearTimeout(timer);
	};
	oHeaderCarts.onmouseleave = function(){
		timer = setTimeout(function(){
			oCart2.style.color = '#b0b0b0';
			oHeaderCarts.style.display ='none';
		},300);
	};
}