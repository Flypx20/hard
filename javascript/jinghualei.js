// 刘向明
	
	//抚摸手机时出现的下拉列表
	(function(w){
		function shouji(){
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
		}
		w.shouji=shouji;
	})(window);
	//滚动式出现的导航栏
	(function(w){
		function daohanglan(){
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
		}
		w.daohanglan=daohanglan;
	})(window);
	//购物车列表
	(function(w){
		function gouwuche(){
			var oGouwuche=document.querySelector('.top .contain .gouwuche');
			var oGouwucheBox=document.querySelector('.top .contain .gouwuche-list');
			var timer=null;
			clearTimeout(timer);
			oGouwuche.onmouseover = function(){
				clearTimeout(timer);
				oGouwucheBox.style.display = 'block';
				animation(oGouwucheBox,{'opacity':100});
				// animation(oGouwucheBox,{'height':314});
			};
			oGouwuche.onmouseout = function(){
				timer=setTimeout(function(){
				oGouwucheBox.style.display = 'none';
				animation(oGouwucheBox,{'opacity':0});
				// animation(oGouwucheBox,{'height':0});
				},100);
			}
			oGouwucheBox.onmouseover = function(){
				clearTimeout(timer);
				oGouwucheBox.style.display = 'block';
				animation(oGouwucheBox,{'opacity':100});
				// animation(oGouwucheBox,{'height':314});
			};
			oGouwucheBox.onmouseout = function(){
				timer=setTimeout(function(){
				oGouwucheBox.style.display = 'none';
				animation(oGouwucheBox,{'opacity':0});
				// animation(oGouwucheBox,{'height':0});
				},100);
			}
		}
		w.gouwuche=gouwuche;
	})(window);
	//分类列表
	(function(w){
		function zhuti(){
			var aA=document.querySelectorAll('.fenlei .fenleili a');
			for(var i=0;i<aA.length;i++){
				aA[i].index=i;
				aA[0].className='active';
				init(0);
				aA[i].onclick = function(){
					for(var j=0;j<aA.length;j++){
						aA[j].className='';
					}
					this.className='active';
					init(this.index);
				}
			}
		function init(index){
				var oUl=document.querySelector('.zhuti #zhutibox .zhutiul');
				var data=zhuTiData[index];
				if(!data){
					return ;
				}
				oUl.innerHTML='';
				for(var i=0;i<data.length;i++){
					var oLi=document.createElement('li');
					var oUl1=document.createElement('ul');
					oUl1.className='zhutiul';
					if(data[i].biaoqian){
						var oLi1=document.createElement('li');
						if(data[i].biaoqian=='直降'){
							oLi1.className='biaoqian zhijiang';
						}else{
							oLi1.className='biaoqian';
						}
						oLi1.innerHTML=data[i].biaoqian;
						oUl1.appendChild(oLi1);
					}
					var oLi2=document.createElement('li');
					var oImg=document.createElement('img');
					oImg.src=data[i].src;
					var oLi3=document.createElement('li');
					var oP1=document.createElement('p');
					oLi3.className='mingchen';
					oP1.innerHTML=data[i].banben;
					var oLi4=document.createElement('li');
					var oP2=document.createElement('p');
					oLi4.className='jieshao';
					oP2.innerHTML=data[i].shuoming;
					var oLi5=document.createElement('li');
					var oDiv1=document.createElement('div');
					oLi5.className='input';
					oDiv1.className='wai';
					var oLi6=document.createElement('li');
					var oP3=document.createElement('p');
					oLi6.className='jiage';
					oP3.innerHTML=data[i].jiage;
					var oLi7=document.createElement('li');
					var oSpan=document.createElement('span');
					oSpan.innerHTML='查看详情';
					oLi7.className='yincang';
					oUl.appendChild(oLi);
					oLi.appendChild(oUl1);
					oUl1.appendChild(oLi2);
					oUl1.appendChild(oLi3);
					oUl1.appendChild(oLi4);
					oUl1.appendChild(oLi5);
					oUl1.appendChild(oLi6);
					oUl1.appendChild(oLi7);
					oLi2.appendChild(oImg);
					oLi3.appendChild(oP1);
					oLi4.appendChild(oP2);
					oLi5.appendChild(oDiv1);
					oLi6.appendChild(oP3);
					oLi7.appendChild(oSpan);

				}

			}
		}
		w.zhuti=zhuti;
	})(window);
	//搜索框
	(function(w){
		function sousuo(){
			$('.sousuo input').on('focus',function(){
				$('.sousuo-box').show();
				$('.sousuo a').hide();
				$('.sousuo input').attr('placeholder','请输入搜索的商品')
				$('.sousuo input').css({opacity:0.2})
			});
			$('.sousuo input').on('blur',function(){
				$('.sousuo-box').hide();
				$('.sousuo a').show();
				$('.sousuo input').removeAttr('placeholder','请输入搜索的商品');
			});
		}
		w.sousuo=sousuo;
	})(window);
	//得先把函数传到window上，调用时才能找到函数！！！
	shouji();
	daohanglan();
	gouwuche();
	zhuti();
	sousuo();

	



	
