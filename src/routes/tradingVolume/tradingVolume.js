import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import COMPANY_DATA from '../../constants/companyData';
import HOMEPAGE_LITERALS from '../../constants/homepage';
import './styles/tradingVolume.scss';
import DropDownControl from '../../components/dropdownControl/dropDownControl';
import BubbleChart from '../../d3/bubbleChart/bubbleChart';
import StreamGraph from '../../d3/streamGraph/streamGraph';

export default function TradingVolumePage() {
  const { companyId } = useParams();
  const [visualType, setVisualType] = useState('day');
  const [visualLabel, setVisualLabel] = useState('Daily Data');
  const [currentData, setCurrentData] = useState([]);
  const [tradingData, setTradingData] = useState([]);

  const companyData = COMPANY_DATA.find(
    company => company.id.toLowerCase() === companyId
  );

  const getTradingData = () => {
    const data = companyData
      ? companyData.financial_data.map(data => {
          return {
            key: new Date(data.date),
            value: data.changePercent
          };
        })
      : [];

    return data;
  };

  const getDailyData = () => {
    const dailyData = companyData
      ? companyData.financial_data.map(data => {
          return {
            key: new Date(data.date),
            volume: data.volume
          };
        })
      : [];
    return dailyData;
  };

  const getYearlyData = () => {
    let yearlyData = {};
    if (!companyData) return [];

    companyData.financial_data.forEach(entry => {
      // Extract the year from the date
      const year = new Date(entry.date).getFullYear();

      // If the year is not present in the yearly data object, initialize it
      if (!yearlyData[year]) {
        yearlyData[year] = 0;
      }

      // Add the value of the current entry to the corresponding year
      yearlyData[year] += entry.volume;
    });

    // Convert the yearly data object to an array of objects
    const yearlyArray = Object.entries(yearlyData).map(([year, value]) => ({
      key: parseInt(year),
      volume: value
    }));

    return yearlyArray;
  };

  const getQuarterlyData = () => {
    let quarterlyData = {};
    if (!companyData) return [];

    companyData.financial_data.forEach(entry => {
      // Extract the year from the date
      const [year, month] = entry.date.split('-');
      const quarter = Math.ceil(month / 3);
      const quarterKey = `${year}-Q${quarter}`;
      console.log('quarterKey', quarterKey);

      // If the quarter is not present in the quarterly data object, initialize it
      if (!quarterlyData[quarterKey]) {
        quarterlyData[quarterKey] = 0;
      }

      // Add the value of the current entry to the corresponding quarter
      quarterlyData[quarterKey] += entry.volume;
    });

    // Convert the quarterly data object to an array of objects
    const quarterlyArray = Object.entries(quarterlyData).map(
      ([quarter, value]) => ({
        key: quarter,
        volume: value
      })
    );

    return quarterlyArray;
  };

  const getMonthlyData = () => {
    let monthlyData = {};
    if (!companyData) return [];

    companyData.financial_data.forEach(entry => {
      // Extract the year from the date
      const [year, month] = entry.date.split('-');
      const monthName = new Date(entry.date).toLocaleString('default', {
        month: 'short'
      });
      const monthKey = `${monthName}-${year}`;

      // If the quarter is not present in the quarterly data object, initialize it
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = 0;
      }

      // Add the value of the current entry to the corresponding quarter
      monthlyData[monthKey] += entry.volume;
    });

    // Convert the quarterly data object to an array of objects
    const monthlyArray = Object.entries(monthlyData).map(([month, value]) => ({
      key: month,
      volume: value
    }));

    return monthlyArray;
  };

  const getWeeklyData = () => {
    let weeklyData = {};
    if (!companyData) return [];

    companyData.financial_data.forEach(entry => {
      // Extract the year from the date
      const date = new Date(entry.date);
      const onejan = new Date(date.getFullYear(), 0, 1);
      const millisecsInDay = 86400000;
      const weekNumber = Math.ceil(
        ((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
      );
      const weekKey = `Week${weekNumber}-${date.getFullYear()}`;

      // If the quarter is not present in the quarterly data object, initialize it
      if (!weeklyData[weekKey]) {
        weeklyData[weekKey] = 0;
      }

      // Add the value of the current entry to the corresponding quarter
      weeklyData[weekKey] += entry.volume;
    });

    // Convert the quarterly data object to an array of objects
    const weeklyArray = Object.entries(weeklyData).map(([week, value]) => ({
      key: week,
      volume: value
    }));

    return weeklyArray;
  };

  useEffect(() => {
    setCurrentData(getDailyData());
    setTradingData(getTradingData());
  }, [companyId]);

  useEffect(() => {
    switch (visualType) {
      case 'year':
        setCurrentData(getYearlyData());
        break;
      case 'quarter':
        setCurrentData(getQuarterlyData());
        break;
      case 'month':
        setCurrentData(getMonthlyData());
        break;
      case 'week':
        setCurrentData(getWeeklyData());
        break;
      case 'day':
        setCurrentData(getDailyData());
        break;
      default:
        setCurrentData(getDailyData());
    }
  }, [visualType, visualLabel]);

  const updatedTradingData = ({
    selectedYear,
    selectedQuarter,
    selectedMonth,
    selectedWeek
  }) => {
    const tradingData = getTradingData();

    if (selectedYear) {
      return tradingData.filter(item => {
        const itemYear = item.key.getFullYear();
        return itemYear === selectedYear;
      });
    }

    if (selectedQuarter) {
      return tradingData.filter(item => {
        const year = item.key.getFullYear();
        const month = item.key.getMonth();
        const quarter = Math.ceil(month / 3);
        const quarterKey = `${year}-Q${quarter}`;
        return quarterKey === selectedQuarter;
      });
    }

    if (selectedMonth) {
      return tradingData.filter(item => {
        const year = item.key.getFullYear();
        const monthName = item.key.toLocaleString('default', {
          month: 'short'
        });
        const monthKey = `${monthName}-${year}`;
        return monthKey === selectedMonth;
      });
    }

    if (selectedWeek) {
      return tradingData.filter(item => {
        const millisecsInDay = 86400000;
        const onejan = new Date(item.key.getFullYear(), 0, 1);
        const weekNumber = Math.ceil(
          ((item.key - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
        );
        const weekKey = `Week${weekNumber}-${item.key.getFullYear()}`;
        return weekKey === selectedWeek;
      });
    }
  };

  const getPeriodData = ({
    selectedYear,
    selectedQuarter,
    selectedMonth,
    selectedWeek
  }) => {
    let periodData = {};
    if (!companyData) return [];
    companyData.financial_data.forEach(entry => {
      // Extract the year from the date
      // const date = new Date(entry.date);
      const [year, month] = entry.date.split('-');
      const quarter = Math.ceil(month / 3);
      const quarterKey = `${year}-Q${quarter}`;
      const monthName = new Date(entry.date).toLocaleString('default', {
        month: 'short'
      });
      const monthKey = `${monthName}-${year}`;
      const date = new Date(entry.date);
      const onejan = new Date(date.getFullYear(), 0, 1);
      const millisecsInDay = 86400000;
      const weekNumber = Math.ceil(
        ((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
      );
      const weekKey = `Week${weekNumber}-${date.getFullYear()}`;

      if (
        (selectedYear && `${selectedYear}` === year) ||
        selectedQuarter === quarterKey ||
        selectedMonth === monthKey ||
        selectedWeek === weekKey
      ) {
        // If the quarter is not present in the quarterly data object, initialize it
        if (!periodData[entry.date]) {
          periodData[entry.date] = 0;
        }

        // Add the value of the current entry to the corresponding quarter
        periodData[entry.date] += entry.volume;
      }
    });

    // Convert the quarterly data object to an array of objects
    const periodArray = Object.entries(periodData).map(([period, value]) => ({
      key: new Date(period),
      volume: value
    }));

    setVisualType('day');
    setVisualLabel(
      `Daily Data - ${
        selectedYear
          ? selectedYear
          : selectedQuarter
          ? selectedQuarter
          : selectedMonth
          ? selectedMonth
          : selectedWeek
      }`
    );

    setTradingData(
      updatedTradingData({
        selectedYear,
        selectedQuarter,
        selectedMonth,
        selectedWeek
      })
    );

    return periodArray;
  };

  const handleBubbleClick = data => {
    switch (visualType) {
      case 'year':
        setCurrentData(getPeriodData({ selectedYear: data.data.key }));
        break;
      case 'quarter':
        setCurrentData(getPeriodData({ selectedQuarter: data.data.key }));
        break;
      case 'month':
        setCurrentData(getPeriodData({ selectedMonth: data.data.key }));
        break;
      case 'week':
        setCurrentData(getPeriodData({ selectedWeek: data.data.key }));
        break;
      case 'day':
        setCurrentData(getDailyData());
        setVisualType('day');
        setVisualLabel('Daily Data');
        setTradingData(getTradingData());
        break;
      default:
    }
  };

  const onDropDownValueChanged = value => {
    setVisualType(value);
    setVisualLabel(
      HOMEPAGE_LITERALS.TRADING.DROPDOWN_OPTIONS.find(
        option => option.value === value
      ).label
    );
    setTradingData(getTradingData());
  };

  return (
    <div className="trading-volume-page">
      <div className="trading-page-header">
        {HOMEPAGE_LITERALS.HOMEPAGE_HEADER}
      </div>
      <div className="trading-control-header">{`${
        HOMEPAGE_LITERALS.TRADING.CONRTOL_HEADER
      }${companyData.company_name} (${companyData.id.toUpperCase()})`}</div>
      <div className="trading-content">
        <div className="trading-control">
          <div className="control-container">
            <DropDownControl
              header={HOMEPAGE_LITERALS.TRADING.DROPDOWN}
              options={HOMEPAGE_LITERALS.TRADING.DROPDOWN_OPTIONS}
              onValueChange={onDropDownValueChanged}
              currentValue={{
                label: visualLabel,
                value: visualType
              }}
            />
          </div>
          <div className="trading-volume-bubble">
            <BubbleChart
              data={currentData}
              width={400}
              height={400}
              tooltipTransform={'translate(-19rem, -20rem)'}
              onBubbleClick={handleBubbleClick}
              color={'#ee5138'}
              hoverColor={'#ffe7d0'}
            />
          </div>
        </div>
        <div className="trading-visual">
          <div className="trading-volume-graph">
            <StreamGraph data={tradingData} width={400} height={400} />
          </div>
          <div className="trading-control-description">
            <div className="trading-visual-header">
              {HOMEPAGE_LITERALS.TRADING.AREA_CHART_DESC}
            </div>
            {HOMEPAGE_LITERALS.TRADING.DESCRIPTION}
          </div>
        </div>
      </div>
    </div>
  );
}
