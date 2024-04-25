const HOMEPAGE_LITERALS = {
  HOMEPAGE_HEADER: 'Financial Data Analysis',
  SUBHEADER: 'Select a company to start with.',
  VISUAL_HEADER_1: 'Q1. Historical Stock Performance (Closing Price)',
  VISUAL_DESCRIPTION_1:
    'The graph depicts upward or downward movements in stock prices over different time intervals. Recognizing these trends helps investors make informed decisions about buying, selling, or holding onto stocks.',
  VISUAL_DESCRIPTION_2:
    'Assessing the impact of company-specific factors like profitability on stock performance provides insight into market dynamics and helps investors gauge investor sentiment toward particular companies or industries.',
  VISUAL_DESCRIPTION_4:
    'Analyzing whether abnormal trading volume spikes coincide with significant market or company-specific events helps in identifying the catalysts behind these volume movements. Monitoring abnormal trading volume spikes helps in assessing and managing risk associated with specific stocks or the overall market. Sudden increases in trading volume may indicate heightened volatility or uncertainty, prompting investors to adjust their positions accordingly to mitigate potential losses.',
  VISUAL_HEADER_2:
    'Q3. Net Income vs Historical Stock Performance (Closing Price)',
  VISUAL_HEADER_3: 'Q4. Trading Volume Spikes',
  ANALYSE_BUTTON: 'See Interactive Analysis',
  COMPARE_BUTTON: 'Compare two Companies',
  DROPDOWN_STOCK: 'Select a company stock',
  CONTROLS_HEADER:
    'Select two companies to visualise correlation between them : ',
  DROPDOWN_HEADER_1: 'Select First Company : ',
  DROPDOWN_HEADER_2: 'Select Second Company : ',
  CORRELATION_DEFINITION:
    'Correlation in financial data measures the strength and direction of the linear relationship between two variables, such as stock prices or economic indicators. It helps investors assess portfolio risk, diversify holdings, and identify opportunities for hedging or sector rotation strategies based on the degree of association between variables.',
  GAUGE: {
    MIN_VALUE: 0,
    MAX_VALUE: 1,
    LABEL: 'Correlation',
    MAX_ANGLE: 120,
    MIN_ANGLE: -120
  },
  BUBBLE_GROUPS: {
    HEADER: 'Q2.Are there any abnormal trading volume spikes observed?',
    CHART_DESCRIPTOR: 'Trading Volume :'
  },
  COMPARISON: {
    SUBHEADER: 'Select two companies from the dropdown',
    METER_HEADER: 'Correlation Meter',
    FIRST_DROPDOWN: 'Select first company : ',
    SECOND_DROPDOWN: 'Select second company : ',
    VISUAL_HEADER:
      'Q2. Correlation among the stock prices of selected companies.',
    VISUAL_DESCRIPTION:
      'Correlation analysis helps in assessing and managing portfolio risk. Stocks with high positive correlations tend to move in the same direction, increasing the overall risk of the portfolio. Conversely, stocks with low or negative correlations can help reduce portfolio risk by offsetting losses in one stock with gains in another.',
    METER_DESCRIPTION:
      'Correlation between any 2 stocks can range from -1 to +1. Understanding the correlation between stocks from different industries is crucial for diversifying investment portfolios. Stocks that have low or negative correlations tend to move independently of each other, providing better diversification benefits.'
  },
  TRADING: {
    CONRTOL_HEADER: 'Impact of Trading Volume Spikes on Stock Price - ',
    AREA_CHART_DESC: 'Percentage Change in Stock Price',
    DROPDOWN: 'Select a grouping type :',
    DESCRIPTION:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    DROPDOWN_OPTIONS: [
      {
        label: 'Yearly Data',
        value: 'year'
      },
      {
        label: 'Quarterly Data',
        value: 'quarter'
      },
      {
        label: 'Monthly Data',
        value: 'month'
      },
      {
        label: 'Weekly Data',
        value: 'week'
      },
      {
        label: 'Daily Data',
        value: 'day'
      }
    ]
  }
};

export default HOMEPAGE_LITERALS;
