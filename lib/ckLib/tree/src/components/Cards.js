// render the grid
function createGrid(gridData, compData) {
  var grid = d3.select("body")
    .append("svg")
      .attr("class", "gridContainer")
      .style("height", "1250px")
      .style("width", "900px")

    grid.selectAll(".row")
      .data(gridData)
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

    grid.selectAll(".cardContainer")
      .data(gridData, compData)
      .enter().append("text")
      .attr("x", function(d) { return d.x })
      .attr("y", function(d) { return d.y })
      .attr("width", function(d) { return d.width })
      .attr("height", function(d) { return d.height })

}

// add text + data to a card
function addCard(d, i) {
  d3.select(this).append("text")
    .text(d.name)
    .attr("x", )
    .attr("y", )
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
