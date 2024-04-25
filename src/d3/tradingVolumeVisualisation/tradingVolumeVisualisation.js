import React, { useEffect, useState } from 'react';
import BubbleChart from '../bubbleChart/bubbleChart';
import './tradingVolumeVisualisation.scss';

const TradingVolumeVisualization = ({ data, color }) => {
  // State to track the current level of visualization
  const [currentView, setCurrentView] = useState('yearly');
  // State to track the current data for visualization
  const [currentData, setCurrentData] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentQuarter, setCurrentQaurter] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(null);

  useEffect(() => {
    setCurrentView('yearly');
    setCurrentData(getYearlyData());
  }, [data]);

  const getYearlyData = () => {
    const yearlyData = {};
    data.forEach(entry => {
      // Extract the year from the date
      const year = new Date(entry.date).getFullYear();

      // If the year does not exist in the yearly data object, initialize it with 0
      if (!yearlyData[year]) {
        yearlyData[year] = 0;
      }

      // Add the value to the sum for the corresponding year
      yearlyData[year] += entry.volume;
    });

    // Convert the yearly sums object into an array of objects
    // Each object contains the year and the sum of values for that year
    const yearlyArray = Object.entries(yearlyData).map(([year, sum]) => ({
      key: parseInt(year), // Convert year back to number
      volume: sum
    }));

    return yearlyArray;
  };

  const getQuarterlyData = () => {
    const yearlyData = data.filter(entry => {
      const entryYear = new Date(entry.date).getFullYear();
      return entryYear === year;
    });

    // Group data by financial quarter and calculate sum of values
    const quarterlyData = yearlyData.reduce((result, entry) => {
      const month = new Date(entry.date).getMonth();
      const quarter = Math.floor(month / 3) + 1; // Calculate quarter (1-4)
      const value = entry.volume;

      if (!result[quarter]) {
        result[quarter] = 0;
      }

      result[quarter] += value;
      return result;
    }, {});

    // Convert quarterly data to an array of objects
    const quarterlyArray = Object.entries(quarterlyData).map(
      ([quarter, sum]) => ({
        key: `Quarter ${parseInt(quarter)}`,
        volume: sum
      })
    );
    return quarterlyArray;
  };

  const getMonthlyData = quarter => {
    const yearlyData = data.filter(entry => {
      const entryYear = new Date(entry.date).getFullYear();
      return entryYear === year;
    });

    // Group data by financial quarter and calculate sum of values
    const quarterlyData = yearlyData.reduce((result, entry) => {
      const month = new Date(entry.date).getMonth();
      const quarter = Math.floor(month / 3) + 1; // Calculate quarter (1-4)
      const value = entry.volume;

      if (!result[quarter]) {
        result[quarter] = 0;
      }

      result[quarter] += value;
      return result;
    }, {});

    // Convert quarterly data to an array of objects
    const quarterlyArray = Object.entries(quarterlyData).map(
      ([quarter, sum]) => ({
        key: `Quarter ${parseInt(quarter)}`,
        volume: sum
      })
    );
    return quarterlyArray;
  };

  const handleBubbleClick = bubbleData => {
    switch (currentView) {
      case 'yearly':
        setCurrentView('quarterly');
        setCurrentYear(bubbleData.data.key);
        break;
      case 'quarterly':
        setCurrentView('monthly');
        setCurrentQaurter(bubbleData.data.key);
        break;
      case 'monthly':
        setCurrentView('weekly');
        setCurrentMonth(bubbleData.data.key);
        break;
      default:
        setCurrentView('weekly');
        setCurrentData(data);
        break;
    }
  };

  useEffect(() => {
    switch (currentView) {
      case 'yearly':
        setCurrentData(getYearlyData());
        break;
      case 'quarterly':
        setCurrentData(getQuarterlyData());
        break;
      case 'monthly':
        setCurrentData(getMonthlyData());
        break;
      case 'weekly':
        setCurrentData(data);
        break;
      default:
        setCurrentData(data);
        break;
    }
  }, [currentView, data]);

  return (
    <div className="trading-bubbles">
      <BubbleChart
        data={data}
        width={300}
        height={300}
        onBubbleClick={handleBubbleClick}
        color={color}
        hoverColor={'#ffe7d0'}
      />
    </div>
  );
};

export default TradingVolumeVisualization;
