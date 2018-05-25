function animation(obj,opation,isLinear,fnEnd){
	clearInterval(obj.timer);
	var iSpeed=0;
	obj.timer=setInterval(function(){
		var isStopAll=true;
		for(attr in opation){
			var curr=parseFloat(getComputedStyle(obj,false)[attr]);
			var isStop=false;
			if(attr=='opacity'){
				curr=Math.round(curr*100)
			}
			if(isLinear){
				if(curr>opation[attr]){
					iSpeed=-10;
				}else{
					iSpeed=10;
				}
				if(Math.abs(opation[attr]-curr)<=Math.abs(iSpeed)){
					isStop=true;
				}else{
					isStopAll=false;
				}					
			}else{
				iSpeed=(opation[attr]-curr)/5;	
				iSpeed=iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					isStop=true;
				}else{					
					isStopAll=false;
				}
			}
			if(isStop){
				if(isLinear){
					if(attr=='opacity'){
						obj.style[attr]=opation[attr]/100;
					}else{
						obj.style[attr]=opation[attr]+'px';	
					}		
				}	
			}else{
				if(attr=='opacity'){
					obj.style[attr]=(curr+iSpeed)/100 ;
				}else{
					obj.style[attr]=curr+iSpeed+'px';
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.timer);
			if(fnEnd){
				fnEnd()
			}
		}
	},30)
}
function Carousel(option){
	this.oBox=document.getElementById(option.id);
	this.oImgUl=null;
	this.aImg=option.aImg;
	this.width=option.width;
	this.height=option.height;
	this.leftBtn=null;
	this.rightBtn=null;
	this.oBottomBtn=null;
	this.playDuration=option.playDuration;
	this.now=0;
	this.init();
	this.bindEvent();
	if(this.playDuration){
		this.autoPlay();
	}
}
Carousel.prototype.init=function(){
	this.oBox.style.width=this.width+'px';
	this.oBox.style.height=this.height+'px';
	this.oBox.style.position='relative';
	this.oImgUl=document.createElement('ul');
	for(var i=0;i<this.aImg.length;i++){
		var oLi=document.createElement('li');
		var oImg=document.createElement('img');
		oLi.style.position='absolute';
		oLi.style.top=0;
		oLi.style.left=0;
		if(i==0){
			oLi.style.opacity=1;
			oLi.style.zIndex=50;
		}else{
			oLi.style.opacity=0.5;
			oLi.style.zIndex=0;
		}
		oImg.style.width=this.width+'px';
		oImg.style.height=this.height+'px';
		oImg.src=this.aImg[i];
		oLi.appendChild(oImg);
		this.oImgUl.appendChild(oLi);
	}
	this.leftBtn=document.createElement('span');
	this.rightBtn=document.createElement('span');
	this.leftBtn.className='leftBtn';
	this.rightBtn.className='rightBtn';
	this.leftBtn.style.zIndex=999;
	this.rightBtn.style.zIndex=999;
	this.leftBtn.innerHTML="&lt;";
	this.rightBtn.innerHTML="&gt;";
	this.oBottomBtn=document.createElement('ul');
	this.oBottomBtn.className='bottomBtn';
	this.oBottomBtn.style.zIndex=999; 
	for(var i=0;i<this.aImg.length;i++){
		var oLi=document.createElement('li');
		if(i==0){
			oLi.classNam='active';
		}
		this.oBottomBtn.appendChild(oLi);
	}
	this.oBox.appendChild(this.leftBtn);
	this.oBox.appendChild(this.rightBtn);
	this.oBox.appendChild(this.oBottomBtn);
	this.oBottomBtn.style.marginLeft=-this.oBottomBtn.offsetWidth*0.5+'px';
	this.oBox.appendChild(this.oImgUl);
}
Carousel.prototype.bindEvent=function(){
	this.rightBtn.onclick=function(){
		this.now++;
		if(this.now>= this.oImgUl.children.length){
			this.now=0;
		}
		this.tab();
	}.bind(this);
	this.leftBtn.onclick=function(){
		this.now--;
		if(this.now<0){
			this.now=this.oImgUl.children.length-1;
		}
		this.tab();
	}.bind(this);
	var _self=this;
	for(var i=0;i<this.oBottomBtn.children.length;i++){
		this.oBottomBtn.children[i].index=i;
		this.oBottomBtn.children[i].onclick=function(){
			_self.now=this.index;
			_self.tab();
		}
	}	
}
Carousel.prototype.tab=function(){
	for(var i=0;i<this.oImgUl.children.length;i++){
		this.oImgUl.children[i].style.zIndex=0;
		this.oImgUl.children[i].style.opacity=0.5;
		this.oBottomBtn.children[i].className='';
	}
	this.oImgUl.children[this.now].style.zIndex=50;
	this.oBottomBtn.children[this.now].className='active';
	animation(this.oImgUl.children[this.now],{opacity:100});				
}
Carousel.prototype.autoPlay=function(){
	var timer=null;
	timer=setInterval(this.rightBtn.onclick,this.playDuration);
	this.oBox.onmouseover=function(){
		clearInterval(timer);
	}
	this.oBox.onmouseout=function(){
		timer=setInterval(this.rightBtn.onclick,this.playDuration);			
	}.bind(this);
}
function Carousel(option){
		this.oBox=document.getElementById(option.id);
		this.oImgUl=null;
		this.aImg=option.aImg;
		this.width=option.width;
		this.height=option.height;
		this.leftBtn=null;
		this.rightBtn=null;
		this.oBottomBtn=null;
		this.now=0;
		this.init();
		this.bindEvent();
	}
	Carousel.prototype.init=function(){
		this.oBox.style.width=this.width+'px';
		this.oBox.style.height=this.height+'px';
		this.oBox.style.position='relative';
		this.oImgUl=document.createElement('ul');
		for(var i=0;i<this.aImg.length;i++){
			var oLi=document.createElement('li');
			var oImg=document.createElement('img');
			oLi.style.position='absolute';
			oLi.style.top=0;
			oLi.style.left=0;
			if(i==0){
				oLi.style.opacity=1;
				oLi.style.zIndex=50;
			}else{
				oLi.style.opacity=0.5;
				oLi.style.zIndex=0;
			}
			oImg.style.width=this.width+'px';
			oImg.style.height=this.height+'px';
			oImg.src=this.aImg[i];
			oLi.appendChild(oImg);
			this.oImgUl.appendChild(oLi);
		}
		this.leftBtn=document.createElement('span');
		this.rightBtn=document.createElement('span');
		this.leftBtn.className='leftBtn';
		this.rightBtn.className='rightBtn';
		this.leftBtn.style.zIndex=999;
		this.rightBtn.style.zIndex=999;
		this.leftBtn.innerHTML="&lt;";
		this.rightBtn.innerHTML="&gt;";
		this.oBottomBtn=document.createElement('ul');
		this.oBottomBtn.className='bottomBtn';
		this.oBottomBtn.style.zIndex=999; 
		for(var i=0;i<this.aImg.length;i++){
			var oLi=document.createElement('li');
			if(i==0){
				oLi.className='active';
			}
			this.oBottomBtn.appendChild(oLi);
		}
		this.oBox.appendChild(this.leftBtn);
		this.oBox.appendChild(this.rightBtn);
		
		this.oBox.appendChild(this.oBottomBtn);
		this.oBottomBtn.style.marginLeft=-this.oBottomBtn.offsetWidth*0.5+'px';
		this.oBox.appendChild(this.oImgUl);
	}
	Carousel.prototype.bindEvent=function(){
		//显示下一张
		this.rightBtn.onclick=function(){
			this.now++;
			if(this.now>=this.oImgUl.children.length){
				this.now= 0;
			}
			this.tab();
		}.bind(this);
		this.leftBtn.onclick=function(){
			this.now--;
			if(this.now<0){
				this.now=this.oImgUl.children.length - 1;
			}
			this.tab();
		}.bind(this);		
	}
	Carousel.prototype.tab=function(){
		for(var i=0;i<this.oImgUl.children.length;i++){
			this.oImgUl.children[i].style.zIndex=0;
			this.oImgUl.children[i].style.opacity=0.5;
			this.oBottomBtn.children[i].className='';
		}
		this.oImgUl.children[this.now].style.zIndex=50;
		this.oImgUl.children[this.now].style.opacity=1;
		this.oBottomBtn.children[this.now].className='active';				
	}