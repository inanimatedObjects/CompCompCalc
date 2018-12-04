import React from 'react';
import dailyProductPerceivedQualityData from '../../constants/dailyProductPerceivedQuality.json';
import TimeSeriesSparkLineScatterPlot from '../TimeSeriesSparkLineScatterPlot';
import SimpleScatterChart from '../SimpleScatterChart';
import StackedBarChart from '../StackedBarChart';

export default () => (
    <div>
  <TimeSeriesSparkLineScatterPlot
    data={dailyProductPerceivedQualityData}
    height={40}
    margin={20}
    selectX={datum => new Date(datum.day)
      .setHours(0,0,0,0)
    }
    selectY={datum => datum.productPerceivedQuality}
    width={200}
  />

  <SimpleScatterChart
    data={dailyProductPerceivedQualityData}
    height={40}
    margin={20}
    selectX={datum => new Date(datum.day)
      .setHours(0,0,0,0)
    }
    selectY={datum => datum.productPerceivedQuality}
    width={200}
  />

  <StackedBarChart
  data={dailyProductPerceivedQualityData}
  height={40}
  margin={20}
  selectX={datum => new Date(datum.day)
    .setHours(0,0,0,0)
  }
  selectY={datum => datum.productPerceivedQuality}
  width={200}
  />



</div>
);
