import React, { PureComponent } from 'react';
import { line, scaleLinear } from 'd3';
import { Tooltip } from '@material-ui/core';

class Pointer extends PureComponent {
  render() {
    const {
      width = 12.5,
      head = (0.8 * 250) / 2 - 5,
      tail = 5,
      value = -5,
      tooltip = '',
      center = { x: 125, y: 135 },
      minAngle,
      maxAngle,
      disabled
    } = this.props;

    const pointerLine = line()([
      [width / 2, 0],
      [0, -head],
      [-(width / 2), 0],
      [0, tail],
      [width / 2, 0]
    ]);
    const valueScale = scaleLinear()
      .domain([0, 1])
      .range([minAngle, maxAngle]);
    const pointerValue = valueScale(value);

    return (
      <Tooltip
        title={tooltip}
        disableFocusListener={!Boolean(tooltip)}
        disableTouchListener={!Boolean(tooltip)}
        disableHoverListener={!Boolean(tooltip)}
      >
        <path
          className="gauge-pointer"
          d={pointerLine}
          transform={`translate(${center.x}, ${center.y}) rotate(${pointerValue})`}
          fill={'#ffe7d0'}
          opacity={disabled ? 0.3 : undefined}
          style={{
            transition: 'all 0.5s',
            transitionDelay: '0.35s',
            transitionTimingFunction: 'cubic-bezier(.57,.21,.69,1.25)'
          }}
        />
      </Tooltip>
    );
  }
}

export default Pointer;
