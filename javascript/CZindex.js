window.onload=function(){
	// navscroll();
	// function navscroll(){
	// 	var show=false;
	// 	window.onscroll=window.onresize=window.onload=function(){
	// 		var oHead0=document.getElementById('head0');
	// 		var oSection=document.getElementById('section');
	// 		var iTop=document.body.scrollTop||document.documentElement.scrollTop;
	// 		var iHeight=window.innerHeight;
	// 		if(iTop>140){
	// 			if(!show){
	// 				animation(oHead0,{'height':'100'},false);
	// 				oSection.style.marginTop='150px';
	// 				show=true;
	// 			}
	// 		}else{
	// 			if(show){
	// 				animation(oHead0,{'height':'0'},false);
	// 				oSection.style.marginTop='0px';
	// 				show=false;
	// 			}
	// 		}
	// 	}
		/*购物车*/
		(function(w){
				var oCart=document.querySelector('.b2').children[0];
				var oCartBox=document.querySelector('.nav-box');
				oCart.onmouseover=function(){
					animation(oCartBox,{'height':300},false);
				}
				oCart.onmouseout=function(){
					animation(oCartBox,{'height':0},false);
				}
		})(window);

		/*锤子轮播图*/
		function Carousel(option){
		//罗列属性
		//获取容器
		this.oBox = document.getElementById(option.id);
		this.oImgUl = null;
		this.aImg = option.aImg;
		this.width = option.width;
		this.height = option.height;
		this.leftBtn = null;
		this.rightBtn = null;
		this.oBottomBtn = null;
		this.now = 0;
		this.lunbotime=option.lunbotime;
		//初始化
		this.init();
		//绑定事件
		this.bindEvent();
		if(this.lunbotime){
			this.lunbo();
		}
	}
	Carousel.prototype.init = function(){
		//创建方图片的ul容器
		this.oBox.style.width = this.width + 'px';
		this.oBox.style.height = this.height + 'px';
		this.oBox.style.position = 'relative';
		this.oImgUl = document.createElement('ul');
		for(var i = 0;i<this.aImg.length;i++){
			var oLi = document.createElement('li');
			var oImg = document.createElement('img');
			oLi.style.position = 'absolute';
			oLi.style.top = 0;
			oLi.style.left = 0;
			//默认显示第一张
			if(i==0){
				oLi.style.opacity = 1;
				oLi.style.zIndex = 50;
			}else{
				oLi.style.opacity = 0.5;
				oLi.style.zIndex = 0;
			}
			oImg.style.width = this.width + 'px';
			oImg.style.height = this.height + 'px';
			oImg.src = this.aImg[i];
			oLi.appendChild(oImg);
			this.oImgUl.appendChild(oLi);
		}
		//左右按钮
		this.leftBtn = document.createElement('span');
		this.rightBtn = document.createElement('span');
		this.leftBtn.className = 'leftBtn';
		this.rightBtn.className = 'rightBtn';
		this.leftBtn.style.zIndex = 999;
		this.rightBtn.style.zIndex = 999;
		this.leftBtn.innerHTML = "&lt;";
		this.rightBtn.innerHTML = "&gt;";
		
		//底部按钮
		this.oBottomBtn = document.createElement('ul');
		this.oBottomBtn.className = 'bottomBtn';
		this.oBottomBtn.style.zIndex = 999; 
		for(var i = 0;i<this.aImg.length;i++){
			var oLi = document.createElement('li');
			if(i == 0){
				oLi.className = 'active';
			}
			this.oBottomBtn.appendChild(oLi);
		}
		//把按钮添加到到顶层父容器中
		this.oBox.appendChild(this.leftBtn);
		this.oBox.appendChild(this.rightBtn);
		
		this.oBox.appendChild(this.oBottomBtn);
		//给底部按钮容器添加ml使其水平居中
		this.oBottomBtn.style.marginLeft = - this.oBottomBtn.offsetWidth * 0.5 + 'px';
		//把ul容器添加到顶层父容器中
		this.oBox.appendChild(this.oImgUl);
	}
	Carousel.prototype.bindEvent = function(){
		//显示下一张
		this.rightBtn.onclick = function(){
			this.now++;
			if(this.now >=  this.oImgUl.children.length){
				this.now = 0;
			}
			this.tab();
		}.bind(this);
		//显示上一张
		this.leftBtn.onclick = function(){
			this.now--;
			if(this.now < 0){
				this.now = this.oImgUl.children.length - 1;
			}
			this.tab();
		}.bind(this);
		var _left=this
		for(var i=0;i<this.oBottomBtn.children.length;i++){
			this.oBottomBtn.children[i].index=i; 
			// console.log(this.oImgUl.children[i]);
			this.oBottomBtn.children[i].onclick = function(){
				// console.log(this);
				_left.now=this.index;
				_left.tab();					
			}
		}		
	}
	Carousel.prototype.lunbo=function(){
		this.dingshiqi = setInterval(this.rightBtn.onclick,this.lunbotime);
		this.oBox.onmouseover = function(){
			clearInterval(this.dingshiqi);
		}.bind(this)
		this.oBox.onmouseout = function(){
			this.dingshiqi=setInterval(this.rightBtn.onclick,this.lunbotime);
		}.bind(this)
	}
	Carousel.prototype.tab = function(){
		//改变所有的li
		for(var i = 0;i<this.oImgUl.children.length;i++){
			this.oImgUl.children[i].style.zIndex = 0;
			this.oImgUl.children[i].style.opacity = 0.5;
			this.oBottomBtn.children[i].className = '';
		}
		//改变当前的li
		this.oImgUl.children[this.now].style.zIndex = 50;
		// this.oImgUl.children[this.now].style.opacity = 1;
		animation(this.oImgUl.children[this.now],{opacity:100},false);
		this.oBottomBtn.children[this.now].className = 'active';				
	}
	new Carousel({
		id:'div1',
		aImg:[
			'./images/shouye1.png',
			'./images/shouye2.png',
			'./images/shouye3.png',
			
		],
		width:1226,
		height:480,
		lunbotime:3000
	});
	/*search搜索框*/
	search();
	function search(){
		var oIput=document.querySelector('.headright').children[0];
		var oSpan=document.querySelector('.headright').getElementsByTagName('span');
		var oDiv=document.querySelector('.headright').getElementsByTagName('div')[0];
		oIput.onfocus=function(){
			oSpan[0].style.display='none';
			oSpan[1].style.display='none';
			oDiv.style.display='block';
		}
		oIput.onblur=function(){
			oSpan[0].style.display='block';
			oSpan[1].style.display='block';
			oDiv.style.display='none';
			}
		}

		/*导航手机*/
		(function(w){
			var navbox=document.querySelector('.nav-content');
			var navshouji=document.querySelector('.phone a');
			var loading=document.querySelector('.loading');
			var timer=null;
			navshouji.onmouseover=function(){
				clearTimeout(timer);
				navbox.style.borderTop='1px solid #ccc';
				animation(navbox,{'height':250},false,function(){
					loading.style.display='none'
				})
			}
			navshouji.onmouseout=function(){
				timer=setTimeout(function(){
					animation(navbox,{'height':1},false,function(){
					navbox.style.borderTop='none';
					})
				},500)
			}
			navbox.onmouseover=function(){
				clearTimeout(timer);
			}
			navbox.onmouseout=function(){
				timer=setTimeout(function(){
					animation(navbox,{'height':'0'},false);
				},500)
			}
		})(window);
		/*切换选项卡*/
		(function(w){
			$(function(){
				var $btn=$('.qiehuan');
				var Lbtn=$btn.get(1);
				var Lbtn1=$btn.get(3);
				var Rbtn=$btn.get(0);
				var Rbtn1=$btn.get(2);
				var box=$('.hot2son');
				
				var oBox=box.get(0);
				var oBox1=box.get(1);
				Lbtn.onclick=function(){
					animation(oBox,{'marginLeft':0},false)
				}
				Rbtn.onclick=function(){
					animation(oBox,{'marginLeft':-1224},false)
				}
				Lbtn1.onclick=function(){
					animation(oBox1,{'marginLeft':0},false)
				}
				Rbtn1.onclick=function(){
					animation(oBox1,{'marginLeft':-1224},false)
				}
			})
		})(window);
		/*切换图片*/
			var TPxiabiao=$('.li').index();
			console.log('11::',TPxiabiao);
		$(function(){
			$('.li').delegate('ul','mouseover',function(){
				var $this=$(this);
				$this.addClass('active1');
				var qita=$this.siblings();
				// console.log(qita)
				qita.removeClass('active1');
				/*鼠标放在小圆点上实现CLASS*/
				var xiabiao=$this.index();
				var oLi=$('.li');
				var father=$this.get(0).parentNode.parentNode;
				/*获取当前小圆点的父元素的父元素*/
				var img=father.children;
				/*获取图片一级的所有元素*/
				var $img=$(img);
				/*把DOMimg转换为jquery，为了用jquery的方法*/
				console.log($img);
				var dangqian=$img.eq(xiabiao);
				/*鼠标放在第几个小圆点就和小圆点下标相对应的的图片出来*/
				dangqian.addClass('block');
				dangqian.siblings().removeClass('block')
				/*出来后给其他图片display：none*/
			})
		})
	}
