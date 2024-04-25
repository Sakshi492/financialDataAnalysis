import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StreamGraph = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 0, right: 10, bottom: 10, left: 0 };
    const extraspace = 25;
    const innerWidth = width - margin.left - margin.right - 2 * extraspace;
    const innerHeight = height - margin.top - margin.bottom - 5 * extraspace;

    // Define the stack layout
    const stack = d3
      .stack()
      .keys(['value']) // Assuming your data objects have a 'value' property
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetWiggle);

    // Stack the data
    const series = stack(data);

    // Define x and y scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, d => d.key))
      .range([0, innerWidth]);

    // const yScale = d3.scaleLinear()
    //     .domain([d3.min(series, d => d3.min(d, d => d[0])), d3.max(series, d => d3.max(d, d => d[1]))])
    //     .range([innerHeight, 0]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([innerHeight, 0]);

    // Define area generator
    // const area = d3.area()
    //     .x(d => xScale(d.data.key))
    //     .y0(d => yScale(d[0]))
    //     .y1(d => yScale(d[1]))
    //     .curve(d3.curveMonotoneX); // You can adjust the curve type as needed

    const area = d3
      .area()
      .x(d => xScale(d.key))
      .y0(innerHeight)
      .y1(d => yScale(d.value));

    // Append areas
    // svg.selectAll("path")
    //     .data(series)
    //     .enter().append("path")
    //     .attr("fill", "#ee5138")
    //     .attr("d", area)
    //     .attr('transform', `translate(${margin.left + extraspace}, ${margin.top + 2.5 * extraspace})`)
    //     .style("opacity", 0) // Set initial opacity to 0
    //     .transition() // Apply transition for animation
    //     .duration(1000) // Animation duration
    //     .delay((d, i) => i*100) // Add delay for staggered effect
    //     .style("opacity", 1)
    //     .attr("d", d => area(d));

    svg
      .append('path')
      .datum(data)
      .attr('class', 'area')
      .attr('fill', '#405fab')
      .attr('d', area);

    // // Append axes
    // svg.append("g")
    //     .attr("stroke", "#ffe7d0")
    //     .attr("color", "#ffe7d0")
    //     .attr("class", "xAxis")
    //     .attr('transform', `translate(${margin.left + extraspace}, ${margin.top + innerHeight + 3 * extraspace})`)
    //     .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', 'translate(0,' + height * 0.8 + ')')
      .call(
        d3
          .axisBottom(xScale)
          .tickSize(-height * 0.7)
          .tickValues([1900, 1925, 1975, 2000])
      )
      .select('.domain')
      .remove();
    // Customization
    svg.selectAll('.tick line').attr('stroke', 'white');

    svg
      .append('g')
      .attr('fill', '#ffe7d0')
      .attr('stroke', '#ffe7d0')
      .attr('color', '#ffe7d0')
      .attr('class', 'yAxis')
      .attr(
        'transform',
        `translate(${extraspace}, ${margin.top + 3 * extraspace})`
      )
      .call(d3.axisLeft(yScale));
  }, [data, width, height]);

  return (
    <svg
      className="stream-graph-svg"
      ref={svgRef}
      width={width}
      height={height}
    ></svg>
  );
};

export default StreamGraph;
