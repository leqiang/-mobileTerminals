###scale1滚动条高度的系数
	滚动条高度/视口高度 = 视口高度/内容高度

	scale1 = 视口高度/内容高度


###scale2内容区与滚动条位移距离的系数

	滚动条的偏移量/(视口高度-滚动条高度) = 内容偏移量/(内容高度-视口高度)
	
	==> 滚动条的偏移量 = 内容偏移量* ((视口高度-滚动条高度)/(内容高度-视口高度))
	
		内容偏移量 = 滚动条的偏移量 / ((视口高度-滚动条高度)/(内容高度-视口高度))
	







