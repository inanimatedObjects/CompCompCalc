<!DOCTYPE html>
<meta charset="utf-8">
<style>

body {
    font-family: sans-serif;
}

.slider rect {
    fill: gray;
    shape-rendering: crispEdges;
}

.slider line {
    fill: none;
    stroke: red;
    opacity: 0.3;
    shape-rendering: crispEdges;
}

</style>
<body>
<h3 id="header"></h3>
<div id="chart"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript">

function translate(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

var margin = { top: 20, right: 20, bottom: 20, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', translate(margin.left, margin.top));

var minDate = new Date(2013, 9, 1, 7),
    scale = d3.scaleTime()
        .domain([minDate, d3.timeHour.offset(minDate, 5)])
        .range([0, width])
        .clamp(true),
    format = d3.timeFormat('%a %b %d %-I:%M %p');

// axis
svg.append('g')
    .attr('class', 'axis')
    .call(d3.axisBottom(scale).ticks(d3.timeMinute.every(15)));

var slider = svg.append('g')
    .attr("class", "slider")
    .call(d3.drag().on('drag', dragged));

var rectWidth = 8;
var rect = slider.append("rect")
    .attr("x", -rectWidth / 2)
    .attr("y", -20)
    .attr("width", rectWidth)
    .attr("height", 20);

var line = slider.append("line")
    .attr('y2', height)
    .attr('x2', 0)
    .attr('stroke-dasharray', '1,1');


function updateHeader(date) {
    d3.select('#header').text(format(date));
}

function dragged(d) {
    var x = Math.min(Math.max(d3.event.x, 0), width);
        value = scale.invert(x);

    d3.select('.slider').attr('transform', translate(x, 0));
    updateHeader(value);
}

updateHeader(minDate);

</script>

</body>
