(function(w){
	
	w.transformCss = function(node,name,vlaue){
			//创建对象：保存 名值对
			if(!node.transform){
				node.transform = {};
//				console.log(node.transform)
			}
//			var obj = {};
			
			//写
			if(arguments.length > 2){
				//名值对 塞到对象中				
				node.transform[name] = vlaue; //{translateX: 200, scale: 0.5}
				
				var result = '';
				//枚举对象中每一个属性名
				for(var i in node.transform){
					
					switch (i){
						case 'translateX':
						case 'translateY':
						case 'translate':
						    result += i +'('+ node.transform[i] +'px) ';
							break;
						case 'scaleX':
						case 'scaleY':
						case 'scale':
						    result += i +'('+ node.transform[i] +') ';
							break;
						case 'rotate':
						case 'skewX':
						case 'skewY':
						case 'skew':
						    result += i +'('+ node.transform[i] +'deg) ';
							break;
					}
					
				}
			
				
				node.style.transform = result;
				
			}else{
				//读
				if(node.transform[name] == undefined){
					//读
					if(name == 'scale' || name == 'scaleX' || name == 'scaleY'){
						value = 1;
					}else{
						//rotate,skew ,translate
						value = 0;
					}
					
				}else{
					//正常  写 -- 读
					value = node.transform[name];
				}
				
				return value;
			}
			
			
		}
		
	
})(window);
