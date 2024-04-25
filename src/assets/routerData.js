import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../routes/homepage/homepage';
import TradingVolumePage from '../routes/tradingVolume/tradingVolume';
import ComparisonPage from '../routes/comparisonPage/comparisonPage';
import AcknowledgementPage from '../routes/acknowledgementPage/acknowledgementPage';

function RouterData() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/compare" element={<ComparisonPage />} />
      <Route path="/acknowledgement" element={<AcknowledgementPage />} />
      <Route
        path="/trading-volume/:companyId"
        element={<TradingVolumePage />}
      />
    </Routes>
  );
}

export default RouterData;
