import React, { useState } from 'react';
import './styles/homepage.scss';
import HOMEPAGE_LITERALS from '../../constants/homepage';
import { Link } from 'react-router-dom';
import AnimatedLineGraph from '../../d3/lineGraph/animatedLineGraph';
import DropDownControl from '../../components/dropdownControl/dropDownControl';
import COMPANY_DATA from '../../constants/companyData';
import BubbleChart from '../../d3/bubbleChart/bubbleChart';
import Histogram from '../../d3/histogram/histogram';
import AVERAGE_CLOSING_DATA from '../../constants/averageClosingData';
import SNP_GLOBAL_DATA from '../../constants/snpGlobalData';

const companyData = COMPANY_DATA.map(company => {
  return {
    id: company.id.toLowerCase(),
    name: company.company_name,
    label: `${company.company_name} (${company.id})`,
    color: company.color ?? '#AC133C',
    financialData: company.financial_data,
    netIncomeData: company.net_income.reverse()
  };
});

export default function HomePage() {
  const [selectedCompany, setSelectedCompany] = useState({});
  // const [secondCompany, setSecondCompany] = useState(undefined);
  const [quarterly, setQuarterly] = useState([]);

  const getDropdownOptions = () => {
    const filteredList = companyData.filter(
      company => company.id != selectedCompany.id
    );
    return filteredList.map(company => {
      return {
        label: company.label,
        value: company.id
      };
    });
  };

  const getSelectedCompanyValue = () => {
    if (!selectedCompany.label || !selectedCompany.id) return undefined;
    return {
      label: selectedCompany.label,
      value: selectedCompany.id
    };
  };

  const getQ1Data = () => {
    if (!selectedCompany.label || !selectedCompany.id) return [];
    return [
      {
        name: 'Average Closing Price',
        color: '#6f857f',
        items: AVERAGE_CLOSING_DATA.map(data => {
          return {
            date: new Date(data.date),
            value: data.close
          };
        })
      },
      {
        name: 'S&P Global',
        color: '#004D97',
        items: SNP_GLOBAL_DATA.map(data => {
          return {
            date: new Date(data.date),
            value: data.close
          };
        })
      },
      {
        name: selectedCompany.label,
        color: selectedCompany.color,
        items: selectedCompany.financialData.map(data => {
          return {
            date: new Date(data.date),
            value: data.close
          };
        })
      }
    ];
  };

  const getQ3Data = () => {
    if (!selectedCompany.label) return [];
    return [
      {
        name: 'Net Income',
        color: '#004D97',
        items: selectedCompany.netIncomeData.map(data => {
          return {
            date: new Date(data.date),
            value: data.netIncome
          };
        })
      }
    ];
  };

  const getQ4Data = () => {
    if (!selectedCompany.label) return [];
    return selectedCompany.financialData.map(data => {
      return {
        key: new Date(data.date),
        volume: data.volume
      };
    });
  };

  const customXAxisTickFormat = value => {
    const quarterlyData = getQuarterlyData()[0];

    if (!quarterlyData.quarters) return;

    return quarterlyData.quarters[value - 1];
  };

  const getQuarterlyData = () => {
    if (!selectedCompany.id) return [];

    let quarterlyData = {};
    selectedCompany.financialData.forEach(entry => {
      // Extract the year from the date
      const [year, month] = entry.date.split('-');
      const quarter = Math.ceil(month / 3);
      const quarterKey = `${year}-Q${quarter}`;

      // If the quarter is not present in the quarterly data object, initialize it
      if (!quarterlyData[quarterKey]) {
        quarterlyData[quarterKey] = 0;
      }

      // Add the value of the current entry to the corresponding quarter
      quarterlyData[quarterKey] = entry.close;
    });

    return [
      {
        name: 'Quarterly Closing Price',
        color: selectedCompany.color,
        quarters: Object.entries(quarterlyData).map((data, i) => data[0]),
        items: Object.entries(quarterlyData).map((data, i) => {
          return {
            date: i + 1,
            value: data[1]
          };
        })
      }
    ];
  };

  console.log('getQuarterlyData', getQuarterlyData());

  const updateSelectedCompany = selection => {
    const currentCompany = companyData.find(
      company => company.id === selection
    );
    setSelectedCompany(currentCompany);
  };

  console.log(selectedCompany);

  const legendItems = data => {
    return data.map(element => {
      return (
        <div className="legend-item" key={element.name}>
          <div
            className="legend-color"
            style={{ backgroundColor: element.color }}
          />
          <div className="legend-label">{element.name}</div>
        </div>
      );
    });
  };

  return (
    <div className="homepage-container">
      <div className="homepage-header">{HOMEPAGE_LITERALS.HOMEPAGE_HEADER}</div>
      <div className="visual-header">
        {selectedCompany.id != null
          ? selectedCompany.label
          : HOMEPAGE_LITERALS.SUBHEADER}
      </div>
      <div className="homepage-content">
        <div className="homepage-visuals">
          <div className={`visual ${selectedCompany.id ? 'hasContent' : ''}`}>
            <div className="visual-header">
              {selectedCompany.id && (
                <div className="visual-legend">{legendItems(getQ1Data())}</div>
              )}
              {HOMEPAGE_LITERALS.VISUAL_HEADER_1}
            </div>
            {selectedCompany.id && (
              <div className="visual-graph">
                <AnimatedLineGraph
                  data={getQ1Data()}
                  givenWidth={'90%'}
                  givenHeight={'90%'}
                  xLabel={'Date'}
                  yLabel={'Closing Price'}
                />
              </div>
            )}
            {!selectedCompany.id && (
              <div className="visual-description">
                {HOMEPAGE_LITERALS.VISUAL_DESCRIPTION_1}
              </div>
            )}
          </div>
          <div className={`visual ${selectedCompany.id ? 'hasContent' : ''}`}>
            <div className="visual-header">
              {selectedCompany.id && (
                <div className="visual-legend">
                  {legendItems(getQuarterlyData())}
                  {legendItems(getQ3Data())}
                </div>
              )}
              {HOMEPAGE_LITERALS.VISUAL_HEADER_2}
            </div>
            {selectedCompany.id && (
              <div className="visual-graph">
                <AnimatedLineGraph
                  data={getQuarterlyData()}
                  givenWidth={'90%'}
                  givenHeight={'90%'}
                  xLabel={'Date'}
                  yLabel={'Closing Price'}
                  hasQuarters={true}
                  hideAlternate={true}
                  customXAxisTickFormat={customXAxisTickFormat}
                  legendStyle={{ right: '-11.5rem', top: '4rem' }}
                />
                <Histogram
                  data={getQ3Data()}
                  givenWidth={'90%'}
                  givenHeight={'90%'}
                  xLabel={'Date'}
                  yLabel={'Net Income in Billion ($)'}
                  legendStyle={{ right: '-11.5rem', top: '6rem' }}
                />
              </div>
            )}
            {!selectedCompany.id && (
              <div className="visual-description">
                {HOMEPAGE_LITERALS.VISUAL_DESCRIPTION_2}
              </div>
            )}
          </div>
        </div>
        <div className="homepage-controls">
          <Link to={'/compare'} className="compare-button">
            {HOMEPAGE_LITERALS.COMPARE_BUTTON}
          </Link>
          <DropDownControl
            header={HOMEPAGE_LITERALS.DROPDOWN_STOCK}
            options={getDropdownOptions()}
            onValueChange={updateSelectedCompany}
            currentValue={getSelectedCompanyValue()}
          />
          <div className={`visual ${selectedCompany.id ? 'hasContent' : ''}`}>
            <div className="visual-header">
              {HOMEPAGE_LITERALS.VISUAL_HEADER_3}
            </div>
            <div className="visual-content">
              {selectedCompany.id && (
                <div className="visual-graph">
                  <BubbleChart
                    data={getQ4Data()}
                    width={250}
                    height={250}
                    onBubbleClick={undefined}
                    color={selectedCompany.color}
                    hoverColor={'#ffe7d0'}
                  />
                </div>
              )}
              {selectedCompany.id && (
                <Link
                  to={`/trading-volume/${selectedCompany.id}`}
                  className="analyse-button"
                >
                  {HOMEPAGE_LITERALS.ANALYSE_BUTTON}
                </Link>
              )}
              <div className="visual-description">
                {HOMEPAGE_LITERALS.VISUAL_DESCRIPTION_4}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!selectedCompany.id && (
        <Link to={`/acknowledgement`} className="acknowledgement">
          Acknowledgement
        </Link>
      )}
    </div>
  );
}
