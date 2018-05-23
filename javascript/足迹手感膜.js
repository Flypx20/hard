function animation(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed=0;
		var curr=parseFloat(getComputedStyle(obj,false)[attr]);
		if(curr>iTarget){
					iSpeed=-20;
				}else{
					iSpeed=20;
				}
		if(Math.abs(iTarget-curr)<=Math.abs(iSpeed)){
			clearInterval(obj.timer);
			if(attr=='opacity'){
				obj.style[attr]=iTarget/100;
			}else{
				obj.style[attr]=iTarget+'px';	
			}		
		}else{
			if(attr=='opacity'){
				obj.style[attr]=(curr+iSpeed)/100; 
			}else{
				obj.style[attr]=curr+iSpeed+'px';	
			}
		}
	},30)
}
var isShow=false;	
window.onscroll=function(){
	var oDiv=document.getElementById('top-header');
	var oLi=oDiv.getElementsByTagName('li');
	var iTop=document.body.scrollTop || document.documentElement.scrollTop;
	if(iTop>=94){
		if(!isShow){
			animation(oDiv,'height',60);
			isShow=true;
			// oDiv.style.borderBottom="1px solid #ccc";
			// oDiv.style.boxShdow="0px 2px 2px #ccc";
		}
	}else{
		if(isShow){
			animation(oDiv,'height',0);
			isShow=false;
		}
	}
}