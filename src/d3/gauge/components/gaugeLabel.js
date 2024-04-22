import React, { PureComponent } from 'react';
import { scaleLinear, line } from 'd3';

const getTickRef = (tickCount, minVal, maxVal, minAngle, maxAngle) => {
  if (tickCount % 2 === 0)
    console.warn(
      'Ticks should be odd numbered to ensure a tick in in the middle of the gauge.'
    );

  const idxToRef = scaleLinear()
    .domain([0, tickCount - 1])
    .range([0, 1]);

  const idxToVal = scaleLinear()
    .domain([0, tickCount - 1])
    .range([minVal, maxVal]);

  const refToDeg = scaleLinear()
    .domain([0, 1])
    .range([minAngle, maxAngle]);

  return [...Array(tickCount)].map((v, i) => ({
    index: i,
    val: idxToVal(i),
    deg: refToDeg(idxToRef(i))
  }));
};

const tickLineLong = line()
  .x(0)
  .y((d, i) => i)({ length: 35 });

const tickLineShort = line()
  .x(0)
  .y((d, i) => i)({ length: 12 });

class GaugeLabel extends PureComponent {
  render() {
    const {
      disabled,
      center,
      tickCount,
      min,
      max,
      maxAngle,
      minAngle,
      offsetText,
      length = 300 / 2 - 30
    } = this.props;

    const ticks = getTickRef(tickCount, min, max, minAngle, maxAngle);

    return ticks.map(({ val, deg, index }) => {
      return (
        <g
          className="gauge-label"
          style={{ userSelect: 'none', textAlign: 'center' }}
          key={val}
          transform={`translate(${center.x},${center.y}) rotate(${deg})`}
        >
          <path
            d={
              index === 0 || index === ticks.length - 1
                ? tickLineLong
                : tickLineShort
            }
            stroke="#344c69"
            strokeWidth="1"
            transform={`translate(0,${7.5 - length})`}
            style={{
              transition: 'all .25s .25s',
              stroke: '#ffe7d0',
              strokeWidth: '2'
            }}
            opacity={disabled ? 0.4 : undefined}
          />
          <text
            transform={`translate(${offsetText},${-length})`}
            style={{
              transition: 'all .25s .25s',
              fontWeight: 'bold',
              fill: '#ffe7d0'
            }}
            opacity={disabled ? 0.4 : undefined}
          >
            {Number(val)}
          </text>
        </g>
      );
    });
  }
}

export default GaugeLabel;
