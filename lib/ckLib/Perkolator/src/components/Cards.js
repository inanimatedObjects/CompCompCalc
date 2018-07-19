function renderCards(data) {
  var cards = d3.select("body")
    .data(data);

    cards.enter()
      .append("svg")
      .attr("class", "card")
      .style("height", "200px")
      .style("width", "200px")
      .style("border", "5px solid");

    d3.selectAll(".card")
      .each(function (d, i) {
        d3.select(this).append("text")
          .text(d.name)
          .attr("x", 20)
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
      });

    cards.exit().remove();
};
