
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
		}
	}else{
		if(isShow){
			animation(oDiv,'height',0);
			isShow=false;
		}
	}
}
gouWu();
//购物车
function gouWu(){
	var oGouB=document.querySelector(".divb");
	var oGouW=document.querySelector(".topr .a2");
	var timer=null;
	oGouW.onmouseenter=function(){
		clearTimeout(timer);
		oGouB.style.display='block';
	}
	oGouW.onmouseleave=function(){
		timer=setTimeout(function(){
			oGouB.style.display='none';
		},500)
	}
	oGouB.onmouseenter=function(){
		clearTimeout(timer);
	}
	oGouB.onmouseleave=function(){
		oGouB.style.display="none";
	}
}
// 下拉列表
headerList1();
function headerList1(){
	var oPhoneLi=document.getElementById('phoneA');
	var oHeaderList=document.getElementById('headerList');
	var timer=null;
	oPhoneLi.onmouseenter=function(){
		clearTimeout(timer);
		oHeaderList.style.display="block";
	}
	oPhoneLi.onmouseleave=function(){
		timer=setTimeout(function(){
			oHeaderList.style.display="none";
		},300)
	}
	oHeaderList.onmouseenter=function(){
		clearTimeout(timer);
	}
	oHeaderList.onmouseleave=function(){
		oHeaderList.style.display="none";
	}
}
foundList();
// 搜索框
function foundList(){
	var oInput=document.getElementById('txt');
	var oSli1=document.getElementById('sli1');
	var oSli2=document.getElementById('sli2');
	var oSl=document.getElementById('sL');
	var oSpan=document.getElementById('sSpan');
	var timer=null;
	oInput.onfocus=function(){
		clearTimeout(timer);
		oSli1.style.display="none";
		oSli2.style.display="none";
		oSl.style.display="block";
		oSpan.style.display='block';
		oInput.style.border='none';


	}
	oInput.onblur=function(){
		setTimeout(function(){
			oSli1.style.display="block";
			oSli2.style.display="block";
			oSl.style.display="none";
		},300)
	}
	oSl.onmouseenter=function(){
		clearTimeout(timer);
	}
	document.onclick=function(){
		oSl.style.display='none';
		oSpan.style.display='none';
		oSli1.style.display="block";
		oSli2.style.display="block";
		
	}
}