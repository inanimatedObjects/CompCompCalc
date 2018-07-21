var renderCash1 = () => {
  var width = 400;
  var height = 100;
  var backBarWidth = 350;
  var sliderByCname = document.getElementsByClassName("slider");
  var min = document.getElementsByClassName("sliderMin");
  var max = document.getElementsByClassName("sliderMax");

  var svg = d3.select("div#cash1")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  svg.append("text")
    .text("Signing Bonus")
    .attr("class", "title")
    .attr("x", 153.31)
    .attr("y", 90);

  svg.append("rect")
    .attr("class", "backgroundRect")
    .attr("x", 25)
    .attr("y", 10)
    .attr("width", backBarWidth)
    .attr("height", height / 2);

  svg.append("g")
    .append("rect")
    .attr("class", "barRect")
    .attr("x", 26)
    .attr("y", 11)
    .attr("width", backBarWidth * 0.5)
    .attr("height", (height / 2) - 2)
    .attr("fill", "blue");


  d3.select("input[type=range].slider").on("input", function() {
    svg.selectAll(".barRect")
      .attr("width", this.value * backBarWidth);

    var newValue = this.value * (max[0].value - min[0].value);

    d3.select("output.slider")
      .text(function(d) {
        return "$" + d3.format(",")(d)
      }(newValue));
  });

  d3.selectAll("input[type=number].sliderRange").on("change", function() {
    var currDisplayVal = sliderByCname[0].value
                         .split(",").join("").split("");
    currDisplayVal.shift("");
    currDisplayVal = currDisplayVal.join("");

    var newRatio = this.name === "sliderMin" ? currDisplayVal / (max[0].value - this.value)
                                             : currDisplayVal / (this.value - min[0].value);

    sliderByCname[1].value = newRatio;

  })
};
