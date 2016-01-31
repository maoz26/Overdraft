function createMapGraph(){
  var a1 = g('negev'),
      a2 = g('jerusalem'),
      a3 = g('shomron'),
      a4 = g('haifa'),
      a5 = g('natanya'),
      a6 = g('telaviv'),
      a7 = g('galil');

      function g(s) { return document.getElementById(s); }
      a1.onclick = function() {
          negevButton.click();
      }
      a2.onclick = function() {
          jerusalemButton.click();
      }
      a3.onclick = function() {
          shomronButton.click();
      }
      a4.onclick = function() {
          haifaButton.click();
      }
      a5.onclick = function() {
          natanyaButton.click();
      }
      a6.onclick = function() {
          telavivButton.click();
      }
      a7.onclick = function() {
          galilButton.click();
      }
          
      loadData("data/PaamonimData/data_ngv.tsv","#a2926c"); //the color of negev
        $("#negevButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_ngv.tsv","#a2926c");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/01.png";  
        });
        $("#jerusalemButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_jrs.tsv","#e4ca88");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/03.png";
        });
        $("#shomronButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_shm.tsv","#c5b185");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/02.png";
        });
        $("#haifaButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_hif.tsv","#476b6f");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/06.png";
        });
        $("#natanyaButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_ntn.tsv","#27484b");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/05.png";
        });
        $("#telavivButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_tlv.tsv","#ebdaa7");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/04.png";
        });
        $("#galilButton").click(function(){
          $("section#map_graph").html(" ");
          loadData("data/PaamonimData/data_gll.tsv","#668e91");
          var picSwitcher = document.getElementById("mapSwitcher");
          picSwitcher.src="images/map_imgs/07.png";
        }); 
}


function loadData(path,regionColor) {
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 550 - margin.left - margin.right,
        height = 440 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .ticks(5)
        .tickFormat(d3.format("s"))
        .orient("left");

    var svg = d3.select("#map_graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var updatedColor = regionColor;

    d3.tsv(path, type, function(error, data) {
      if (error) throw error;

      x.domain(data.map(function(d) { return d.range; }));
      y.domain([0, d3.max(data, function(d) { return d.number; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(7," + height + ")") // move the x-axis names to the middle
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
        //  .attr("transform", "translate(" + width-20 + ",0)") // move the yaxis to the left
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("dy", ".71em")

      svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          // .transition()       //* unused EFFECT *
          // .duration(1000)
          // .ease("linear")
          .attr("fill", updatedColor)
          .attr("x", function(d) { return x(d.range); })
          .attr('width', 30)
          .attr("transform", "translate(" +20 + ",0)")  //move all the rectangles to the right
          .attr("y", function(d) { return y(d.number); })
          .attr("height", function(d) { return height - y(d.number); });
    });

    function type(d) {
      d.number =+ d.number;
      return d;
    }
}