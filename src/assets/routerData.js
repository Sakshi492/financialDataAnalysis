import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../routes/homepage/homepage';

function RouterData() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
    </Routes>
  );
}

export default RouterData;
