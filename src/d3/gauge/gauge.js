import React, { useCallback, useMemo } from 'react';
import { scaleLinear } from 'd3';
import GaugeArc from './components/gaugeArc';
import GaugeLabel from './components/gaugeLabel';
import Pointer from './components/pointer';
import Gradient from './components/gradient';
import './styles/gauge.scss';

const useGradient = (startColour, stopColour, id) => {
  return {
    color: `url(#${id})`,
    node: disabled => (
      <Gradient
        start={startColour}
        end={stopColour}
        id={id}
        disabled={disabled}
      />
    )
  };
};

const Gauge = ({
  height,
  width,
  disabled,
  value = -1,
  min = 0,
  max = 100,
  maxAngle = 135,
  minAngle = -135,
  tickCount = 5,
  labelProps = {
    offsetText: -7.5
  },
  uom = '',
  uomProps = {
    offsetText: -7.5
  },
  pointerLabel = '',
  ...props
}) => {
  /** Red gradient props for arcSegments */
  const redFade = useGradient(
    'rgba(255,0,0,0)',
    'rgba(255,0,0,1)',
    'redFade-randomkey'
  );

  /** Green1 gradient props for arcSegments */
  const green1Fade = useGradient(
    'rgba(0,255,0,1)',
    'rgba(0,255,0,0)',
    'green1Fade-randomkey'
  );

  /** Green2 gradient props for arcSegments */
  const green2Fade = useGradient(
    'rgba(0,255,0,1)',
    'rgba(0,255,0,0)',
    'green2Fade-randomkey'
  );

  /** Blue gradient props for arcSegments */
  const blueFade = useGradient(
    'rgba(0,0,255,0)',
    'rgba(0,0,255,1)',
    'blueFade-randomkey'
  );

  /** Renders coloured arcs to demarcate target ranges. */
  const arcSegments = [
    { min: 0, max: 0.5, color: 'orange' },
    { min: 0.5, max: 1, color: '#0084ff' },
    { min: 0, max: 0.4, ...redFade },
    { min: 0.25, max: 0.5, ...green1Fade },
    { min: 0.5, max: 0.75, ...green2Fade },
    { min: 0.6, max: 1, ...blueFade }
  ];

  const valueScale = useCallback(
    scaleLinear()
      .domain([min, max])
      .range([0, 1]),
    [min, max]
  );

  /** Value scaled to [0,1] */
  const valueRef = useMemo(() => valueScale(value), [value, valueScale]);

  const gaugeOrigin = {
    x: 140,
    y: 140
  };

  return (
    <div className="gauge-container">
      <div className="svg-container">
        <svg
          className="gauge-svg"
          width={props.width ?? 250}
          height={props.height ?? 250}
          viewBox={'0 0 280 280'}
          style={{
            transition: 'all 0.25s 0.25s'
          }}
          {...props}
        >
          <GaugeArc
            stroke={'#ee5138'}
            strokeWidth={4}
            center={gaugeOrigin}
            maxAngle={maxAngle}
            minAngle={minAngle}
            opacity={disabled ? 0.25 : undefined}
          />
          <GaugeLabel
            disabled={disabled}
            center={gaugeOrigin}
            tickCount={tickCount}
            min={min}
            max={max}
            maxAngle={maxAngle}
            minAngle={minAngle}
            {...labelProps}
          />
          {arcSegments.map(({ min, max, color, node }, idx) => (
            <g key={`arcsegment-${idx}`}>
              {typeof node === 'function' ? node(disabled) : node}
              <GaugeArc
                key={`gauge-arcsegment-${idx}`}
                inset={12}
                min={min}
                max={max}
                stroke={
                  disabled && !node
                    ? `rgba(${idx * 15},${idx * 15},${idx * 15}, ${idx * 0.1 +
                        0.1})`
                    : color
                }
                strokeWidth={20}
                center={gaugeOrigin}
                maxAngle={maxAngle}
                minAngle={minAngle}
              />
            </g>
          ))}
          <Pointer
            value={disabled ? -0.025 : valueRef}
            center={gaugeOrigin}
            disabled={disabled}
            maxAngle={maxAngle}
            minAngle={minAngle}
          />
        </svg>
      </div>
      <div className="gauge-labels">
        {props.sublabel && (
          <div className="gauge-value">{value.toFixed(3)}</div>
        )}
        <div className="gauge-sublabel">{props.sublabel}</div>
      </div>
    </div>
  );
};

export default Gauge;
