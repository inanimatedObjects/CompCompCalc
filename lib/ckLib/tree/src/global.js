// global color scale
var colorScale = d3.scaleOrdinal(d3.schemeCategory20);

// global data
var compData = [
  {value: 0, name: "blank"},
  {value: 10, name: "cashSign"},
  {value: 15, name: "cashRate"},
  {value: 30, name: "cashBonus"},
  {value: 50, name: "eqSign"},
  {value: 80, name: "eqRate"},
  {value: 65, name: "eqBonus"},
  {value: 55, name: "timeRate"},
  {value: 30, name: "timeAllocation"},
  {value: 20, name: "timeUtilization"},
  {value: 10, name: "perkEmployerPaid"},
  {value: 8, name: "perkEmployeeReimbursed"}
];

var compDataArray = compData.map(x => x.value);
compDataArray.shift();

var normalizedCompData = normalize(compDataArray);

// global functions

function normalize(array) {
  var mapped = array.map(x => (700 * x) / 363);
  return mapped;
};
