###margin
	1、上下外边距会叠压；
	2、父子级包含的时候子级的margin-top会传递给父级
			子元素的margin-top失效,
			父元素的margin-top变为子元素margin-top的值(父元素的margin-top比较小),
			父元素的margin-top不变(父元素的margin-top比较大),
		解决margin传递(各浏览器,包括ie,margin传递:上下margin会传递)			
			解决办法:overflow:hidden;父级加边框
                                    在IE6下解决margin传递要触发haslayout
                        在IE6下父级有边框的时候，子元素的margin值消失
				解决办法:触发父级的haslayout
	3、	
		浮动会使左右margin auto失效（只会使左右margin auto失效  上下margin恢复正常  上面2的情况会消失）
		absolute,fixed会使左右margin auto失效;relative不会（只会使左右margin auto失效  上下margin恢复正常  上面2的情况会消失）
		
	
	4.IE6下的双边距BUG(三个条件:块元素;浮动了;存在margin)
		在IE6下，块元素有浮动和横向margin的时候，横向的margin值会被放大成两倍
			!!!margin-right 一行右侧第一个元素有双边距	
			!!!margin-left 一行左侧第一个元素有双边距
		解决办法: display:inline;
				(我们发现,块级元素在转换成inline时,给其设置高宽是有效的)
				
