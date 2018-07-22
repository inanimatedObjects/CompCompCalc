var renderCard = (cardName) => {
  var width = 400;
  var height = 100;
  var backBarWidth = 350;
  var sliderByCname = document.querySelector('input.slider.' + cardName);
  var currDisplayVal = document.querySelector('output.slider.' + cardName).value.split(',').join('').split('');
    currDisplayVal.shift('');
    currDisplayVal = currDisplayVal.join('');
  var min = document.querySelector('input.sliderMin.' + cardName);
  var max = document.querySelector('input.sliderMax.' + cardName);

  var svg = d3.select('div#' + cardName)
    .append('svg')
    .attr('height', height)
    .attr('width', width);

  svg.append('text')
    .text(sliderByCname.name)
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
    .attr('width', backBarWidth * 0.8)
    .attr('height', (height / 2) - 2)
    .attr('fill', colorScale);


  d3.select('input[type=range].' + cardName + '.slider').on('input', function() {
    svg.selectAll('.barRect')
      .attr('width', this.value * backBarWidth);

    var newValue = this.value * (max.value - min.value);
    d3.select('output.slider.' + cardName)
      .text(function(d) {
        return '$' + d3.format(',')(d)
      }(newValue));
  });

  d3.selectAll('input[type=number].' + cardName + '.sliderRange').on('change', function() {
    var newRatio = this.name === 'sliderMin' ? currDisplayVal / (max.value - this.value)
                                             : currDisplayVal / (this.value - min.value);

    currDisplayVal = newRatio;

  })
};
