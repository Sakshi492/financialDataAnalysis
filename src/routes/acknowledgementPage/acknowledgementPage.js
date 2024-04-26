import React, { useEffect, useState } from 'react';
import './styles/acknowledgementPage.scss';
import HOMEPAGE_LITERALS from '../../constants/homepage';

export default function AcknowledgementPage() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, []);

  const acknowledgements = HOMEPAGE_LITERALS.ACKNOWLEDGEMENTS.map(
    (acknowledgement, i) => {
      return (
        <div
          className={`content ${!animate ? 'visible' : ''}`}
          key={`acknowledgement-${i}`}
          style={{ transitionDelay: `${i / 4}s` }}
        >
          <div className="content-header">{acknowledgement.header}</div>
          <div className="content-points">
            {acknowledgement.points.map((point, j) => {
              return (
                <div
                  className="content-point"
                  key={`acknowledgement-${i}-point-${j}`}
                >
                  {`${j + 1}. ${point.content}`}
                  {point.resource && (
                    <a href={point.resource} target="_blank" className="link">
                      {point.resource}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  );

  return (
    <div className="acknowledgementContainer">
      <div className="header">Acknowledgements, References and Data : </div>
      {acknowledgements}
    </div>
  );
}
