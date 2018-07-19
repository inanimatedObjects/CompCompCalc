// generate data for the grid
function makeGridData() {
    var data = new Array();
    var xPos = 1;
    var yPos = 1;
    var width = 250;
    var height = 250;
    var isUsed = true;

    for (var row = 0; row < 4; row++) {
        data.push( new Array() );
        for (var column = 0; column < 4; column++) {
            data[row].push({
                x: xPos,
                y: yPos,
                width: width,
                height: height,
                isUsed: isUsed
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

// utility fn to check if a square is in use
function checkSquare(x, y) {
  return (y > 700 && (x > 700 || x < 200)) ? false : true;
}

// render the grid
function createGrid(data) {
  var grid = d3.select("body")
    .append("svg")
      .attr("class", "gridContainer")
      .style("height", "1000px")
      .style("width", "1000px")

    grid.selectAll(".row")
      .data(data)
      .enter().append("g")
      .attr("class", "row")
      .selectAll(".square")
        .data(function(d) { return d })
        .each(checkSquare(data.x, data.y))
        .enter().append("rect")
        .attr("class", "square")
        .attr("class", function(d) {
          return checkSquare(d.x, d.y) ? "used" : null
        })
        .attr("x", function(d) { return d.x })
        .attr("y", function(d) { return d.y })
        .attr("width", function(d) { return d.width })
        .attr("height", function(d) { return d.height })
        .style("fill", "white")
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

    d3.selectAll(".used")
      .attr("stroke-width", "5")
      .data(data)
      .each(addCard);
      // .enter().append("g")
      // .append("rect")
        // .style("height", "200px")
        // .style("width", "200px")
        // .style("fill", "white")
        // .style("margin", "12.5px")
        // .style("border", "5px solid black")
        // .attr("class", "card")

    // d3.selectAll(".card")

    // d3.exit().remove();
};
