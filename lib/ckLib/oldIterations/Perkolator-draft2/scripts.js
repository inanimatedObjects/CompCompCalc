
var items = [
    {x : 50, y : 50, label : 'interesting label'},
    {x : 100, y: 120, label : 'some arb example'},
    {x : 300, y: 100, label : 'the last block'}
];

// we can increase this, everything will scale up with us
var w=960,h=500,
    svg=d3.select("#chart")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

d3.textBlock = function() {
    // label property: this will get drawn enclosed perfectly by a rect
    var label = "";

    // this function object is returned when textBlock() is invoked.
    // after setting properties (label above), it can be invoked on
    // a whole selection by using call() -- see the rest of the example.
    function my(selection) {
        selection.each(function(d, i) {
            // inside here, d is the current data item, i is its index.
            // "this" is the element that has been appended, in the case of
            // this example, a svg:g

            // the text property could have been specified by the user as a
            // value, or a function of the current data item.
            var labelvar = (typeof(label) === "function" ? label(d) : label);

            // convert element (svg:g) into something that D3 can use
            // element is a single-element selection
            var element = d3.select(this);

            // first append text to svg:g
            var t = element.append("text")
                .text(labelvar) // here we set the label property on the text element
                .attr("dominant-baseline", "central"); // vertically centered
            // get the bounding box of the just created text element
            var bb = t[0][0].getBBox();

            // then append svg rect to svg:g
            // doing some adjustments so we fit snugly around the text: we're
            // inside a transform, so only have to move relative to 0
            element.append("rect")
		.attr("x", -5) // 5px margin
                .attr("y", - bb.height) // so text is vertically within block
                .attr("width", bb.width + 10) // 5px margin on left + right
                .attr("height", bb.height * 2)
                .attr("fill", "steelblue")
                .attr("fill-opacity", 0.3)
                .attr("stroke", "black")
                .attr("stroke-width", 2);

        });

    }

    // getter / setter for the label property
    my.label = function(value) {
        if (!arguments.length) return value;
        label = value;
        return my;
    };

    return my;
}

// calling textBlock() returns the function object textBlock().my
// via which we set the "label" property of the textBlock outer func
var tb = d3.textBlock().label(function(d) {return d.label;});
// now we apply the returned function object my == tb on an enter selection
var item = svg.selectAll("rect")
    .data(items)
  .enter()
    .append("svg:g")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .call(tb);






        // old renderCards()
// function renderCards(data) {
//   var width = 400;
//   var height = 100;
//   var backBarWidth = 350;
//
//   d3.selectAll(".card")
//     .data(data)
//     .enter()
//     .append("svg")
//     .attr("width", width)
//       // .attr("class", cardSvg);
//
//   var xScale = d3.scaleLinear()
//     .domain(0, width)
//     .range(0, height)
//
//   d3.selectAll("svg")
//     .append("g")
//     .attr("class", "cardBar")
//       .each(function(data, i) {
//         console.log(data, i)
//       })
//
//   d3.selectAll("svg")
//     .append("g")
//     .attr("class", "cardInfo")
//
//   d3.selectAll("svg")
//     .append("g")
//     .attr("class", "slider")
// }
