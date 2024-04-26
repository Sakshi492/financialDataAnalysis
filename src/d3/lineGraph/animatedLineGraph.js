import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './styles/animatedLineGraph.scss';

const AnimatedLineGraph = ({
  data,
  givenWidth,
  givenHeight,
  xLabel,
  yLabel,
  hasQuarters,
  customXAxisTickFormat,
  hideAlternate
}) => {
  const svgRef = useRef();
  const svgxAxisRef = useRef();
  const svgyAxisRef = useRef();
  const svgxAxisLabelRef = useRef();
  const svgyAxisLabelRef = useRef();

  console.log('AnimatedLineGraph', data);

  useEffect(() => {
    if (data && data.length > 0) {
      const svg = d3.select(svgRef.current);
      const svgxAxis = d3.select(svgxAxisRef.current);
      const svgyAxis = d3.select(svgyAxisRef.current);
      const svgxAxisLabel = d3.select(svgxAxisLabelRef.current);
      const svgyAxisLabel = d3.select(svgyAxisLabelRef.current);
      // Get the DOM node of the selected SVG element
      const svgNode = svg.node();

      // Get the bounding client rect of the SVG element
      const { width, height } = svgNode.getBoundingClientRect();
      svg.selectAll('*').remove();
      svgxAxis.selectAll('*').remove();
      svgyAxis.selectAll('*').remove();
      svgxAxisLabel.selectAll('*').remove();
      svgyAxisLabel.selectAll('*').remove();
      // Define width and height of the SVG

      let datapoints = [];
      data.forEach(element => {
        datapoints = [...datapoints, ...element.items];
      });

      const dates = datapoints.map(d => d.date);
      const values = datapoints.map(d => d.value);

      let xScale;
      if (hasQuarters === true) {
        xScale = d3
          .scaleLinear()
          .domain([0, d3.max(dates)])
          .range([0, width]);
      } else {
        xScale = d3
          .scaleTime()
          .domain(d3.extent(dates))
          .range([0, width]);
      }

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(values)])
        .range([height, 0]);

      // Draw x-axis
      const xAxis = d3.axisBottom(xScale).tickFormat(customXAxisTickFormat);
      const xAxisGroup = svgxAxis
        .append('g')
        .attr('class', 'svg-x-axis')
        .call(xAxis)
        .selectAll('path');

      svgxAxisLabel.style('display', 'block');
      svgyAxisLabel.style('display', 'block');

      // Draw y-axis
      const yAxis = d3.axisLeft(yScale);
      const yAxisGroup = svgyAxis
        .append('g')
        .attr('class', 'svg-y-axis')
        .call(yAxis)
        .selectAll('path');

      data.forEach((element, index) => {
        // Draw lines
        const items = element.items;
        const validItems = items.filter(d => !isNaN(d.date) && !isNaN(d.value));
        const line = d3
          .line()
          .x(d => xScale(d.date))
          .y(d => yScale(d.value))
          .curve(d3.curveCardinal.tension(0.5));

        const path = svg
          .append('path')
          .datum(validItems)
          .attr('fill', 'none')
          .attr('class', 'line-graph')
          .attr('stroke', element.color)
          .attr('stroke-width', 2)
          .attr('d', line);

        const totalLength = path.node().getTotalLength();
        path
          .attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .transition()
          .duration(2000)
          .style('transition-timing-function', 'cubic-bezier(.57,.21,.69,1.25)')
          .attr('stroke-dashoffset', 0);

        // Animate ticks in y-axis
        svgyAxis
          .selectAll('.tick')
          .style('opacity', 0)
          .attr('transform', `translate(0, 0)`)
          .transition()
          .duration(100)
          .delay((d, i) => i * 50)
          .attr('transform', d => `translate(0, ${yScale(d)})`)
          .style('opacity', 1);

        svgxAxis
          .selectAll('.tick')
          .style('opacity', 0)
          .attr('transform', `translate(0, 0)`)
          .transition()
          .duration(100)
          .delay((d, i) => i * 50)
          .attr('transform', d => `translate(${xScale(d)},0)`)
          .style('opacity', 1);
      });
    }
  }, [data]);

  return (
    <div className="graph-component">
      <svg
        ref={svgRef}
        width={givenWidth ?? 300}
        height={givenHeight ?? 300}
      ></svg>
      <svg
        ref={svgxAxisRef}
        width={givenWidth ?? 300}
        height={givenHeight ?? 300}
        className={`xAxis-svg ${hideAlternate ? 'hideAlternate' : ''}`}
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

export default AnimatedLineGraph;
