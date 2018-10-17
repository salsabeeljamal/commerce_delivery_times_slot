(function ($) {
  Drupal.behaviors.commerce_delivery_times = {
    attach: function (context, settings) {

    	// Only allow one check box to be checked
    	var deliveryTimes = $("#edit-deliver-time").find(":checkbox");
		$(deliveryTimes).bind('change', function( index){

	        var val = this.checked,	element = $(this);

	        if(val = true) {
	        	deliveryTimes.each(function() {
	        		if($(this).attr("id") != element.attr("id")) {
	        			$(this).attr("checked", false);
	        		}
	        	});
	        }
		});     

    }
  };
}) (jQuery);
