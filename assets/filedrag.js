if(window.FileReader) { 
	var drop; 
	addEventHandler(window, 'load', function() {
		var drop   = window;
		//var list   = document.getElementById('list');

		function cancel(e) {
			if (e.preventDefault) { e.preventDefault(); }
			return false;
		}

		// Tells the browser that we *can* drop on this target
		addEventHandler(drop, 'dragover', cancel);
		addEventHandler(drop, 'dragenter', cancel);

		addEventHandler(drop, 'drop', function (e) {
			e = e || window.event; // get window.event if e argument missing (in IE)   
			if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

			var dt    = e.dataTransfer;
			var files = dt.files;
			for (var i=0; i<files.length; i++) {
				var file = files[i];
				var reader = new FileReader();

				//attach event handlers here...

				reader.readAsDataURL(file);
				addEventHandler(reader, 'loadend', function(e, file) {
					try {
						var bin = this.result;
						var text = atob(bin.substr(bin.indexOf(",") + 1, bin.length - bin.indexOf(",") - 1));
						var data = jQuery.parseJSON(text);
						if (!data || !data.name || data.name == "") {
							alert("File is not of correct type, or is corrupted!");
							return false;
						}

						project = data;
						displayMain();
					} catch(e) {						
						alert("File is not of correct type, or is corrupted!");
						return false;
					}
				}.bindToEventHandler(file));
			}
			return false;
		});
		Function.prototype.bindToEventHandler = function bindToEventHandler() {
			var handler = this;
			var boundParameters = Array.prototype.slice.call(arguments);
			//create closure
			return function(e) {
				e = e || window.event; // get window.event if e argument missing (in IE)   
				boundParameters.unshift(e);
				handler.apply(this, boundParameters);
			}
		};
	});
}
function addEventHandler(obj, evt, handler) {
	if(obj.addEventListener) {
		// W3C method
		obj.addEventListener(evt, handler, false);
	} else if(obj.attachEvent) {
		// IE method.
		obj.attachEvent('on'+evt, handler);
	} else {
		// Old school method.
		obj['on'+evt] = handler;
	}
}
