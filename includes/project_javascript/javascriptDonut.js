
function CreateDonutGraph() {
  	var chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: 'donut',
            backgroundColor: 'transparent'
        },
        colors: ['#ebdaa7', '#52514f', '#486b71', '#a1a18f'],
        title: {
            text: ' '  
        },
        subtitle: {
            text: ' '
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 3500
                }
            },
		      pie: {
		         innerSize: 110,
		         depth: 45,
		         borderColor: 'transparent',
		         dataLabels: {
                    enabled: false
                },
                showInLegend: true,
		    }
        },
        legend: {
	        layout: 'vertical',
	        align: 'center',
	        symbolPadding: -25,
	        x: 160,
		    y: 0,
			itemStyle: {
                color: '#ebdaa7',
                fontSize: 16,
                fontFamily: 'almoni-regular'
            },
	    },
	    credits: {
	      enabled: false
	 	},
        series: [{
            name: 'מקור ההלוואה',
            data: [
	                ['חובות לחברות כרטיסי האשראי',13], // line 42
	                ['חובות לגופי הפנסיה',9],			// line 40
	                ['משכנתאות',294],					// line 39
	                ['חובות נוספים לבנקים',114]			// line 38
	            ]
        }]
    });
}

