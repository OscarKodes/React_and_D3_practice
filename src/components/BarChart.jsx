import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import squirrelData from "../data/data.csv";

const BarChart = () => {
  const width = window.innerWidth * 0.8;
  const height = 600;
  const margin = 100;

  const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);

  d3.csv(squirrelData, d3.autoType).then((data) => {
    console.log(data);

    /* SCALES */
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.activity))
      .range([margin, width - margin]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .range([margin, height - margin]);

    // AXIS
    const xAxis = d3.axisBottom().scale(xScale);

    const yAxis = d3.axisLeft().scale(yScale);

    /* HTML ELEMENTS */

    // svg
    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "lavender");

    // bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("height", (d) => yScale(d.count) - margin)
      .attr("width", xScale.bandwidth())
      .attr("x", (d) => xScale(d.activity))
      .attr("y", (d) => height - yScale(d.count))
      .attr("fill", pastel1Colors)
      .attr("stroke", "black");

    // xAxis ticks
    svg
      .append("g")
      .attr("transform", `translate(${0}, ${height - margin})`)
      .style("font-size", "0.8rem")
      .call(xAxis);

    // yAxis ticks
    svg
      .append("g")
      .attr("transform", `translate(${margin}, 0)`)
      .style("font-size", "0.8rem")
      .call(yAxis);

    // xAxis title
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", width / 2)
      .attr("y", height - margin * 0.5)
      .style("font-weight", "bold")
      .style("font-size", "1.1rem")
      .text("Activity");

    // yAxis title
    svg
      .append("text")
      .attr("y", margin / 2)
      .attr("x", -margin * 3)
      .attr("transform", "rotate(-90)")
      .style("font-weight", "bold")
      .style("font-size", "1.1rem")
      .text("Count");
  });

  return <h1>BarChart Title</h1>;
};

export default BarChart;
