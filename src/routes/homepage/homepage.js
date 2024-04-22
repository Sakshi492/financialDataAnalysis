import React, { useState } from 'react';
import './styles/homepage.scss';
import HOMEPAGE_LITERALS from '../../constants/homepage';
import HomepageControls from '../../components/homePage/homepageControls/homepageControls';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage-header">{HOMEPAGE_LITERALS.HOMEPAGE_HEADER}</div>
      <div className="homepage-content">
        <div className="homepage-visual">
          <div className="homepage-subheader">
            {HOMEPAGE_LITERALS.SUBHEADER}
          </div>
        </div>
        <div className="homepage-controls">
          <HomepageControls />
        </div>
      </div>
    </div>
  );
}
