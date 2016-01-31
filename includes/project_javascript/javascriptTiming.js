
window.onload = function(){
	createMapGraph();
}


function waypointFunctions()
{
	var waypointGraphFrame2 = new Waypoint({
	  element: document.getElementById("frame2_debt_graph"),	// control the debts-graph timing 
	  handler: function(direction) {
	    CreateDynamicDebtsGraph();
	  },
	 offset: 400	// px from the top of the element we chose
	})

	var waypointTextFrame4 = new Waypoint({		// control the 'breaking' animation timing
	  element: document.getElementById("frame4_balance"),
	  handler: function(direction) {
	    breakAnimation();
	  },
	  offset: 250
	})

	var waypointVideoFrame3 = new Waypoint({	// control the frame3-video timing and add play event
	  element: document.getElementById("frame3_growth"),
	  handler: function(direction) {
	    document.getElementById('video3').play();
	    video3EventListener();
	  },
	  offset: 250
	})

	var waypointVideoFrame5 = new Waypoint({
	  element: document.getElementById("frame5_recession"),
	  handler: function(direction) {
	    document.getElementById('video5').play();
	    video5EventListener();
	  },
	  offset: 350
	})

	var waypointVideoFrame6 = new Waypoint({	// control the frame6-video timing (without play event - playing in loop)
	  element: document.getElementById("frame6_supervise"),
	  handler: function(direction) {
	    document.getElementById('video6').play();
	  },
	  offset: 400
	})

	var waypointVideoFrame10 = new Waypoint({
	  element: document.getElementById("frame10_loans"),
	  handler: function(direction) {
	    document.getElementById('video10').play();
	  },
	  offset: 600
	})

	var waypointGraphFrame10 = new Waypoint({
	  element: document.getElementById("frame11_donut_chart"),
	  handler: function(direction) {
	    CreateDonutGraph();
	  },
	  offset: 850
	})

}


function readMoreEventListener(){	// generic event listener that open a text box when we click the arrow
	$('.read_more_arrow').click(function(){
		var parent = $(this).parent();
		var art = $(parent).find("article");
		var isExist = $(this).hasClass("text_box");
		$(art).slideToggle( "slow" );
	});
}


function breakAnimation(){
	$('#break').textillate({
		in: {
			effect:'pulse'
		},
		out: {
			effect: 'hinge',   	// the brek effect	
			shuffle: true,	   	// choose a different letters order	
			reverse: false,
			delayScale: 7, 		// until the effect start
			delay: 90			// for all the effect
		},
		loop: true
	 });
}


function video3EventListener(){
	document.getElementById("video3").addEventListener("click", function(event) {
		document.getElementById("video3").play();
  }, false);
}


function video5EventListener(){
	document.getElementById("video5").addEventListener("click", function(event) {
		document.getElementById("video5").play();
  }, false);
}


