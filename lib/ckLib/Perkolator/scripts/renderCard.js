var renderCard = (cardName) => {
  console.log(cardName)
  var width = 400;
  var height = 100;
  var backBarWidth = 350;
  var sliderByCname = document.querySelector('input.slider.' + cardName);
  var currDisplayVal = document.querySelector('output.slider.' + cardName).value.split(',').join('').split('');
    currDisplayVal.shift('');
    currDisplayVal = currDisplayVal.join('');
  var min = document.querySelector('input.sliderMin.' + cardName);
  var max = document.querySelector('input.sliderMax.' + cardName);

  let cardsArr = [
    'cash1', 'cash2', 'cash3',
    'equity1', 'equity2', 'equity3',
    'perks1', 'perks2', 'perks3',
    'time1', 'time2', 'time3'
  ]
  const colorScale = d3.scaleLinear()
    .domain('cash1', 'cash2')
    .range(['green', 'blue'])

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
      .attr('x', 16)
      .attr('y', 11)
      .attr('width', backBarWidth * 0.8)
      .attr('height', (height / 2) - 2)
      .attr('fill', colorScale);

  stackBar.append('g')
    .append('rect')
      // .classed('stackBar')
      .attr('class', 'stackBarRect ' + cardName)
      .attr('x', 6)
      .attr('y', -21)
      .attr('width', 70)
      .attr('height', 30)
      .attr('fill', colorScale);
      // .each(function (d, i) {
      //   d3.selectAll('.stackBarRect').append("rect")
      //   .text(i)


      // .each(function (d, i) {
        // d3.select(this).append("rect")
      //   .attr('class', 'stackBarRect ' + cardName)
      //   .attr('x', 26)
      //   .attr('y', 21)
      //   .attr('width', backBarWidth * 0.9)
      //   .attr('height', (height / 2) - 2)
      //   .attr('fill', 'cornflowerblue')
      //   .text(i);
      // })


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
    var newRatio = this.name === 'sliderMin' ? currDisplayVal / (max.value - this.value)
                                             : currDisplayVal / (this.value - min.value);

    currDisplayVal = newRatio;

  })
};
