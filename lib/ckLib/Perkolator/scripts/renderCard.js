var renderCard = (cardName) => {
  var width = 400;
  var height = 100;
  var backBarWidth = 350;
  var sliderByCname = document.querySelector('input.slider.' + cardName);
  var min = document.querySelector('input.sliderMin.' + cardName);
  var max = document.querySelector('input.sliderMax.' + cardName);

  var svg = d3.select('div#' + cardName)
    .append('svg')
    .attr('height', height)
    .attr('width', width);


  var stackBar = d3.select("body").select('div#barRect' + cardName)
    .append('rect')
      .attr('class', 'stackBarRect')
      .attr('x', 5)
      .attr('y', 10)
      .attr('width', backBarWidth)
      .attr('height', height / 2);


  svg.append('text')
    .text(sliderByCname.name)
    .attr('class', 'title')
    .attr('x', 153.31)
    .attr('y', 90);

  svg.append('rect')
    .attr('class', 'backgroundRect')
    .attr('x', 15)
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
    .attr('fill', (d, i) => { return colorScale(i) });



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

  d3.selectAll('input[type=number].' + cardName + '.sliderRange').on('change', function() {
    var newRatio = this.name === 'sliderMin' ? currDisplayVals / (max.value - this.value)
                                             : currDisplayVals / (this.value - min.value);

    currDisplayVals = newRatio;

  })
};
