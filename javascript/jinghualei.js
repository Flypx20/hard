// 刘向明
function animation(obj,attr,iTarget,sudu){
	clearInterval(obj.time);
	obj.time = setInterval(function(){
		var speed=0;
		var dqz=parseFloat(getComputedStyle(obj,true)[attr]);
		if(attr == 'opacity'){
			dqz=dqz*100;
		}
		if (!sudu) {
			if(dqz<=iTarget){
				speed= 5;
			}else{
				speed= -5;
			}
			if(Math.abs(iTarget-dqz)<Math.abs(speed)){
				clearInterval(obj.time);
				if(attr == 'opacity'){
					obj.style[attr]=iTarget/100;
				}else{
					obj.style[attr] = iTarget+'px';
				}
			}else{
				if(attr == 'opacity'){
					obj.style[attr]=(dqz+speed)/100;
				}else{
					obj.style[attr] = dqz+speed+'px';
				}
			}
		}else{
			speed=(iTarget-dqz)/10;
			speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if(speed == 0){
				clearInterval(time);
			}else{
				if (attr=='opacity') {
					obj.style[attr]= (dqz+speed)/100;
				}else{
					obj.style[attr] = dqz+speed+'px';
				}						
			}
		}					
	},30)
}
window.onscroll = window.onload = function(){
	var oBox = document.getElementById('shouJ');
	var oBtn = document.getElementById('xian');
	var time=null;
	clearInterval(time);
	oBtn.onmouseover = function(){
		clearTimeout(time);
		oBox.style.display = 'block';
	}
	oBtn.onmouseout = function(){
		time=setTimeout(function(){
			oBox.style.display = 'none';
		},500)
	}
	oBox.onmouseover = function(){
		clearTimeout(time);
		oBox.style.display = 'block';
	}
	oBox.onmouseout = function(){
		time=setTimeout(function(){
			oBox.style.display = 'none';
		},500)
	}
	var oTop=document.getElementById('jstop');
	var gHeight=document.body.scrollTop || document.documentElement.scrollTop;
	if(gHeight>100){
		oTop.style.display='block';
		oTop.style.top = gHeight+'px';
	}else{
		oTop.style.display='none';
	}
}