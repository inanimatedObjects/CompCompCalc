// data normalizer fn
function normalize(array) {
  var mapped = array.map(x => (900 / accumXScale[12]) * x);
  return mapped;
};

var renderStackedBar = (data) => {
  var accumXScale = [0];
  data.reduce((a, b, i) => {
    return accumXScale[i + 1] = a + b;
  }, 0);

  var normalizedXScale = normalize(accumXScale);
  var normalizedData = normalize(data);
  console.log(accumXScale)

  var chartX = 900;
  var chartY = 200;
  var xSum = d3.sum(normalizedData);

  var bars = d3.select("#stackedBar")
      .append("svg")
      .attr("class", "bar")
      .style("width", chartX)
      .style("height", chartY)

    bars.append("rect")
      .attr("class", "stackedBarBackground")
      .attr("x", 0)
      .attr("y", 50)
      .attr("width", 900)
      .attr("height", 100)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1)

    bars.selectAll("g")
      .data(data)
      .enter().append("g")
        .append("rect")
          .attr("class", "barSegment")
          .attr("x", (d, i) => { return normalizedXScale[i] + (chartX - xSum) / 2 })
          .attr("y", 50)
          .attr("width", (d, i) => { return normalizedData[i] })
          .attr("height", 100)
          .attr("fill", (d, i) => { return colorScale(i) })
          .attr("stroke", "lightblue")
          .attr("stroke-width", 1)

    bars.exit().remove();
}
