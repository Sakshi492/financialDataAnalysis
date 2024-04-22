import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './graphComponent.scss';

const AnimatedLineGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      // Define width and height of the SVG
      const width = 300;
      const height = 300;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const extraspace = 10;
      const innerWidth = width - margin.left - margin.right - 2 * extraspace;
      const innerHeight = height - margin.top - margin.bottom - 5 * extraspace;
      const legendItemHeight = 10;
      const legendItemWidth = 10;

      let datapoints = [];
      data.forEach(element => {
        datapoints = [...datapoints, ...element.items];
      });

      const dates = datapoints.map(d => d.date);
      const values = datapoints.map(d => d.value);

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(dates))
        .range([0, innerWidth]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(values)])
        .range([innerHeight, 0]);

      const brushed = event => {
        if (!event.selection) return; // Ignore empty selections.

        const [x0, x1] = event.selection.map(xScale.invert);
        const [y0, y1] = event.selection.map(yScale.invert);

        // Update scales
        xScale.domain([x0, x1]);
        yScale.domain([y0, y1]);

        // Update axes
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);

        // Update lines
        svg.selectAll('.line-graph').attr('d', line);
      };

      // Draw x-axis
      const xAxis = d3.axisBottom(xScale);
      const xAxisGroup = svg
        .append('g')
        .attr('class', 'svg-x-axis')
        .attr(
          'transform',
          `translate(${margin.left + extraspace}, ${margin.top +
            innerHeight +
            3 * extraspace})`
        )
        .call(xAxis)
        .selectAll('path')
        .style('stroke', '#ffe7d0');

      // Draw y-axis
      const yAxis = d3.axisLeft(yScale);
      svg
        .append('g')
        .attr('class', 'svg-y-axis')
        .attr(
          'transform',
          `translate(${margin.left + extraspace}, ${margin.top +
            3 * extraspace})`
        )
        .call(yAxis)
        .selectAll('path')
        .style('stroke', '#ffe7d0');

      // Draw x-axis label
      svg
        .append('text')
        .attr('class', 'x-axis-label')
        .attr('x', width / 2)
        .attr('y', height - margin.bottom / 2)
        .style('text-anchor', 'middle')
        .text('Time');

      svg
        .append('path')
        .attr('class', 'x-axis-arrow')
        .attr(
          'd',
          `M ${width / 2 - 5} ${height - 20} L ${width / 2 + 5} ${height -
            20} L ${width / 2} ${height - 10} Z`
        )
        .style('fill', '#fc6e20');

      // Draw y-axis label
      svg
        .append('text')
        .attr('class', 'y-axis-label')
        .attr('x', width / 2)
        .attr('y', height - margin.bottom / 2)
        .style('text-anchor', 'middle')
        .text('Closing Price');

      svg
        .append('path')
        .attr('class', 'y-axis-arrow')
        .attr(
          'd',
          `M ${width / 2 - 5} ${height - 20} L ${width / 2 + 5} ${height -
            20} L ${width / 2} ${height - 10} Z`
        )
        .style('fill', '#fc6e20');

      // Add legend
      const legend = svg
        .append('g')
        .attr('class', 'legend')
        .attr(
          'transform',
          `translate(${innerWidth + margin.left + 10}, ${margin.top})`
        );

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
          .attr(
            'transform',
            `translate(${margin.left + extraspace}, ${margin.top +
              3 * extraspace})`
          )
          .attr('stroke-width', 1)
          .attr('d', line);

        const totalLength = path.node().getTotalLength();
        path
          .attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .transition()
          .duration(2000)
          .style('transition-timing-function', 'cubic-bezier(.57,.21,.69,1.25)')
          .attr('stroke-dashoffset', 0);

        legend
          .append('rect')
          .attr('width', legendItemWidth)
          .attr('height', legendItemHeight)
          .attr('class', 'legend-colors')
          .attr('fill', element.color)
          .attr('transform', `translate(5,${36 - index * 20})`);

        legend
          .append('text')
          .attr('x', 20)
          .attr('class', 'legend-labels')
          .attr('y', 40)
          .attr('dy', '0.35em')
          .attr('transform', `translate(0,-${index * 20})`)
          .style('fill', '#ffe7d0')
          .text(` - ${element.name}`);

        // Add brushing for zooming
        const brush = d3
          .brushX()
          .extent([
            [margin.left + extraspace, margin.top],
            [margin.left + extraspace + innerWidth, margin.top + innerHeight]
          ])
          .on('end', brushed);

        svg
          .append('g')
          .attr('class', 'brush')
          .call(brush);
      });
    }
  }, [data]);

  return (
    <div className="graph-component">
      <svg ref={svgRef} width="300" height="300"></svg>
    </div>
  );
};

export default AnimatedLineGraph;
