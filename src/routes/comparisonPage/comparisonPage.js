import React, { useEffect, useState } from 'react';
import './styles/comparisonPage.scss';
import HOMEPAGE_LITERALS from '../../constants/homepage';
import AnimatedLineGraph from '../../d3/lineGraph/animatedLineGraph';
import DropDownControl from '../../components/dropdownControl/dropDownControl';
import calculateCorrelation from 'calculate-correlation';
import COMPANY_DATA from '../../constants/companyData';
import Gauge from '../../d3/gauge/gauge';
import AVERAGE_CLOSING_DATA from '../../constants/averageClosingData';

const companyData = COMPANY_DATA.map(company => {
  return {
    id: company.id.toLowerCase(),
    name: company.company_name,
    label: `${company.company_name} (${company.id})`,
    color: company.color ?? '#AC133C',
    financialData: company.financial_data,
    netIncomeData: company.net_income
  };
});

export default function ComparisonPage() {
  const [firstCompany, setFirstCompany] = useState({});
  const [secondCompany, setSecondCompany] = useState({});
  const [correlation, setCorrelation] = useState(0);

  const findCorrelation = () => {
    if (!(firstCompany.id && secondCompany.id)) return;

    let firstCompanyClosingPrices = firstCompany.financialData.map(
      data => data.close
    );

    let secondCompanyClosingPrices = secondCompany.financialData.map(
      data => data.close
    );

    setCorrelation(
      calculateCorrelation(
        firstCompanyClosingPrices,
        secondCompanyClosingPrices
      )
    );
  };

  const getDropdownOptions = () => {
    const filteredList = companyData.filter(
      company => company.id != firstCompany.id && company.id != secondCompany.id
    );
    return filteredList.map(company => {
      return {
        label: company.label,
        value: company.id
      };
    });
  };

  useEffect(() => {
    findCorrelation();
  }, [firstCompany, secondCompany]);

  const updateFirstCompany = selection => {
    const currentCompany = companyData.find(
      company => company.id === selection
    );
    setFirstCompany(currentCompany);
  };

  const updateSecondCompany = selection => {
    const currentCompany = companyData.find(
      company => company.id === selection
    );
    setSecondCompany(currentCompany);
  };

  const getGraphData = () => {
    const graphData = [];
    graphData.push({
      name: 'Average Closing Price - 30 Companies',
      color: '#6f857f',
      items: AVERAGE_CLOSING_DATA.map(data => {
        return {
          date: new Date(data.date),
          value: data.close
        };
      })
    });
    if (firstCompany.id)
      graphData.push({
        name: firstCompany.label,
        color: '#004D97',
        items: firstCompany.financialData.map(data => {
          return {
            date: new Date(data.date),
            value: data.close
          };
        })
      });

    if (secondCompany.id != null)
      graphData.push({
        name: secondCompany.label,
        color: secondCompany.color,
        items: secondCompany.financialData.map(data => {
          return {
            date: new Date(data.date),
            value: data.close
          };
        })
      });
    return graphData;
  };

  const getSelectedCompanyValue = company => {
    if (!company.label || !company.id) return undefined;
    return {
      label: company.label,
      value: company.id
    };
  };

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
    <div className="comparison-page">
      <div className="comparison-page-header">
        {HOMEPAGE_LITERALS.HOMEPAGE_HEADER}
      </div>
      <div className="visual-header">
        {firstCompany.id != null && secondCompany.id != null
          ? `${firstCompany.label} vs ${secondCompany.label}`
          : HOMEPAGE_LITERALS.COMPARISON.SUBHEADER}
      </div>
      <div className="comparison-content">
        <div className="comparison-visuals">
          <div className="visual">
            <div className="visual-header">
              {HOMEPAGE_LITERALS.COMPARISON.VISUAL_HEADER}
            </div>
            <div className="visual-content">
              <div className="visual-graph">
                <AnimatedLineGraph
                  data={getGraphData()}
                  givenWidth={'90%'}
                  givenHeight={'90%'}
                  xLabel={'Date'}
                  yLabel={'Closing Price'}
                />
              </div>
              <div className="visual-legend">{legendItems(getGraphData())}</div>
              <div className="visual-description">
                {HOMEPAGE_LITERALS.COMPARISON.VISUAL_DESCRIPTION}
              </div>
            </div>
          </div>
        </div>
        <div className="comparison-controls">
          <div className="dropdowns">
            <DropDownControl
              header={HOMEPAGE_LITERALS.COMPARISON.FIRST_DROPDOWN}
              options={getDropdownOptions()}
              onValueChange={updateFirstCompany}
              currentValue={getSelectedCompanyValue(firstCompany)}
            />

            <DropDownControl
              header={HOMEPAGE_LITERALS.COMPARISON.SECOND_DROPDOWN}
              options={getDropdownOptions()}
              onValueChange={updateSecondCompany}
              currentValue={getSelectedCompanyValue(secondCompany)}
            />
          </div>
          <div className="visual">
            <div className="visual-header">
              {HOMEPAGE_LITERALS.COMPARISON.METER_HEADER}
            </div>
            <div className="visual-content">
              <div className="visual-graph">
                <Gauge
                  min={HOMEPAGE_LITERALS.GAUGE.MIN_VALUE}
                  max={HOMEPAGE_LITERALS.GAUGE.MAX_VALUE}
                  value={correlation}
                  label={HOMEPAGE_LITERALS.GAUGE.LABEL}
                  sublabel={
                    firstCompany.id &&
                    secondCompany.id &&
                    `${firstCompany.label.toUpperCase()} - ${secondCompany.label.toUpperCase()}`
                  }
                  maxAngle={HOMEPAGE_LITERALS.GAUGE.MAX_ANGLE}
                  minAngle={HOMEPAGE_LITERALS.GAUGE.MIN_ANGLE}
                  tickCount={6}
                  labelProps={{
                    offsetText: -10
                  }}
                />
              </div>
              <div className="visual-description">
                {HOMEPAGE_LITERALS.COMPARISON.METER_DESCRIPTION}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
