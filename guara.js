(function(w) {
	var $utils = {
		parseInt: function (value) {
			if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
			{
				return Number(value);
			}
			return NaN;
		},
		isEmpty: function() {
			var len = arguments.length;
			if(len == 0)
			{
				return true;
			}
			if(len == 1)
			{
				var str = arguments[0];
				return !str || str.length == 0 || $.trim(str) === "";
			}

			for (var i = 0; i < len; i++)
			{
				var str   = arguments[i];
				var empty = this.isEmpty(str);
				if(empty)
				{
					return true;
				}
			}
			return false;
		},
		randomString: function(size) {
		    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
		    var str = '';
		    for (var i = 0; i < size; i++) 
		    {
		        str += chars[Math.floor(Math.random() * chars.length)];
		    }
		    return str;
		},
	};

	window.$g = {
		utils: $utils	
	};

}(window));
