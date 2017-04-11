(function(w){
	
	w.frag = function(node,imgNode){
		//定义鼠标和元素位置
		var startPoint = {left:0,top:0};
		var elementPoint = {left:0,top:0};
		
		node.onmousedown = function(ev){
			//处理兼容问题
			var ev = ev || event;
			startPoint.left = ev.clientX;
			startPoint.top = ev.clientY;
			
			elementPoint.left = node.offsetLeft;
			elementPoint.top = node.offsetTop;
			
			//开启全局捕获
			if(node.setCapture){
				node.setCapture();
			};
			
			document.onmousemove = function(ev){
				//处理兼容问题
				var ev = ev || event;
				
				//鼠标现在的位置
				var nowPoint = {left:0,top:0};
				nowPoint.left = ev.clientX;
				nowPoint.top = ev.clientY;
				
				var L = elementPoint.left + (nowPoint.left - startPoint.left);
				var T = elementPoint.top + (nowPoint.top - startPoint.top);
				
				//限定范围与磁性吸附
				if(L < 10){
					L = 0;
				}else if(L > document.documentElement.clientWidth-node.offsetWidth -10){
					L = document.documentElement.clientWidth-node.offsetWidth;
				};
				if(T < 10){
					T = 0;
				}else if(T > document.documentElement.clientHeight - node.offsetWidth -10){
					T = document.documentElement.clientHeight - node.offsetHeight;
				}
				
				
				//确定元素的位置
				node.style.left = L + 'px';
				node.style.top = T + 'px';
				
				//碰撞分析
				var T1 = node.getBoundingClientRect().top;
				var L1 = node.getBoundingClientRect().left;
				var R1 = node.getBoundingClientRect().right;
				var B1 = node.getBoundingClientRect().bottom;
				
				var T2 = imgNode.getBoundingClientRect().top;
				var L2 = imgNode.getBoundingClientRect().left;
				var R2 = imgNode.getBoundingClientRect().right;
				var B2 = imgNode.getBoundingClientRect().bottom;
				
				//满足下边一个条件就不能碰撞上
				// R1<L2  L1>R2  B1<T2  T1>B2
				
				if(R1<L2 || L1>R2 || B1<T2 || T1>B2){
					imgNode.src = 'img/a.png';				
				}else{
					imgNode.src = 'img/b.jpg';	
				}
												
			}
			
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null;
				
				if(document.releaseCapture){
					document.releaseCapture()
				};
			}
			
			//取消事件的默认行为,ie8一下不支持
			return false;
						
		}
		
		
	}
	
	
	
	
})(window);
