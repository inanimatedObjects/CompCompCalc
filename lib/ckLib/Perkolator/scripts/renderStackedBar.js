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

    bars.selectAll("rect")
      .data(data)
      .enter().append("g")
        .append("rect")
          .attr("class", "barRect")
          .attr("x", (d, i) => { return normalizedXScale[i] + (chartX - xSum) / 2 })
          .attr("y", 75)
          .attr("width", (d, i) => { return normalizedData[i] })
          .attr("height", 50)
          .attr("fill", (d, i) => { return colorScale(i) })

    bars.exit().remove();
}
