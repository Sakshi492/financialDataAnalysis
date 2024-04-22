import React, { useEffect, useState } from 'react';
import DropDownControl from '../dropdownControl/dropDownControl';
import './styles/homepageControls.scss';
import HOMEPAGE_LITERALS from '../../../constants/homepage';
import COMPANY_DATA from '../../../constants/companyData';
import Gauge from '../../../d3/gauge/gauge';
import calculateCorrelation from 'calculate-correlation';
import GraphComponent from '../../../d3/lineGraph/components/graphComponent';
import CorrelationDefinition from '../correlationDefinition/correlationDefinition';

const HomepageControls = () => {
  const [firstCompany, setFirstCompany] = useState(undefined);
  const [secondCompany, setSecondCompany] = useState(undefined);
  const [firstDropdownOptions, setFirstDropdownOptions] = useState([]);
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [correlation, setCorrelation] = useState(0);
  const [chartData, setChartData] = useState([]);

  const companyList = COMPANY_DATA.map(company => {
    return {
      label: `${company.id.toUpperCase()} - ${company.company_name}`,
      value: company.id.toLowerCase()
    };
  });

  const findCorrelation = () => {
    let firstCompanyData = COMPANY_DATA.find(
      company => company.id.toLowerCase() === firstCompany
    );
    let firstCompanyFinancialData = firstCompanyData
      ? firstCompanyData.financial_data
      : [];
    firstCompanyFinancialData.filter(data => data.close != null);
    let firstCompanyClosingPrices = firstCompanyFinancialData.map(
      data => data.close
    );
    let firstCompanyChartData = {
      name: `${firstCompanyData &&
        firstCompanyData.id.toUpperCase()} : ${firstCompanyData &&
        firstCompanyData.company_name}`,
      color: '#F535AA',
      items: firstCompanyFinancialData.map(data => ({
        date: new Date(data.date),
        value: data.close
      }))
    };

    let secondCompanyData = COMPANY_DATA.find(
      company => company.id.toLowerCase() === secondCompany
    );
    let secondCompanyFinancialData = secondCompanyData
      ? secondCompanyData.financial_data
      : [];
    secondCompanyFinancialData.filter(data => data.close != null);
    let secondCompanyClosingPrices = secondCompanyFinancialData.map(
      data => data.close
    );
    let secondCompanyChartData = {
      name: `${secondCompanyData &&
        secondCompanyData.id.toUpperCase()} : ${secondCompanyData &&
        secondCompanyData.company_name}`,
      color: '#04d9ff',
      items: secondCompanyFinancialData.map(data => ({
        date: new Date(data.date),
        value: data.close
      }))
    };

    let updatedChartData = [];

    if (firstCompany) {
      updatedChartData.push(firstCompanyChartData);
    }

    if (secondCompany) {
      updatedChartData.push(secondCompanyChartData);
    }

    if (firstCompany !== undefined && secondCompany !== undefined) {
      let updatedcorrelation = calculateCorrelation(
        firstCompanyClosingPrices,
        secondCompanyClosingPrices
      );
      setCorrelation(updatedcorrelation);
    }

    if (updatedChartData.length > 0) {
      setChartData(updatedChartData);
    }
  };

  useEffect(() => {
    setFirstDropdownOptions(companyList);
    setSecondDropdownOptions(companyList);
  }, []);

  useEffect(() => {
    setSecondDropdownOptions(
      companyList.filter(company => company.value !== firstCompany)
    );
    findCorrelation();
  }, [firstCompany]);

  useEffect(() => {
    setFirstDropdownOptions(
      companyList.filter(company => company.value !== secondCompany)
    );
    findCorrelation();
  }, [secondCompany]);

  return (
    <div className="homepage-controls-container">
      <div className="controls-header">{HOMEPAGE_LITERALS.CONTROLS_HEADER}</div>
      <DropDownControl
        header={HOMEPAGE_LITERALS.DROPDOWN_HEADER_1}
        options={firstDropdownOptions}
        onValueChange={setFirstCompany}
      />
      <DropDownControl
        header={HOMEPAGE_LITERALS.DROPDOWN_HEADER_2}
        options={secondDropdownOptions}
        onValueChange={setSecondCompany}
      />
      <Gauge
        min={HOMEPAGE_LITERALS.GAUGE.MIN_VALUE}
        max={HOMEPAGE_LITERALS.GAUGE.MAX_VALUE}
        value={correlation}
        label={HOMEPAGE_LITERALS.GAUGE.LABEL}
        sublabel={
          firstCompany &&
          secondCompany &&
          `${firstCompany.toUpperCase()} - ${secondCompany.toUpperCase()}`
        }
        maxAngle={HOMEPAGE_LITERALS.GAUGE.MAX_ANGLE}
        minAngle={HOMEPAGE_LITERALS.GAUGE.MIN_ANGLE}
        tickCount={6}
        labelProps={{
          offsetText: -10
        }}
      />
      {chartData.length > 0 ? (
        <GraphComponent data={chartData} />
      ) : (
        <CorrelationDefinition />
      )}
    </div>
  );
};

export default HomepageControls;
