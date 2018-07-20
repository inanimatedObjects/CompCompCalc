// helper fns to check x and y values
function findCardX(d, i) {
  return [0, 3, 6, 9].includes(i) ? 1
       : [1, 4, 7, 10].includes(i) ? 400
       :                             849
}

function findCardY(d, i) {
  return [0, 1, 2].includes(i) ? 25
       : [3, 4, 5].includes(i) ? 425
       : [6, 7, 8].includes(i) ? 825
       :                         1225
}

// add data to cards
function addCardData(d, i) {
  d3.select(this).append("rect")
    .attr("class", "cardBackground")
    .attr("x", findCardX(d, i))
    .attr("y", findCardY(d, i))
    .style("width", "350px")
    .style("height", "350px")
    .style("fill", "none")
    .style("stroke-width", "2px")
    .style("stroke", "black")

  d3.select(this).append("text")
    .text(d.name)
    .attr("class", "cardName")
    .attr("x", findCardX(d, i) + 174)
    .attr("y", findCardY(d, i) + 49)
    .attr("text-anchor", "middle")
    .attr("font-size", 20)
    .attr("font-weight", "bold")

  d3.select(this).append("text")
    .text(d.value)
    .attr("class", "cardVal")
    .attr("x", findCardX(d, i) + 174)
    .attr("y", findCardY(d, i) + 124)
    .attr("text-anchor", "middle")
    .attr("font-size", 30)

  d3.select(this).append("rect")
    .attr("class", "cardColorCode")
    .attr("x", findCardX(d, i) + 279)
    .attr("y", findCardY(d, i) + 1)
    .attr("width", 70)
    .attr("height", 26.25)
    .attr("fill", colorScale(i))
};
