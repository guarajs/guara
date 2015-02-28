(function(w) {

	/*
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
	 */
	if(!String.prototype.endsWith)
	{
	    Object.defineProperty(String.prototype, 'endsWith', {
	        enumerable: false,
	        configurable: false,
	        writable: false,
	        value: function (searchString, position) {
	            position = position || this.length;
	            position = position - searchString.length;
	            var lastIndex = this.lastIndexOf(searchString);
	            return lastIndex !== -1 && lastIndex === position;
	        }
	    });
	}

	if (!String.prototype.startsWith)
	{
		Object.defineProperty(String.prototype, 'startsWith', {
			enumerable: false,
			configurable: false,
			writable: false,
			value: function (searchString, position) {
				position = position || 0;
				return this.lastIndexOf(searchString, position) === position;
			}
		});
	}

	if(!String.prototype.firstLetterToUpperCase)
	{
	    Object.defineProperty(String.prototype, 'firstLetterToUpperCase', {
	        enumerable: false,
	        configurable: false,
	        writable: false,
	        value: function (input) {
	        	return this.charAt(0).toUpperCase() + this.slice(1);
	        }
	    });
	}

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
