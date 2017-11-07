$(document).ready(function(){

	var measurements_id = 'measurements',
		measurements_time;

	$(window).resize(function() {
		if (checkDevTools) {
			buildMeasurements();

			if(measurements_time) clearTimeout(measurements_time);
			measurements_time = setTimeout(doneResizing(), 5000);
		}
	});

	function buildMeasurements() {
		$("body").append('<div id="'+measurements_id+'"></div>');
		$("#"+measurements_id).css({
			'background-color': 'rgba(0,0,0,.5)',
			'padding': '5px',
	        'position': 'fixed',
	        'bottom': '0',
	        'right': '0',
	        'color': 'white',
	        'font-size': '10px',
	        'z-index': '99999999999999'
	    });
		$("#"+measurements_id).text(getDimensions());
	}

	function getDimensions() {
		return $(window).width() + ' x ' + $(window).height();
	}

	function doneResizing() {
		$("#"+measurements_id).fadeOut('fast', function() {
			$(this).remove();
		});
	}
    
    function checkDevTools() {
    	return window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized;
    }

});