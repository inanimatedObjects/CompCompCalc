// global color scale
var colorScale = d3.scaleOrdinal(d3.schemeCategory20);

// global data
var compData = [
  {value: 10, name: "Signing Bonus"},
  {value: 35, name: "Base Salary"},
  {value: 15, name: "Incentive Comp - Cash"},
  {value: 22, name: "Signing Equity"},
  {value: 10, name: "eqRate"},
  {value: 38, name: "Incentive Comp - Equity"},
  {value: 40, name: "timeRate"},
  {value: 30, name: "timeAllocation"},
  {value: 15, name: "timeUtilization"},
  {value: 10, name: "Stipends"},
  {value: 26, name: "Benefits"},
  {value: 9, name: "Retirement Savings"}
];

var compDataArray = compData.map(x => x.value);


var accumXScale = [0];
compDataArray.reduce((a, b, i) => {
  return accumXScale[i + 1] = a + b;
}, 0);


var xSum = d3.sum(compDataArray);
var xScale = d3.scaleLinear()
  .domain([0, xSum])
  .range([0, 800]);
var normalizedCompData = normalize(compDataArray);
var normalizedXScale = normalize(accumXScale);

console.log(normalizedCompData, normalizedXScale)

// global functions
function normalize(array) {
  var mapped = array.map(x => xScale(x));
  return mapped;
};
