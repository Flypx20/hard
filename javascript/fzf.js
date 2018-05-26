handleHeaderNav();
handleTop();
function handleTop(){
	var isShow = false;	
	window.onscroll = function(){
		var oDiv = document.getElementById('box');
		var iTop = document.body.scrollTop || document.documentElement.scrollTop;
		var oHeader = document.querySelector('#box');
		var oPhone = document.querySelectorAll('#box ul li a');
		var oPhoneNav = document.querySelector('.header  .header-nav ul');
		var oNav = document.querySelector('.header .header-nav');
		var timer = null;
		var time = null;
		if(iTop >= 100){
			if(!isShow){
				animation(oDiv,{height:60});
				oNav.style.position = 'fixed';
				oNav.style.top = '60px';
				for (var i = 0; i < oPhone.length - 1; i++) {
						if (i == 1) {
							oPhone[i].onmouseenter = function() {
								clearTimeout(timer);
								oHeader.style.background = '#ebebeb';
								oHeader.style.borderBottom = 'none';
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
					},400);
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
					},400);
				};
				isShow = true;
			}
		}else{
			if(isShow){
				animation(oDiv,{height:0});
				oNav.style.position = 'position';
				oNav.style.top = '189px';
				isShow = false;
			}
		}
	};
}
function handleHeaderNav(){
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