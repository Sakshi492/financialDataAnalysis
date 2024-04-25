import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/bubbleChart.scss';

const BubbleChart = ({
  data,
  width,
  height,
  color,
  onBubbleClick,
  hoverColor
}) => {
  const svgRef = useRef();
  const tooltipRef = useRef(null);

  // Function to calculate opacity based on radius
  const calculateOpacity = (radius, maxRadius, minRadius) => {
    // Adjust the exponent to control the rate of change in opacity
    const clampedNumber = Math.min(Math.max(radius, minRadius), maxRadius);
    let ratio = (clampedNumber - minRadius) / (maxRadius - minRadius);

    if (ratio < 0.7) ratio += 0.1;
    if (ratio < 0.7) ratio += 0.2;
    else if (ratio < 0.5) ratio += 0.3;
    else if (ratio < 0.3) ratio += 0.4;
    return ratio;
  };

  useEffect(() => {
    if (!data || data.length <= 0) return;

    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    svg.selectAll('*').remove();

    // Set up pack layout
    const pack = d3
      .pack()
      .size([width, height])
      .padding(1.5);

    // Convert data to hierarchy
    const root = d3.hierarchy({ children: data }).sum(d => d.volume);

    // Generate bubble positions
    const nodes = pack(root).descendants();

    const randomPositions = nodes.map(() => ({
      x: Math.random() * width,
      y: Math.random() * height
    }));

    let minRadius = 999;
    let maxRadius = 0;

    nodes.forEach(node => {
      if (node.r < minRadius) minRadius = node.r;
      if (node.r > maxRadius && node.r !== nodes[0].r) maxRadius = node.r;
    });

    // Draw bubbles with initial position outside the viewport
    svg
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => randomPositions[i].x)
      .attr('cy', (d, i) => randomPositions[i].y)
      .attr('r', 0) // Start with radius 0
      .style('fill', color)
      .transition() // Apply transition for animation
      .duration(1000) // Animation duration
      .delay((d, i) => i) // Add delay for staggered animation
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .style('opacity', d => calculateOpacity(d.r, maxRadius, minRadius))
      .attr('r', d => {
        return d.r;
      });

    svg.select('circle').remove();

    svg
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .style('fill', 'black')
      .style('font-size', d => (d.r / 4 > 4 ? d.r / 4 : 0))
      .text(d => {
        if (!d.data.key) return '';
        else if (d.data.key instanceof Date) return d.data.key.toShortFormat();
        return d.data.key;
      })
      .on('click', function(event, d) {
        onBubbleClick(d);
      })
      .on('mouseover', function(event, d) {
        d3.select(this)
          .style('fill', 'black')
          .style('font-weight', 'bold'); // Change color on hover

        tooltip
          .style('opacity', 0.9)
          .html(
            `<div>${getToolTipLabel(d.data.key)}</div><div>Trading Volume: ${
              d.data.volume
            }</div>`
          );
      })
      .on('mouseout', function(event, d) {
        d3.select(this).style('fill', 'black'); // Change color on mouseout
        tooltip.style('opacity', 0);
      });

    svg
      .selectAll('circle')
      .on('click', function(event, d) {
        onBubbleClick(d);
      })
      .on('mouseover', function(event, d) {
        d3.select(this)
          .style('fill', hoverColor)
          .style('opacity', 0.9); // Change color on hover
        tooltip
          .style('opacity', 0.9)
          .html(
            `<div>${getToolTipLabel(d.data.key)}</div><div>Trading Volume: ${
              d.data.volume
            }</div>`
          );
      })
      .on('mouseout', function(event, d) {
        tooltip.style('opacity', 0);
        d3.select(this)
          .style('fill', color)
          .style('opacity', d => calculateOpacity(d.r, maxRadius, minRadius)); // Change color on mouseout
      });
  }, [data, width, height]);

  return (
    <div className="bubble-container">
      <svg ref={svgRef} width={width} height={height}></svg>
      <div
        ref={tooltipRef}
        className="circle-tooltip"
        style={{ opacity: 0, padding: '5px', color: hoverColor }}
      ></div>
    </div>
  );
};

export default BubbleChart;

const getToolTipLabel = label => {
  if (label instanceof Date) return `Day of Date : ${label.toShortFormat()}`;
  else return `Chosen period - ${label}`;
};

Date.prototype.toShortFormat = function() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const day = this.getDate();

  const monthIndex = this.getMonth();
  const monthName = monthNames[monthIndex];

  const year = this.getFullYear();

  return `${day}-${monthName}-${year}`;
};
