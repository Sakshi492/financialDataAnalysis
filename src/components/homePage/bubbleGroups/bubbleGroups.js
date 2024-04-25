import React, { useEffect, useState } from 'react';
import './bubbleGroups.scss';
import { Link } from 'react-router-dom';
import HOMEPAGE_LITERALS from '../../../constants/homepage';
import COMPANY_DATA from '../../../constants/companyData';
import TradingVolumeVisualization from '../../../d3/tradingVolumeVisualisation/tradingVolumeVisualisation';

const BubbleGroups = ({
  firstCompany,
  secondCompany,
  analyseTradingVolume
}) => {
  const [firstCompanyData, setFirstCompanyData] = useState([]);
  const [secondCompanyData, setSecondCompanyData] = useState([]);

  const firstCompanyInformation = {
    ...COMPANY_DATA.find(company => company.id.toLowerCase() === firstCompany),
    color: '#ee5138'
  };

  const secondCompanyInformation = {
    ...COMPANY_DATA.find(company => company.id.toLowerCase() === secondCompany),
    color: '#405fab'
  };

  useEffect(() => {
    const data = firstCompanyInformation;
    if (data && data.financial_data) {
      setFirstCompanyData(
        data.financial_data.map(instance => {
          return {
            date: new Date(instance.date),
            volume: instance.volume
          };
        })
      );
    }
  }, [firstCompany]);

  useEffect(() => {
    const data = secondCompanyInformation;
    if (data && data.financial_data) {
      setSecondCompanyData(
        data.financial_data.map(instance => {
          return {
            date: new Date(instance.date),
            volume: instance.volume
          };
        })
      );
    }
  }, [secondCompany]);

  return (
    <div className="bubble-groups">
      <div
        className={`bubble-groups-header ${
          firstCompany != null || secondCompany != null ? 'show' : ''
        }`}
      >
        {HOMEPAGE_LITERALS.BUBBLE_GROUPS.HEADER}
      </div>
      <div className="charts-container">
        {firstCompany && (
          <div className="chart-component">
            <div className="chart-descriptor">
              <div className="header">
                {HOMEPAGE_LITERALS.BUBBLE_GROUPS.CHART_DESCRIPTOR}
              </div>
              <div>{firstCompanyInformation.company_name}</div>
              <Link to={`/trading-volume/${firstCompany}`} className="analyse">
                <button onClick={() => analyseTradingVolume(firstCompany)}>
                  Click to Analyse
                </button>
              </Link>
            </div>
            <TradingVolumeVisualization
              data={firstCompanyData}
              color={firstCompanyInformation.color}
            />
          </div>
        )}

        {secondCompany && (
          <div className="chart-component">
            <div className="chart-descriptor">
              <div className="header">
                {HOMEPAGE_LITERALS.BUBBLE_GROUPS.CHART_DESCRIPTOR}
              </div>
              <div>{secondCompanyInformation.company_name}</div>
              <Link to={`/trading-volume/${secondCompany}`} className="analyse">
                <button
                  onClick={() => {
                    () => analyseTradingVolume(secondCompany);
                  }}
                >
                  Click to Analyse
                </button>
              </Link>
            </div>
            <TradingVolumeVisualization
              data={secondCompanyData}
              color={secondCompanyInformation.color}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BubbleGroups;
