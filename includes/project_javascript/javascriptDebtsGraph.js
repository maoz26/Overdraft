
function CreateDynamicDebtsGraph() {
  	var debtsYears = [];
  	var allPurposeLoansArray = [];
  	var mortgageLoansArray = [];
  	var pensionLoansArray = [];
  	var creditCardsLoansArray = [];

	d3.text("data/overdraft.csv", function(text) {
	  var dataInput = d3.csv.parseRows(text).map(function(row) {
	    return row.map(function(value) {
	      return +value;
	    });
	  });

	  var allPurposeLoans = dataInput[37]; 	   // line 38
	  var mortgageLoans = dataInput[38];   	   // line 39
	  var pensionLoans = dataInput[39];        // line 40
	  var creditCardsLoans = dataInput[41];    // line 42

	  var month = 1;	// in order to calculate the month and year 
	  var year = 2000;

	  var allPurposeSum = 0, mortgageSum = 0, pensionSum = 0, creditCardsSum = 0;

	  for (i = 2; i < allPurposeLoans.length; i++) {
	  	month++;

		allPurposeSum += allPurposeLoans[i];
		mortgageSum += mortgageLoans[i];
		pensionSum += pensionLoans[i];
		creditCardsSum += creditCardsLoans[i];

	  	if (month == 13) { 
	  		month = 1; 

	  		allPurposeSum = allPurposeSum/12;
	  		allPurposeSum = Math.round(allPurposeSum); 
	  		mortgageSum = mortgageSum/12;
	  		mortgageSum = Math.round(mortgageSum); 
	  		pensionSum = pensionSum/12;
	  		pensionSum = Math.round(pensionSum); 
	  		creditCardsSum = creditCardsSum/12;
	  		creditCardsSum = Math.round(creditCardsSum); 

			allPurposeLoansArray.push(allPurposeSum);
			mortgageLoansArray.push(mortgageSum);
			pensionLoansArray.push(pensionSum);
			creditCardsLoansArray.push(creditCardsSum);

			debtsYears.push(year);			// years array
	  		year++; 

	  		allPurposeSum = mortgageSum = pensionSum = creditCardsSum = 0;
	  	}
	  } 

	if (month != 1) {
		month--; 
		year++;

		// calculate the last year - less than 12 months
	  	allPurposeSum = allPurposeSum/month;
		allPurposeSum = Math.round(allPurposeSum); 
		mortgageSum = mortgageSum/month;
		mortgageSum = Math.round(mortgageSum); 
		pensionSum = pensionSum/month;
		pensionSum = Math.round(pensionSum); 
		creditCardsSum = creditCardsSum/month;
		creditCardsSum = Math.round(creditCardsSum); 

		allPurposeLoansArray.push(allPurposeSum);
		mortgageLoansArray.push(mortgageSum);
		pensionLoansArray.push(pensionSum);
		creditCardsLoansArray.push(creditCardsSum);

		debtsYears.push(year);
	}

	var chartdata = new Highcharts.Chart({
	            chart: {
	            	backgroundColor: 'transparent', 
	                renderTo: 'debtsGraph', 
	                marginTop: 110,
	                paddingTop: 70	
	            },
	            title: {
	                text: ' '                      
	            },
	            credits: {
		            enabled: false
		        },
				legend: {
		            layout: 'vertical',
		            align: 'center',
		            verticalAlign: 'top',
		            x: 200,
		            y: -10,
		            symbolPadding: -25,
		            floating: true,
					itemStyle: {
		                color: '#ebdaa7',
		                fontSize: 16,
		                fontFamily: 'almoni-regular'
		            },
					itemHoverStyle: {
		                color: '#ffffff',
		                fontSize: 16,
		                fontFamily: 'almoni-regular'
		            },
		            itemHiddenStyle:{
		                color: '#302d3a',
		                fontSize: 16,
		                fontFamily: 'almoni-regular'
		            }
		        },
				plotOptions: {
			        line: {
			            enableMouseTracking: false,
			            marker: {
                        	enabled: false
                    	}
			        }
			    },
	            xAxis: {  
	            	categories: debtsYears,
	            	tickInterval: 2,
	            	tickLength: 0,
	            	lineColor: 'transparent',
	            	labels: {
		                align: 'center',
		                y: 40,
		                style: {
		            		color: '#ebdaa7',
		            		fontSize: 18,
		            		fontFamily: 'narkis-regular' //'almoni-tzar-light', 
		            	}
		            }
	            },
	            yAxis: {
            		gridLineColor: '#302d3a',	 
            		gridLineDashStyle: 'Dash',
            		gridLineWidth: 2.4,
            		min: 0,
            		tickInterval: 50,
            		labels: {
		                align: 'center',
		                x: -30,
		                y: 6,
		                style: {
		            		color: '#a0a08d',
		            		fontSize: 20,
		            		fontFamily: 'narkis-regular' //'almoni-tzar-light', 
		            	}
		            },
		            title: {
                		text: 'חובות במיליארדי שקלים',
                		x: -3,
                		style: {
		            		color: '#486b71',
		            		fontSize: 18,					
		            		fontFamily: 'almoni-regular' 	
		            	}
        			},
        		},
			    series: [
			    {
			    	name: 'הלוואות לצרכי דיור',				// red 
			    	data: mortgageLoansArray,
			    	color: '#ff5539',
			    	lineWidth: 3, 
			    	animation: {
                    	duration: 8000
                	}
			    }, 
			    {
			    	name: 'הלוואות לכל מטרה',    			// yellow 
			    	data: allPurposeLoansArray,
			    	color: '#856f27',
			    	lineWidth: 3, 
			    	animation: {
                    	duration: 8000
                	}
			    },
			    {
			    	name: 'הלוואות מגופי הפנסיה',		    // blue
			    	data: pensionLoansArray,
			    	color: '#0f5b68',
			    	lineWidth: 3, 
			    	animation: {
                    	duration: 8000
                	}
			    },
			    {
			    	name: 'הלוואות מחברות כרטיסי האשראי', 	// grey 
			    	data: creditCardsLoansArray,
			    	color: '#7e7664',
			    	lineWidth: 3, 
			    	animation: {
                    	duration: 8000
                	}
			    } ],
	        });
	});
}

