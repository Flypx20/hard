// 刘向明
window.onload = function(){
	//抚摸手机是出现的下拉列表
	var oBox = document.getElementById('shouJ');
	var oBtn = document.getElementById('xian');
	var time=null;
	clearTimeout(time);
	oBtn.onmouseover = function(){
		clearTimeout(time);
		animation(oBox,{'height':430});
	}
	oBtn.onmouseout = function(){
		time=setTimeout(function(){
			animation(oBox,{'height':0});
		},50)
	}
	oBox.onmouseover = function(){
		clearTimeout(time);
		animation(oBox,{'height':430});
	}
	oBox.onmouseout = function(){
		time=setTimeout(function(){
			animation(oBox,{'height':0});
		},50)
	}	
	//滚动式出现的导航栏
	window.onscroll = function(){
		var oTop=document.getElementById('jstop');
		var gHeight=document.body.scrollTop || document.documentElement.scrollTop;
		if(gHeight>100){
			animation(oTop,{'height':60});
			oTop.style.top = gHeight+'px';
		}else{
			animation(oTop,{'height':0});
		};
	}
	//购物车列表
	var oGouwuche=document.querySelector('.top .contain .gouwuche');
	var oGouwucheBox=document.querySelector('.top .contain .gouwuche-list');
	var timer=null;
	clearTimeout(timer);
	oGouwuche.onmouseover = function(){
		clearTimeout(timer);
		oGouwucheBox.style.display = 'block';
	};
	oGouwuche.onmouseout = function(){
		timer=setTimeout(function(){
		oGouwucheBox.style.display = 'none'
		});
	}
	oGouwucheBox.onmouseover = function(){
		clearTimeout(timer);
		oGouwucheBox.style.display = 'block';
	};
	oGouwucheBox.onmouseout = function(){
		timer=setTimeout(function(){
		oGouwucheBox.style.display = 'none';
		});
	}
}



	
