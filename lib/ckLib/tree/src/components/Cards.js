// generate data for the grid
function makeGridData() {
    var data = new Array();
    var xPos = 1;
    var yPos = 1;
    var width = 300;
    var height = 300;

    for (var row = 0; row < 4; row++) {
        data.push( new Array() );
        for (var column = 0; column < 3; column++) {
            data[row].push({
                x: xPos,
                y: yPos,
                width: width,
                height: height
            })
            xPos += width;
        }
        xPos = 1;
        yPos += height;
    }
    return data;
}
// initialize grid data
var gridData = makeGridData()

// render the grid
function createGrid(data) {
  var grid = d3.select("body")
    .append("svg")
      .attr("class", "gridContainer")
      .style("height", "900px")
      .style("width", "900px")

    grid.selectAll(".row")
      .data(data)
      .enter().append("g")
      .attr("class", "row")
      .selectAll(".square")
        .data(function(d) { return d })
        .enter().append("rect")
        .attr("class", "square")
        .attr("x", function(d) { return d.x })
        .attr("y", function(d) { return d.y })
        .attr("width", function(d) { return d.width })
        .attr("height", function(d) { return d.height })
        .style("fill", "white")
        .style("stroke-width", "5px")
        .style("stroke", "black")
}

// add text + data to a card
function addCard(d, i) {
  d3.select(this).append("text")
    .text(d.name)
    .attr("x", 50)
    .attr("y", 50)
  d3.select(this).append("text")
    .text(d.value)
    .attr("x", 20)
    .attr("y", 80)
  d3.select(this).append("rect")
    .attr("x", 160)
    .attr("y", 0)
    .attr("width", 40)
    .attr("height", 15)
    .attr("fill", colorScale(i))
}

// render all cards
function renderCards(data) {
  var grid = createGrid(gridData)

    d3.selectAll(".square")
      .attr("stroke-width", "5")
      .data(data)
      .enter().append("g")
      .append("rect")
        .attr("height", "250px")
        .attr("width", "250px")
        .attr("margin", "12.5px")
        .attr("class", "card")
        .attr("border", "5px solid black")
        .style("fill", "white")
        .each(addCard);

    d3.selectAll(".card")

    // grid.exit().remove();
};
