cons renderCards = (data) => {
  let width = 400,
    height = 100,
    backBarWidth = 350,
    cardName = data[0].name,
    sliderByCname = document.querySelector('input.slider#' + cardName),
    min = document.querySelector('input.sliderMin#' + cardName),
    max = document.querySelector('input.sliderMax#' + cardName);
  console.log(cardNames)

  var svg = d3.select('div#' + cardName)
    .append('svg')
    .attr('height', height)
    .attr('width', width);

  svg.append('text')
    .text(sliderByCname.name)
    .attr('text-anchor', 'middle')
    .attr('class', 'title')
    .attr('x', 153.31)
    .attr('y', 90);

  svg.append('rect')
    .attr('class', 'backgroundRect')
    .attr('x', 25)
    .attr('y', 10)
    .attr('width', backBarWidth)
    .attr('height', height / 2);

  svg.append('g')
    .append('rect')
    .attr('class', 'barRect ' + cardName)
    .attr('x', 26)
    .attr('y', 11)
    .attr('width', backBarWidth * sliderByCname.value)
    .attr('height', (height / 2) - 2)
    .attr('fill', (d, i) => { return colorScale(cardName) });



  d3.select('input[type=range].' + cardName + '.slider').on('input', function() {
    svg.selectAll('.barRect')
      .attr('width', this.value * backBarWidth);

    // svg.selectAll('.stackBarRect')
        // .attr('width', this.value * backBarWidth);

    var newValue = this.value * (max.value - min.value);
    d3.select('output.slider.' + cardName)
      .text(function(d) {
        return '$' + d3.format(',')(d)
      }(newValue));
  });
  console.log(currDisplayVals)

  d3.selectAll('input[type=number].' + cardName + '.sliderRange').on('change', function() {
    var newRatio = this.name === 'sliderMin' ? this.output.value / (max.value - this.value)
                                             : this.output.value / (this.value - min.value);

    this.value = newRatio;
    console.log(this)

  })
};
