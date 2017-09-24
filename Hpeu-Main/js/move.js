window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	
	oDiv.onmouseover=function ()
	{
		oDiv.style.right=0;
		oDiv.style.transition="all .3s linear";
	}
	
	oDiv.onmouseout=function ()
	{
		oDiv.style.right=(-130)+'px';
		oDiv.style.transition="all .3s linear";
	}
}
/*var timer=null;

function startMove(iTarget)
{
	var oDiv=document.getElementById('div1');
	
	clearInterval(timer);
	timer=setInterval(function (){
		var iSpeed=0;
		
		if(oDiv.offsetLeft<iTarget)
		{
			iSpeed=10;
		}
		else
		{
			iSpeed=-10;
		}
		
		if(oDiv.offsetLeft==iTarget)
		{
			clearInterval(timer);
		}
		else
		{
			oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
		}
	}, 30);
}*/
