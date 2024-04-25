import INTC_FINANCIAL_DATA from './intc';
import AAPL_FINANCIAL_DATA from './aapl';
import AXP_FINANCIAL_DATA from './axp';
import BA_FINANCIAL_DATA from './ba';
import CAT_FINANCIAL_DATA from './cat';
import CSCO_FINANCIAL_DATA from './csco';
import CVX_FINANCIAL_DATA from './cvx';
import DIS_FINANCIAL_DATA from './dis';
import GS_FINANCIAL_DATA from './gs';
import HD_FINANCIAL_DATA from './hd';
import IBM_FINANCIAL_DATA from './ibm';
import JNJ_FINANCIAL_DATA from './jnj';
import JPM_FINANCIAL_DATA from './jpm';
import KO_FINANCIAL_DATA from './ko';
import MCD_FINANCIAL_DATA from './mcd';
import MMM_FINANCIAL_DATA from './mmm';
import MRK_FINANCIAL_DATA from './mrk';
import MSFT_FINANCIAL_DATA from './msft';
import NKE_FINANCIAL_DATA from './nke';
import PFE_FINANCIAL_DATA from './pfe';
import PG_FINANCIAL_DATA from './pg';
import TRV_FINANCIAL_DATA from './trv';
import UNH_FINANCIAL_DATA from './unh';
import V_FINANCIAL_DATA from './v';
import VZ_FINANCIAL_DATA from './vz';
import WBA_FINANCIAL_DATA from './wba';
import WMT_FINANCIAL_DATA from './wmt';
import XOM_FINANCIAL_DATA from './xom';

const COMPANY_DATA = [
  {
    id: 'AAPL',
    company_name: 'Apple Inc.',
    financial_data: AAPL_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 59.43 },
      { date: '2018-09-30', netIncome: 59.53 },
      { date: '2018-06-30', netIncome: 56.12 },
      { date: '2018-03-31', netIncome: 53.32 },
      { date: '2017-12-31', netIncome: 50.53 },
      { date: '2017-09-30', netIncome: 48.35 },
      { date: '2017-06-30', netIncome: 46.65 },
      { date: '2017-03-31', netIncome: 45.73 },
      { date: '2016-12-31', netIncome: 45.22 },
      { date: '2016-09-30', netIncome: 45.69 },
      { date: '2016-06-30', netIncome: 47.8 },
      { date: '2016-03-31', netIncome: 50.68 },
      { date: '2015-12-31', netIncome: 53.73 },
      { date: '2015-09-30', netIncome: 53.39 },
      { date: '2015-06-30', netIncome: 50.74 },
      { date: '2015-03-31', netIncome: 47.81 },
      { date: '2014-12-31', netIncome: 44.46 },
      { date: '2014-09-30', netIncome: 39.51 },
      { date: '2014-06-30', netIncome: 38.56 },
      { date: '2014-03-31', netIncome: 37.71 }
    ]
  },
  {
    id: 'AXP',
    company_name: 'American Express Company',
    financial_data: AXP_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 43.28 },
      { date: '2018-09-30', netIncome: 42.26 },
      { date: '2018-06-30', netIncome: 41.2 },
      { date: '2018-03-31', netIncome: 40.18 },
      { date: '2017-12-31', netIncome: 38.99 },
      { date: '2017-09-30', netIncome: 40.46 },
      { date: '2017-06-30', netIncome: 38.8 },
      { date: '2017-03-31', netIncome: 37.78 },
      { date: '2016-12-31', netIncome: 37.14 },
      { date: '2016-09-30', netIncome: 34.18 },
      { date: '2016-06-30', netIncome: 34.57 },
      { date: '2016-03-31', netIncome: 34.59 },
      { date: '2015-12-31', netIncome: 34.44 },
      { date: '2015-09-30', netIncome: 35.14 },
      { date: '2015-06-30', netIncome: 35.27 },
      { date: '2015-03-31', netIncome: 35.64 },
      { date: '2014-12-31', netIncome: 35.9 },
      { date: '2014-09-30', netIncome: 35.32 },
      { date: '2014-06-30', netIncome: 35.38 },
      { date: '2014-03-31', netIncome: 35.04 }
    ]
  },
  {
    id: 'BA',
    company_name: 'The Boeing Company',
    financial_data: BA_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 101.13 },
      { date: '2018-09-30', netIncome: 97.56 },
      { date: '2018-06-30', netIncome: 96.63 },
      { date: '2018-03-31', netIncome: 95.43 },
      { date: '2017-12-31', netIncome: 94.01 },
      { date: '2017-09-30', netIncome: 91.45 },
      { date: '2017-06-30', netIncome: 91.12 },
      { date: '2017-03-31', netIncome: 92.83 },
      { date: '2016-12-31', netIncome: 93.5 },
      { date: '2016-09-30', netIncome: 94.86 },
      { date: '2016-06-30', netIncome: 96.81 },
      { date: '2016-03-31', netIncome: 96.6 },
      { date: '2015-12-31', netIncome: 96.11 },
      { date: '2015-09-30', netIncome: 97.01 },
      { date: '2015-06-30', netIncome: 94.94 },
      { date: '2015-03-31', netIncome: 92.45 },
      { date: '2014-12-31', netIncome: 90.76 },
      { date: '2014-09-30', netIncome: 90.08 },
      { date: '2014-06-30', netIncome: 88.43 },
      { date: '2014-03-31', netIncome: 88.2 }
    ]
  },
  {
    id: 'CAT',
    company_name: 'Caterpillar Inc.',
    financial_data: CAT_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 54.72 },
      { date: '2018-09-30', netIncome: 53.28 },
      { date: '2018-06-30', netIncome: 51.18 },
      { date: '2018-03-31', netIncome: 48.5 },
      { date: '2017-12-31', netIncome: 45.46 },
      { date: '2017-09-30', netIncome: 42.14 },
      { date: '2017-06-30', netIncome: 39.89 },
      { date: '2017-03-31', netIncome: 38.9 },
      { date: '2016-12-31', netIncome: 38.54 },
      { date: '2016-09-30', netIncome: 39.99 },
      { date: '2016-06-30', netIncome: 41.8 },
      { date: '2016-03-31', netIncome: 43.77 },
      { date: '2015-12-31', netIncome: 47.01 },
      { date: '2015-09-30', netIncome: 50.23 },
      { date: '2015-06-30', netIncome: 52.81 },
      { date: '2015-03-31', netIncome: 54.65 },
      { date: '2014-12-31', netIncome: 55.18 },
      { date: '2014-09-30', netIncome: 55.34 },
      { date: '2014-06-30', netIncome: 55.22 },
      { date: '2014-03-31', netIncome: 55.69 }
    ]
  },
  {
    id: 'CSCO',
    company_name: 'Cisco Systems, Inc.',
    financial_data: CSCO_FINANCIAL_DATA,
    net_income: [
      { date: '2019-01-31', netIncome: 50.83 },
      { date: '2018-10-31', netIncome: 50.27 },
      { date: '2018-07-31', netIncome: 49.33 },
      { date: '2018-04-30', netIncome: 48.62 },
      { date: '2018-01-31', netIncome: 48.1 },
      { date: '2017-10-31', netIncome: 47.79 },
      { date: '2017-07-31', netIncome: 48.01 },
      { date: '2017-04-30', netIncome: 48.51 },
      { date: '2017-01-31', netIncome: 48.57 },
      { date: '2016-10-31', netIncome: 48.92 },
      { date: '2016-07-31', netIncome: 49.25 },
      { date: '2016-04-30', netIncome: 49.45 },
      { date: '2016-01-31', netIncome: 49.59 },
      { date: '2015-10-31', netIncome: 49.6 },
      { date: '2015-07-31', netIncome: 49.16 },
      { date: '2015-04-30', netIncome: 48.68 },
      { date: '2015-01-31', netIncome: 48.08 },
      { date: '2014-10-31', netIncome: 47.3 },
      { date: '2014-07-31', netIncome: 47.14 },
      { date: '2014-04-30', netIncome: 47.2 },
      { date: '2014-01-31', netIncome: 47.87 }
    ]
  },
  {
    id: 'CVX',
    company_name: 'Chevron Corporation',
    financial_data: CVX_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 166.34 },
      { date: '2018-09-30', netIncome: 161.6 },
      { date: '2018-06-30', netIncome: 153.82 },
      { date: '2018-03-31', netIncome: 146.07 },
      { date: '2017-12-31', netIncome: 141.72 },
      { date: '2017-09-30', netIncome: 135.6 },
      { date: '2017-06-30', netIncome: 129.54 },
      { date: '2017-03-31', netIncome: 124.34 },
      { date: '2016-12-31', netIncome: 114.47 },
      { date: '2016-09-30', netIncome: 112.22 },
      { date: '2016-06-30', netIncome: 116.4 },
      { date: '2016-03-31', netIncome: 127.47 },
      { date: '2015-12-31', netIncome: 138.48 },
      { date: '2015-09-30', netIncome: 155.32 },
      { date: '2015-06-30', netIncome: 175.68 },
      { date: '2015-03-31', netIncome: 193.26 },
      { date: '2014-12-31', netIncome: 211.97 },
      { date: '2014-09-30', netIncome: 222.04 },
      { date: '2014-06-30', netIncome: 225.86 },
      { date: '2014-03-31', netIncome: 225.3 }
    ]
  },
  {
    id: 'DIS',
    company_name: 'The Walt Disney Company',
    financial_data: DIS_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 59.39 },
      { date: '2018-09-30', netIncome: 59.43 },
      { date: '2018-06-30', netIncome: 57.91 },
      { date: '2018-03-31', netIncome: 56.92 },
      { date: '2017-12-31', netIncome: 55.7 },
      { date: '2017-09-30', netIncome: 55.14 },
      { date: '2017-06-30', netIncome: 55.5 },
      { date: '2017-03-31', netIncome: 55.54 },
      { date: '2016-12-31', netIncome: 55.17 },
      { date: '2016-09-30', netIncome: 55.63 },
      { date: '2016-06-30', netIncome: 56.0 },
      { date: '2016-03-31', netIncome: 54.83 },
      { date: '2015-12-31', netIncome: 54.32 },
      { date: '2015-09-30', netIncome: 52.47 },
      { date: '2015-06-30', netIncome: 51.34 },
      { date: '2015-03-31', netIncome: 50.71 },
      { date: '2014-12-31', netIncome: 49.9 },
      { date: '2014-09-30', netIncome: 48.81 },
      { date: '2014-06-30', netIncome: 47.99 },
      { date: '2014-03-31', netIncome: 47.1 }
    ]
  },
  {
    id: 'GS',
    company_name: 'The Goldman Sachs Group, Inc.',
    financial_data: GS_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 36.62 },
      { date: '2018-09-30', netIncome: 37.03 },
      { date: '2018-06-30', netIncome: 36.53 },
      { date: '2018-03-31', netIncome: 34.78 },
      { date: '2017-12-31', netIncome: 32.73 },
      { date: '2017-09-30', netIncome: 32.59 },
      { date: '2017-06-30', netIncome: 32.43 },
      { date: '2017-03-31', netIncome: 32.48 },
      { date: '2016-12-31', netIncome: 30.79 },
      { date: '2016-09-30', netIncome: 29.71 },
      { date: '2016-06-30', netIncome: 28.4 },
      { date: '2016-03-31', netIncome: 29.54 },
      { date: '2015-12-31', netIncome: 33.82 },
      { date: '2015-09-30', netIncome: 34.24 },
      { date: '2015-06-30', netIncome: 35.76 },
      { date: '2015-03-31', netIncome: 35.82 },
      { date: '2014-12-31', netIncome: 34.53 },
      { date: '2014-09-30', netIncome: 35.62 },
      { date: '2014-06-30', netIncome: 33.96 },
      { date: '2014-03-31', netIncome: 33.44 }
    ]
  },
  {
    id: 'HD',
    company_name: 'The Home Depot, Inc.',
    financial_data: HD_FINANCIAL_DATA,
    net_income: [
      { date: '2019-01-31', netIncome: 108.2 },
      { date: '2018-10-31', netIncome: 105.6 },
      { date: '2018-07-31', netIncome: 104.32 },
      { date: '2018-04-30', netIncome: 101.96 },
      { date: '2018-01-31', netIncome: 100.9 },
      { date: '2017-10-31', netIncome: 99.23 },
      { date: '2017-07-31', netIncome: 97.36 },
      { date: '2017-04-30', netIncome: 95.72 },
      { date: '2017-01-31', netIncome: 94.6 },
      { date: '2016-10-31', netIncome: 93.37 },
      { date: '2016-07-31', netIncome: 92.03 },
      { date: '2016-04-30', netIncome: 90.39 },
      { date: '2016-01-31', netIncome: 88.52 },
      { date: '2015-10-31', netIncome: 86.7 },
      { date: '2015-07-31', netIncome: 85.4 },
      { date: '2015-04-30', netIncome: 84.38 },
      { date: '2015-01-31', netIncome: 83.18 },
      { date: '2014-10-31', netIncome: 81.71 },
      { date: '2014-07-31', netIncome: 80.66 },
      { date: '2014-04-30', netIncome: 79.38 }
    ]
  },
  {
    id: 'IBM',
    company_name: 'International Business Machines Corporation',
    financial_data: IBM_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 79.59 },
      { date: '2018-09-30', netIncome: 80.37 },
      { date: '2018-06-30', netIncome: 80.77 },
      { date: '2018-03-31', netIncome: 80.06 },
      { date: '2017-12-31', netIncome: 79.14 },
      { date: '2017-09-30', netIncome: 78.37 },
      { date: '2017-06-30', netIncome: 78.44 },
      { date: '2017-03-31', netIncome: 79.39 },
      { date: '2016-12-31', netIncome: 79.92 },
      { date: '2016-09-30', netIncome: 80.21 },
      { date: '2016-06-30', netIncome: 80.26 },
      { date: '2016-03-31', netIncome: 80.84 },
      { date: '2015-12-31', netIncome: 81.74 },
      { date: '2015-09-30', netIncome: 83.8 },
      { date: '2015-06-30', netIncome: 86.91 },
      { date: '2015-03-31', netIncome: 90.15 },
      { date: '2014-12-31', netIncome: 92.79 },
      { date: '2014-09-30', netIncome: 95.38 },
      { date: '2014-06-30', netIncome: 96.32 },
      { date: '2014-03-31', netIncome: 97.2 }
    ]
  },
  {
    id: 'INTC',
    company_name: 'Intel Corporation',
    financial_data: INTC_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 70.85 },
      { date: '2018-09-30', netIncome: 69.24 },
      { date: '2018-06-30', netIncome: 66.23 },
      { date: '2018-03-31', netIncome: 64.03 },
      { date: '2017-12-31', netIncome: 62.76 },
      { date: '2017-09-30', netIncome: 62.08 },
      { date: '2017-06-30', netIncome: 61.71 },
      { date: '2017-03-31', netIncome: 60.48 },
      { date: '2016-12-31', netIncome: 59.39 },
      { date: '2016-09-30', netIncome: 57.93 },
      { date: '2016-06-30', netIncome: 56.61 },
      { date: '2016-03-31', netIncome: 56.28 },
      { date: '2015-12-31', netIncome: 55.36 },
      { date: '2015-09-30', netIncome: 55.16 },
      { date: '2015-06-30', netIncome: 55.25 },
      { date: '2015-03-31', netIncome: 55.89 },
      { date: '2014-12-31', netIncome: 55.87 },
      { date: '2014-09-30', netIncome: 54.98 },
      { date: '2014-06-30', netIncome: 53.91 },
      { date: '2014-03-31', netIncome: 52.89 }
    ]
  },
  {
    id: 'JNJ',
    company_name: 'Johnson & Johnson',
    financial_data: JNJ_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 81.58 },
      { date: '2018-09-30', netIncome: 81.38 },
      { date: '2018-06-30', netIncome: 80.68 },
      { date: '2018-03-31', netIncome: 78.69 },
      { date: '2017-12-31', netIncome: 76.45 },
      { date: '2017-09-30', netIncome: 74.36 },
      { date: '2017-06-30', netIncome: 72.53 },
      { date: '2017-03-31', netIncome: 72.17 },
      { date: '2016-12-31', netIncome: 71.89 },
      { date: '2016-09-30', netIncome: 71.6 },
      { date: '2016-06-30', netIncome: 70.88 },
      { date: '2016-03-31', netIncome: 70.18 },
      { date: '2015-12-31', netIncome: 70.07 },
      { date: '2015-09-30', netIncome: 70.52 },
      { date: '2015-06-30', netIncome: 71.88 },
      { date: '2015-03-31', netIncome: 73.59 },
      { date: '2014-12-31', netIncome: 74.33 },
      { date: '2014-09-30', netIncome: 74.43 },
      { date: '2014-06-30', netIncome: 73.54 },
      { date: '2014-03-31', netIncome: 71.92 }
    ]
  },
  {
    id: 'JPM',
    company_name: 'JPMorgan Chase & Co.',
    financial_data: JPM_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 129.82 },
      { date: '2018-09-30', netIncome: 125.94 },
      { date: '2018-06-30', netIncome: 122.61 },
      { date: '2018-03-31', netIncome: 118.95 },
      { date: '2017-12-31', netIncome: 114.58 },
      { date: '2017-09-30', netIncome: 113.55 },
      { date: '2017-06-30', netIncome: 111.22 },
      { date: '2017-03-31', netIncome: 108.89 },
      { date: '2016-12-31', netIncome: 106.39 },
      { date: '2016-09-30', netIncome: 104.21 },
      { date: '2016-06-30', netIncome: 101.67 },
      { date: '2016-03-31', netIncome: 100.46 },
      { date: '2015-12-31', netIncome: 101.01 },
      { date: '2015-09-30', netIncome: 100.83 },
      { date: '2015-06-30', netIncome: 102.52 },
      { date: '2015-03-31', netIncome: 103.62 },
      { date: '2014-12-31', netIncome: 103.01 },
      { date: '2014-09-30', netIncome: 104.55 },
      { date: '2014-06-30', netIncome: 103.67 },
      { date: '2014-03-31', netIncome: 104.5 }
    ]
  },
  {
    id: 'KO',
    company_name: 'The Coca-Cola Company',
    financial_data: KO_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 34.3 },
      { date: '2018-09-30', netIncome: 34.14 },
      { date: '2018-06-30', netIncome: 34.44 },
      { date: '2018-03-31', netIncome: 34.72 },
      { date: '2017-12-31', netIncome: 36.21 },
      { date: '2017-09-30', netIncome: 37.31 },
      { date: '2017-06-30', netIncome: 38.86 },
      { date: '2017-03-31', netIncome: 40.7 },
      { date: '2016-12-31', netIncome: 41.86 },
      { date: '2016-09-30', netIncome: 42.45 },
      { date: '2016-06-30', netIncome: 43.25 },
      { date: '2016-03-31', netIncome: 43.87 },
      { date: '2015-12-31', netIncome: 44.29 },
      { date: '2015-09-30', netIncome: 45.17 },
      { date: '2015-06-30', netIncome: 45.72 },
      { date: '2015-03-31', netIncome: 46.13 },
      { date: '2014-12-31', netIncome: 46.0 },
      { date: '2014-09-30', netIncome: 46.17 },
      { date: '2014-06-30', netIncome: 46.22 },
      { date: '2014-03-31', netIncome: 46.4 }
    ]
  },
  {
    id: 'MCD',
    company_name: "McDonald's Corporation",
    financial_data: MCD_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 5.92 },
      { date: '2018-09-30', netIncome: 5.21 },
      { date: '2018-06-30', netIncome: 5.45 },
      { date: '2018-03-31', netIncome: 5.35 },
      { date: '2017-12-31', netIncome: 5.19 },
      { date: '2017-09-30', netIncome: 5.69 },
      { date: '2017-06-30', netIncome: 5.08 },
      { date: '2017-03-31', netIncome: 4.78 },
      { date: '2016-12-31', netIncome: 4.69 },
      { date: '2016-09-30', netIncome: 4.7 },
      { date: '2016-06-30', netIncome: 4.73 },
      { date: '2016-03-31', netIncome: 4.84 },
      { date: '2015-12-31', netIncome: 4.53 },
      { date: '2015-09-30', netIncome: 4.42 },
      { date: '2015-06-30', netIncome: 4.18 },
      { date: '2015-03-31', netIncome: 4.37 },
      { date: '2014-12-31', netIncome: 4.76 },
      { date: '2014-09-30', netIncome: 5.06 },
      { date: '2014-06-30', netIncome: 5.51 },
      { date: '2014-03-31', netIncome: 5.52 }
    ]
  },
  {
    id: 'MMM',
    company_name: '3M Company',
    financial_data: MMM_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 5.35 },
      { date: '2018-09-30', netIncome: 4.53 },
      { date: '2018-06-30', netIncome: 4.41 },
      { date: '2018-03-31', netIncome: 4.14 },
      { date: '2017-12-31', netIncome: 4.86 },
      { date: '2017-09-30', netIncome: 5.49 },
      { date: '2017-06-30', netIncome: 5.39 },
      { date: '2017-03-31', netIncome: 5.1 },
      { date: '2016-12-31', netIncome: 5.05 },
      { date: '2016-09-30', netIncome: 4.93 },
      { date: '2016-06-30', netIncome: 4.9 },
      { date: '2016-03-31', netIncome: 4.91 },
      { date: '2015-12-31', netIncome: 4.83 },
      { date: '2015-09-30', netIncome: 4.97 },
      { date: '2015-06-30', netIncome: 4.98 },
      { date: '2015-03-31', netIncome: 4.95 },
      { date: '2014-12-31', netIncome: 4.96 },
      { date: '2014-09-30', netIncome: 4.88 },
      { date: '2014-06-30', netIncome: 4.81 },
      { date: '2014-03-31', netIncome: 4.74 }
    ]
  },
  {
    id: 'MRK',
    company_name: 'Merck & Co., Inc.',
    financial_data: MRK_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 6.22 },
      { date: '2018-09-30', netIncome: 3.35 },
      { date: '2018-06-30', netIncome: 1.34 },
      { date: '2018-03-31', netIncome: 1.58 },
      { date: '2017-12-31', netIncome: 2.39 },
      { date: '2017-09-30', netIncome: 2.85 },
      { date: '2017-06-30', netIncome: 5.09 },
      { date: '2017-03-31', netIncome: 4.35 },
      { date: '2016-12-31', netIncome: 3.92 },
      { date: '2016-09-30', netIncome: 5.49 },
      { date: '2016-06-30', netIncome: 5.13 },
      { date: '2016-03-31', netIncome: 4.61 },
      { date: '2015-12-31', netIncome: 4.44 },
      { date: '2015-09-30', netIncome: 10.78 },
      { date: '2015-06-30', netIncome: 9.85 },
      { date: '2015-03-31', netIncome: 11.17 },
      { date: '2014-12-31', netIncome: 11.92 },
      { date: '2014-09-30', netIncome: 5.39 },
      { date: '2014-06-30', netIncome: 5.61 },
      { date: '2014-03-31', netIncome: 4.52 }
    ]
  },
  {
    id: 'MSFT',
    company_name: 'Microsoft Corporation',
    financial_data: MSFT_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 33.54 },
      { date: '2018-09-30', netIncome: 18.82 },
      { date: '2018-06-30', netIncome: 16.57 },
      { date: '2018-03-31', netIncome: 15.77 },
      { date: '2017-12-31', netIncome: 13.83 },
      { date: '2017-09-30', netIncome: 26.4 },
      { date: '2017-06-30', netIncome: 25.49 },
      { date: '2017-03-31', netIncome: 24.28 },
      { date: '2016-12-31', netIncome: 22.55 },
      { date: '2016-09-30', netIncome: 21.3 },
      { date: '2016-06-30', netIncome: 20.54 },
      { date: '2016-03-31', netIncome: 10.48 },
      { date: '2015-12-31', netIncome: 11.71 },
      { date: '2015-09-30', netIncome: 12.56 },
      { date: '2015-06-30', netIncome: 12.19 },
      { date: '2015-03-31', netIncome: 20.0 },
      { date: '2014-12-31', netIncome: 20.68 },
      { date: '2014-09-30', netIncome: 21.37 },
      { date: '2014-06-30', netIncome: 22.07 },
      { date: '2014-03-31', netIncome: 22.43 }
    ]
  },
  {
    id: 'NKE',
    company_name: 'Nike, Inc.',
    financial_data: NKE_FINANCIAL_DATA,
    net_income: [
      { date: '2018-11-30', netIncome: 2.16 },
      { date: '2018-08-31', netIncome: 2.08 },
      { date: '2018-05-31', netIncome: 1.93 },
      { date: '2018-02-28', netIncome: 1.8 },
      { date: '2017-11-30', netIncome: 3.87 },
      { date: '2017-08-31', netIncome: 3.94 },
      { date: '2017-05-31', netIncome: 4.24 },
      { date: '2017-02-28', netIncome: 4.08 },
      { date: '2016-11-30', netIncome: 3.89 },
      { date: '2016-08-31', netIncome: 3.83 },
      { date: '2016-05-31', netIncome: 3.76 },
      { date: '2016-02-29', netIncome: 3.78 },
      { date: '2015-11-30', netIncome: 3.62 },
      { date: '2015-08-31', netIncome: 3.49 },
      { date: '2015-05-31', netIncome: 3.27 },
      { date: '2015-02-28', netIncome: 3.11 },
      { date: '2014-11-30', netIncome: 3.0 },
      { date: '2014-08-31', netIncome: 2.88 },
      { date: '2014-05-31', netIncome: 2.69 },
      { date: '2014-02-28', netIncome: 2.65 }
    ]
  },
  {
    id: 'PFE',
    company_name: 'Pfizer Inc.',
    financial_data: PFE_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 11.15 },
      { date: '2018-09-30', netIncome: 23.82 },
      { date: '2018-06-30', netIncome: 22.55 },
      { date: '2018-03-31', netIncome: 21.75 },
      { date: '2017-12-31', netIncome: 21.31 },
      { date: '2017-09-30', netIncome: 9.81 },
      { date: '2017-06-30', netIncome: 8.32 },
      { date: '2017-03-31', netIncome: 7.3 },
      { date: '2016-12-31', netIncome: 7.22 },
      { date: '2016-09-30', netIncome: 6.27 },
      { date: '2016-06-30', netIncome: 7.04 },
      { date: '2016-03-31', netIncome: 7.62 },
      { date: '2015-12-31', netIncome: 6.96 },
      { date: '2015-09-30', netIncome: 8.36 },
      { date: '2015-06-30', netIncome: 8.9 },
      { date: '2015-03-31', netIncome: 9.18 },
      { date: '2014-12-31', netIncome: 9.14 },
      { date: '2014-09-30', netIncome: 10.48 },
      { date: '2014-06-30', netIncome: 10.4 },
      { date: '2014-03-31', netIncome: 21.58 }
    ]
  },
  {
    id: 'PG',
    company_name: 'The Procter & Gamble Company',
    financial_data: PG_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 10.52 },
      { date: '2018-09-30', netIncome: 9.83 },
      { date: '2018-06-30', netIncome: 9.49 },
      { date: '2018-03-31', netIncome: 9.81 },
      { date: '2017-12-31', netIncome: 9.84 },
      { date: '2017-09-30', netIncome: 15.22 },
      { date: '2017-06-30', netIncome: 15.08 },
      { date: '2017-03-31', netIncome: 14.82 },
      { date: '2016-12-31', netIncome: 15.04 },
      { date: '2016-09-30', netIncome: 10.37 },
      { date: '2016-06-30', netIncome: 10.25 },
      { date: '2016-03-31', netIncome: 8.89 },
      { date: '2015-12-31', netIncome: 8.35 },
      { date: '2015-09-30', netIncome: 7.51 },
      { date: '2015-06-30', netIncome: 6.91 },
      { date: '2015-03-31', netIncome: 8.89 },
      { date: '2014-12-31', netIncome: 9.29 },
      { date: '2014-09-30', netIncome: 10.35 },
      { date: '2014-06-30', netIncome: 11.39 },
      { date: '2014-03-31', netIncome: 10.76 }
    ]
  },
  {
    id: 'TRV',
    company_name: 'The Travelers Companies, Inc.',
    financial_data: TRV_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 2.5 },
      { date: '2018-09-30', netIncome: 2.44 },
      { date: '2018-06-30', netIncome: 2.02 },
      { date: '2018-03-31', netIncome: 2.09 },
      { date: '2017-12-31', netIncome: 2.04 },
      { date: '2017-09-30', netIncome: 2.43 },
      { date: '2017-06-30', netIncome: 2.85 },
      { date: '2017-03-31', netIncome: 2.92 },
      { date: '2016-12-31', netIncome: 2.99 },
      { date: '2016-09-30', netIncome: 2.91 },
      { date: '2016-06-30', netIncome: 3.13 },
      { date: '2016-03-31', netIncome: 3.27 },
      { date: '2015-12-31', netIncome: 3.41 },
      { date: '2015-09-30', netIncome: 3.59 },
      { date: '2015-06-30', netIncome: 3.58 },
      { date: '2015-03-31', netIncome: 3.45 },
      { date: '2014-12-31', netIncome: 3.67 },
      { date: '2014-09-30', netIncome: 3.62 },
      { date: '2014-06-30', netIncome: 3.56 },
      { date: '2014-03-31', netIncome: 3.8 }
    ]
  },
  {
    id: 'UNH',
    company_name: 'UnitedHealth Group Incorporated',
    financial_data: UNH_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 11.99 },
      { date: '2018-09-30', netIncome: 12.56 },
      { date: '2018-06-30', netIncome: 11.86 },
      { date: '2018-03-31', netIncome: 11.22 },
      { date: '2017-12-31', netIncome: 10.56 },
      { date: '2017-09-30', netIncome: 8.63 },
      { date: '2017-06-30', netIncome: 8.11 },
      { date: '2017-03-31', netIncome: 7.58 },
      { date: '2016-12-31', netIncome: 7.02 },
      { date: '2016-09-30', netIncome: 6.55 },
      { date: '2016-06-30', netIncome: 6.18 },
      { date: '2016-03-31', netIncome: 6.01 },
      { date: '2015-12-31', netIncome: 5.81 },
      { date: '2015-09-30', netIncome: 6.11 },
      { date: '2015-06-30', netIncome: 6.11 },
      { date: '2015-03-31', netIncome: 5.93 },
      { date: '2014-12-31', netIncome: 5.62 },
      { date: '2014-09-30', netIncome: 5.54 },
      { date: '2014-06-30', netIncome: 5.5 },
      { date: '2014-03-31', netIncome: 5.53 }
    ]
  },
  {
    id: 'V',
    company_name: 'Visa Inc.',
    financial_data: V_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 10.76 },
      { date: '2018-09-30', netIncome: 10.3 },
      { date: '2018-06-30', netIncome: 9.6 },
      { date: '2018-03-31', netIncome: 9.33 },
      { date: '2017-12-31', netIncome: 7.15 },
      { date: '2017-09-30', netIncome: 6.7 },
      { date: '2017-06-30', netIncome: 6.49 },
      { date: '2017-03-31', netIncome: 4.84 },
      { date: '2016-12-31', netIncome: 6.12 },
      { date: '2016-09-30', netIncome: 5.99 },
      { date: '2016-06-30', netIncome: 5.57 },
      { date: '2016-03-31', netIncome: 6.86 },
      { date: '2015-12-31', netIncome: 6.7 },
      { date: '2015-09-30', netIncome: 6.33 },
      { date: '2015-06-30', netIncome: 5.89 },
      { date: '2015-03-31', netIncome: 5.55 },
      { date: '2014-12-31', netIncome: 5.6 },
      { date: '2014-09-30', netIncome: 5.44 },
      { date: '2014-06-30', netIncome: 5.56 },
      { date: '2014-03-31', netIncome: 5.42 }
    ]
  },
  {
    id: 'VZ',
    company_name: 'Verizon Communications Inc.',
    financial_data: VZ_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 15.53 },
      { date: '2018-09-30', netIncome: 32.26 },
      { date: '2018-06-30', netIncome: 30.95 },
      { date: '2018-03-31', netIncome: 31.2 },
      { date: '2017-12-31', netIncome: 30.1 },
      { date: '2017-09-30', netIncome: 15.93 },
      { date: '2017-06-30', netIncome: 15.93 },
      { date: '2017-03-31', netIncome: 12.27 },
      { date: '2016-12-31', netIncome: 13.13 },
      { date: '2016-09-30', netIncome: 14.02 },
      { date: '2016-06-30', netIncome: 14.44 },
      { date: '2016-03-31', netIncome: 17.97 },
      { date: '2015-12-31', netIncome: 17.88 },
      { date: '2015-09-30', netIncome: 10.26 },
      { date: '2015-06-30', netIncome: 9.91 },
      { date: '2015-03-31', netIncome: 9.9 },
      { date: '2014-12-31', netIncome: 9.63 },
      { date: '2014-09-30', netIncome: 16.92 },
      { date: '2014-06-30', netIncome: 15.46 },
      { date: '2014-03-31', netIncome: 13.49 }
    ]
  },
  {
    id: 'WBA',
    company_name: 'Walgreens Boots Alliance, Inc.',
    financial_data: WBA_FINANCIAL_DATA,
    net_income: [
      { date: '2019-02-28', netIncome: 5.13 },
      { date: '2018-11-30', netIncome: 5.33 },
      { date: '2018-08-31', netIncome: 5.02 },
      { date: '2018-05-31', netIncome: 4.31 },
      { date: '2018-02-28', netIncome: 4.13 },
      { date: '2017-11-30', netIncome: 3.85 },
      { date: '2017-08-31', netIncome: 4.08 },
      { date: '2017-05-31', netIncome: 4.31 },
      { date: '2017-02-28', netIncome: 4.25 },
      { date: '2016-11-30', netIncome: 4.12 },
      { date: '2016-08-31', netIncome: 4.17 },
      { date: '2016-05-31', netIncome: 3.17 },
      { date: '2016-02-29', netIncome: 3.37 },
      { date: '2015-11-30', netIncome: 4.48 },
      { date: '2015-08-31', netIncome: 4.22 },
      { date: '2015-05-31', netIncome: 4.0 },
      { date: '2015-02-28', netIncome: 3.41 },
      { date: '2014-11-30', netIncome: 2.09 },
      { date: '2014-08-31', netIncome: 1.93 },
      { date: '2014-05-31', netIncome: 2.88 }
    ]
  },
  {
    id: 'WMT',
    company_name: 'Walmart Inc.',
    financial_data: WMT_FINANCIAL_DATA,
    net_income: [
      { date: '2019-01-31', netIncome: 6.67 },
      { date: '2018-10-31', netIncome: 5.16 },
      { date: '2018-07-31', netIncome: 5.2 },
      { date: '2018-04-30', netIncome: 8.96 },
      { date: '2018-01-31', netIncome: 9.86 },
      { date: '2017-10-31', netIncome: 11.44 },
      { date: '2017-07-31', netIncome: 12.73 },
      { date: '2017-04-30', netIncome: 13.6 },
      { date: '2017-01-31', netIncome: 13.64 },
      { date: '2016-10-31', netIncome: 14.46 },
      { date: '2016-07-31', netIncome: 14.73 },
      { date: '2016-04-30', netIncome: 14.43 },
      { date: '2016-01-31', netIncome: 14.69 },
      { date: '2015-10-31', netIncome: 15.09 },
      { date: '2015-07-31', netIncome: 15.49 },
      { date: '2015-04-30', netIncome: 16.11 },
      { date: '2015-01-31', netIncome: 16.36 },
      { date: '2014-10-31', netIncome: 15.83 },
      { date: '2014-07-31', netIncome: 15.86 },
      { date: '2014-04-30', netIncome: 15.83 }
    ]
  },
  {
    id: 'XOM',
    company_name: 'Exxon Mobil Corporation',
    financial_data: XOM_FINANCIAL_DATA,
    net_income: [
      { date: '2018-12-31', netIncome: 20.84 },
      { date: '2018-09-30', netIncome: 23.22 },
      { date: '2018-06-30', netIncome: 20.95 },
      { date: '2018-03-31', netIncome: 20.35 },
      { date: '2017-12-31', netIncome: 19.71 },
      { date: '2017-09-30', netIncome: 13.01 },
      { date: '2017-06-30', netIncome: 11.69 },
      { date: '2017-03-31', netIncome: 10.04 },
      { date: '2016-12-31', netIncome: 7.84 },
      { date: '2016-09-30', netIncome: 8.94 },
      { date: '2016-06-30', netIncome: 10.53 },
      { date: '2016-03-31', netIncome: 13.02 },
      { date: '2015-12-31', netIncome: 16.15 },
      { date: '2015-09-30', netIncome: 19.94 },
      { date: '2015-06-30', netIncome: 23.77 },
      { date: '2015-03-31', netIncome: 28.36 },
      { date: '2014-12-31', netIncome: 32.52 },
      { date: '2014-09-30', netIncome: 34.3 },
      { date: '2014-06-30', netIncome: 34.1 },
      { date: '2014-03-31', netIncome: 32.18 }
    ]
  }
];

export default COMPANY_DATA;
