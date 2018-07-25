function renderStackedBar(data) {
  var accumXScale = [0];
  data.reduce((a, b, i) => {
    return accumXScale[i + 1] = a + b;
  }, 0);

  var normalizedXScale = normalize(accumXScale);

  var chartX = 900;
  var chartY = 200;
  var xSum = d3.sum(normalizedCompData);

  var bars = d3.select("body")
      .append("svg")
      .attr("class", "stackedBar")
      .style("width", chartX)
      .style("height", chartY)
      .style("border", "5px solid")

    bars.selectAll("rect")
      .data(data)
      .enter().append("g")
        .append("rect")
          .attr("class", "bar")
          .attr("x", (d, i) => { return normalizedXScale[i] + (chartX - xSum) / 2 })
          .attr("y", 75)
          .attr("width", (d, i) => { return normalizedCompData[i] })
          .attr("height", 50)
          .attr("fill", (d, i) => { return colorScale(i) })

    d3.selectAll(".bar")

    bars.exit().remove();
};
