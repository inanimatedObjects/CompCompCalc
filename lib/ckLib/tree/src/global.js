// global color scale
var colorScale = d3.scaleOrdinal(d3.schemeCategory20);

// global data
var compData = [
  ,
  {value: 10, name: "Signing Bonus"},
  {value: 92, name: "Base Salary"},
  {value: 15, name: "Incentive Comp - Cash"},
  {value: 30, name: "Signing Equity"},
  {value: 10, name: "eqRate"},
  {value: 38, name: "Incentive Comp - Equity"},
  {value: 40, name: "timeRate"},
  {value: 30, name: "timeAllocation"},
  {value: 10, name: "timeUtilization"},
  {value: 10, name: "Stipends"},
  {value: 8, name: "Benefits"},
  {value: 9, name: "Retirement Savings"}
];

var compDataArray = compData.map(x => x.value);
compDataArray.shift();

var normalizedCompData = normalize(compDataArray);

// create grid data
var gridData = () => {
    var data = new Array();
    var xPos = 5;
    var yPos = 20;
    var width = (850 / 3);
    var height = (850 / 3);

    for (var row = 0; row < 4; row++) {
        data.push( new Array() );
        for (var column = 0; column < 3; column++) {
            data[row].push({
                x: xPos,
                y: yPos,
                width: width,
                height: height
            })
            xPos += (width + 20);
        }
        xPos = 5;
        yPos += (height + 20);
    }
    return data;
}


// global functions

function normalize(array) {
  var mapped = array.map(x => (700 * x) / 363);
  return mapped;
};
