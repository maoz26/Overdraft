function calculateCounter()
{
    var START_DATE = new Date("November 1, 2015 00:00:00"); // put in the starting date here
    var INTERVAL = 1; // in seconds
    var INCREMENT = 845; // increase per tick
    var START_VALUE = 457000000000; // initial value when it's the start date (beginning of July 2015)
    var count = 0;
    var countStr = 0; 

	var msInterval = INTERVAL * 1000; // seconds
	var now = new Date();
	count = parseInt((now - START_DATE)/msInterval) * INCREMENT + START_VALUE;
	var initialCount = count; // save the first count so we can calculate at the end
	var currentSub = 0;

	countStr = count.toLocaleString();
	document.getElementById('counter').innerHTML = countStr; 			// the first count
	document.getElementById('counter_again').innerHTML = countStr;      // the last count

	setInterval(function() { 	// the loop
		count += INCREMENT; 
		countStr = count.toLocaleString();
		document.getElementById('counter').innerHTML = countStr;
		document.getElementById('counter_again').innerHTML = countStr; // the last count

		currentSub = count - initialCount;	// the substract
		currentSubStr = currentSub.toLocaleString();
		document.getElementById('counter_sub').innerHTML = currentSubStr; // last sub

	}, msInterval);
}