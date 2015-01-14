jQuery.fn = jQuery.prototype = {
	init: function(selector, context, rootjQuery) {
		//hzq1、 $(""), $(null), $(undefined), $(false)

		//2、$('#div1')、$('.box')、 $('div')、$('#div1 div.box')
		//3、$('<li>')、$('<li>1111</li><li>2222</li>')

		if (true) {
			//$('<li>')、$('<li>1111</li><li>2222</li>')

			match = [null, '<li>', null];
			match = [null, '<li>1111</li><li>2222</li>', null];
		} else {
			//$('#div1') 和 $('.box')、 $('div')、$('#div1 div.box')
			//$('<li>hello') 可以尝试一下会创建一个什么样的标签
			
			match = null; // $('.box')、 $('div')、$('#div1 div.box')
			
			match = ['#div1', null, 'div1']; //$('#div1')
			
			match = ['<li>hello', '<li>', null]; //$('<li>hello')
		}

		//4、$(this)、 $(document)
		//5、$(function(){})
		//6、$([])、$({})
	}
};