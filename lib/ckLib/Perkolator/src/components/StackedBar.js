function normalize(array) {
  var mapped = array.map(x => (700 * x) / 363);
  return mapped;
};

function renderStackedBar(data) {
  var accumXScale = [0];
  data.reduce((a, b, i) => {
    return accumXScale[i + 1] = a + b;
  }, 0);
  var normalizedXScale = normalize(accumXScale);
  console.log(normalizedXScale)
  var normalizedCompData = normalize(compDataArray);

  var bars = d3.select("body")
      .append("svg")
      .attr("class", "bar")
      .style("height", 200)
      .style("width", 860)
      .style("border", "5px solid")

    bars.selectAll("rect")
      .data(data)
      .enter().append("g")
        .each(function(d, i) {
          d3.select(this).selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr("x", normalizedXScale[i] + 80)
            .attr("y", 75)
            .attr("width", normalizedCompData[i])
            .attr("height", 50)
            .attr("fill", colorScale(i))
        })

    bars.exit().remove();
};
