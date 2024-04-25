import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/streamGraph.scss';

const StreamGraph = ({ data, width, height }) => {
  const svgRef = useRef();
  const svgyAxisRef = useRef();
  const svgxAxisLabelRef = useRef();
  const svgyAxisLabelRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    const svgyAxis = d3.select(svgyAxisRef.current);
    const svgxAxisLabel = d3.select(svgxAxisLabelRef.current);
    const svgyAxisLabel = d3.select(svgyAxisLabelRef.current);
    svgyAxis.selectAll('*').remove();
    svgxAxisLabel.selectAll('*').remove();
    svgyAxisLabel.selectAll('*').remove();
    svg.selectAll('*').remove();

    const dates = data.map(d => d.key);

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(dates))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    const area = d3
      .area()
      .x(d => xScale(d.key))
      .y0(d => yScale(Math.min(0, d.value))) // Adjust for negative values
      .y1(d => yScale(Math.max(0, d.value))) // Adjust for negative values
      .curve(d3.curveCardinal);

    const initialData = data.map(d => ({ key: d.key, value: 0 }));

    svg
      .append('path')
      .datum(data)
      .attr('stroke', '#004D97')
      .attr('fill', '#004D97')
      .attr('d', area(initialData))
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .attr('d', area(data));

    const yAxis = d3.axisLeft(yScale);

    svgyAxis
      .append('g')
      .attr('class', 'svg-y-axis')
      .attr('transform', `translate(${width}, 0)`) // Move the second axis to the right
      .call(yAxis)
      .selectAll('path');

    svgxAxisLabel.style('display', 'block');
    svgyAxisLabel.style('display', 'block');
  }, [data, width, height]);

  return (
    <div className="stream-component">
      <svg
        className="stream-graph-svg"
        ref={svgRef}
        width={width}
        height={height}
      ></svg>
      <svg
        ref={svgyAxisRef}
        width={width ?? 300}
        height={height ?? 300}
        className="yAxis-svg"
      ></svg>
      <div ref={svgyAxisLabelRef} className="yAxisLabel">
        {'Percentage Change'}
      </div>
      <div ref={svgxAxisLabelRef} className="xAxisLabel">
        {'Date'}
      </div>
    </div>
  );
};

export default StreamGraph;
