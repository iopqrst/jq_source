(function(window, undefined) {

	var jQuery = function(selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init(selector, context, rootjQuery);
	};

	jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		init: function() {},
		size: function() {},
		toArray: function() {}
			//...
	};

	jQuery.fn.init.prototype = jQuery.fn;

	window.jQuery = window.$ = jQuery;

})(window);