import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './histogram.scss';

const Histogram = ({ data, givenWidth, givenHeight, xLabel, yLabel }) => {
  const svgRef = useRef();
  const svgxAxisRef = useRef();
  const svgyAxisRef = useRef();
  const svgxAxisLabelRef = useRef();
  const svgyAxisLabelRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      const svg = d3.select(svgRef.current);
      const svgxAxis = d3.select(svgxAxisRef.current);
      const svgyAxis = d3.select(svgyAxisRef.current);
      const svgxAxisLabel = d3.select(svgxAxisLabelRef.current);
      const svgyAxisLabel = d3.select(svgyAxisLabelRef.current);

      const svgNode = svg.node();

      const { width, height } = svgNode.getBoundingClientRect();

      svg.selectAll('*').remove();
      svgxAxis.selectAll('*').remove();
      svgyAxis.selectAll('*').remove();
      svgxAxisLabel.selectAll('*').remove();
      svgyAxisLabel.selectAll('*').remove();

      let datapoints = [];

      data.forEach(element => {
        datapoints = [...datapoints, ...element.items];
      });

      // Extract dates and values from the data
      const dates = datapoints.map(d => d.date);
      const values = datapoints.map(d => d.value);

      // Define x and y scales
      const xScale = d3
        .scaleTime()
        .domain(d3.extent(dates))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([d3.min(values) - 5, d3.max(values)])
        .nice()
        .range([height, 0]);

      const yAxis = d3.axisLeft(yScale);

      const yAxisGroup = svgyAxis
        .append('g')
        .attr('class', 'svg-y-axis')
        .attr('transform', `translate(${width}, 0)`) // Move the second axis to the right
        .call(yAxis)
        .selectAll('path');

      svgyAxisLabel.style('display', 'block');

      svg
        .selectAll('.bar')
        .data(datapoints)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.date) - 5) // Adjust bar position for better visualization
        .attr('y', height) // Start bars from the bottom
        .attr('width', 10) // Adjust bar width as needed
        .attr('height', 0) // Start bars with height 0
        .attr('fill', '#004D97')
        // Transition bars to their actual position and height
        .transition()
        .duration(1000) // Animation duration
        .delay((d, i) => (datapoints.length - i) * 100) // Add delay for staggered animation
        .attr('y', d => yScale(d.value))
        .attr('height', d => height - yScale(d.value));
    }
  }, [data]);

  return (
    <div className="histogram-component">
      <svg
        ref={svgRef}
        width={givenWidth ?? 300}
        height={givenHeight ?? 300}
      ></svg>
      <svg
        ref={svgxAxisRef}
        width={givenWidth ?? 300}
        height={givenHeight ?? 300}
        className="xAxis-svg"
      ></svg>
      <svg
        ref={svgyAxisRef}
        width={givenWidth ?? 300}
        height={givenHeight ?? 300}
        className="yAxis-svg"
      ></svg>
      <div ref={svgyAxisLabelRef} className="yAxisLabel">
        {yLabel}
      </div>
      <div ref={svgxAxisLabelRef} className="xAxisLabel">
        {xLabel}
      </div>
    </div>
  );
};

export default Histogram;
