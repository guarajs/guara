define(function () {
	
	var _map = null;

	function _loadMap() {
		/* Generated automatically on build. Don't edit !! */
		return {};
	}
	
	var gl = {

		load: function (name, require, load, config) {
			var found = _map != null && _map[name] !== undefined; 
			if(found)
			{
				name = _map[name];  
			}
			
			require([name], function (value) {
				load(value);
	        });
		}
	};
	
	_map = _loadMap();
	
	return gl;
});