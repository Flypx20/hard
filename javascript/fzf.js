

(function(w){
	function fzfTop(){
	var isShow = false;
	window.onscroll = function(){
		var oDiv = document.getElementById('box');
		var iTop = document.body.scrollTop || document.documentElement.scrollTop;
		var oHeader = document.querySelector('#box');
		var oPhone = document.querySelectorAll('#box ul li a');
		var oPhoneNav = document.querySelector('.header  .header-nav ul');
		var Nav = document.querySelector('.header .header-nav');
		var oHeaderCarts = document.querySelector('.header-carts');
		var oContainer = document.querySelector('.header .container .bug');
		//console.log(oContainer);
		
		//console.log(oHeaderCarts);
		var timer = null;
		var time = null;
		if(iTop >= 100){
				Nav.style.position = 'fixed';
				Nav.style.top = '60px';
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
								animation(Nav, {height:350});
							};
						}else{
							oPhone[i].onmouseenter = function() {
								clearTimeout(time);
								timer = setTimeout(function(){
									oPhoneNav.style.borderTop = 'none';
									animation(Nav, {height:0});
									animation(oPhoneNav, {opacity:0});
								},500);
							};
						}
				}
				oHeader.onmouseenter = function(){
					console.log("headerenter");
					oHeader.style.background = '#ebebeb';
					clearTimeout(time);
				};
				oHeader.onmouseleave = function(){
					oHeader.style.background = '#f7f7f7';
					oHeader.style.borderBottom = '1px solid #dadada';
					timer = setTimeout(function(){
					oPhoneNav.style.borderTop = 'none';
						animation(Nav, {height:0});
						animation(oPhoneNav, {opacity:0});
					},500);
				};
				Nav.onmouseenter = function(){
					oHeader.style.background = '#ebebeb';
					oHeader.style.borderBottom = 'none';
					clearTimeout(timer);
				};
				Nav.onmouseleave = function(){
					console.log('navleave::saaa');
					oHeader.style.background = '#f7f7f7';
					oHeader.style.borderBottom = '1px solid #dadada';
					time = setTimeout(function(){
					oPhoneNav.style.borderTop = 'none';
						animation(Nav, {height:0});
						animation(oPhoneNav, {opacity:0});
					},500);
				};
				oContainer.onmouseenter = function(){
					
					clearTimeout(time);
					console.log('Header');
					
				};
				isShow = true;
			}
		}else{
			
			Nav.style.position = 'position';
			Nav.style.top = '189px';
			if(isShow){
				

				animation(oHeaderCarts,{opacity:0});
				animation(oDiv,{height:0});

				isShow = false;
			}
			
		}
	};
}
w.fzfTop = fzfTop;
})(window);
(function(w){
	function fzfHeaderNav(){
	var oHeader = document.querySelector('.header');
	var oPhone = document.querySelectorAll('.header  .phone-nav a');
	var oPhoneNav = document.querySelector('.header  .header-nav ul');
	var oNav = document.querySelector('.header .header-nav');
	var timer = null;
	var time = null;
	for (var i = 0; i < oPhone.length - 1; i++) {
		if (i == 1) {
			oPhone[i].onmouseenter = function() {
				clearTimeout(time);
				clearTimeout(timer);
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
w.fzfHeaderNav = fzfHeaderNav;
})(window);
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
		},300);
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
function fzfSearch(){
	var oIput = document.querySelector('.header .search-bar input');
	//console.log(oIput);
	var oDiv = document.querySelector('.header .search-bar div');
	//console.log(oDiv);
	var oSearchContent = document.querySelector('.header .search-content');
	//console.log(oSearchContent);
	var timer = null;
	oIput.onfocus = function(){
		clearTimeout(timer);
		oDiv.style.display = 'none';
		oSearchContent.style.display = 'block';
		oIput.placeholder = '请输入商品名称';
	};
	oIput.onblur = function(){
		oDiv.style.display = 'block';
		oSearchContent.style.display = 'none';
		oIput.placeholder = '';
	};
	oIput.oninput = function(){
		timer=setTimeout(function(){
			oDiv.style.display = 'none';
			oSearchContent.style.display = 'none';
			oIput.placeholder = '';
		},300);

	};
}
function fzfGood(){
	var aCheck = document.querySelectorAll('.check a');
	//console.log(aCheck);
	for (var i = 0; i < aCheck.length; i++) {
		aCheck[i].index = i;
		aCheck[i].onclick = function(){
			for (var j = 0; j < aCheck.length; j++) {
				aCheck[j].className = '';
			}
			this.className = 'active';
			recive(this.index);
		};
	}
	function recive(index){
		var oImg = document.querySelectorAll('.good .img img');
		//console.log(oImg);
		var Datas = fzfData[index];
		for (var i = 0; i < Datas.length; i++) {
				oImg[i].src = Datas[i].img;
		}
	}
}
fzfHeaderNav();
fzfTop();
fzfDownload();
fzfCart();
fzfCart2();
fzfSearch();
fzfGood();
