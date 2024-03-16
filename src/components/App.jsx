import React, { useState, useRef, useEffect } from "react";
import { select } from "d3";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  const updateDataHandler = () => {
    setData((prevState) => {
      return prevState.map((d) => d + 5);
    });
  };

  const filterDataHandler = () => {
    setData((prevState) => {
      return prevState.filter((d) => d <= 35);
    });
  };

  const resetDataHandler = () => {
    setData((prevState) => {
      return prevState.filter((d) => d <= 35);
    });
  };

  useEffect(() => {
    console.log(svgRef);

    const svg = select(svgRef.current);

    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (d) => d)
      .attr("cx", (d) => d * 2)
      .attr("cy", (d) => d * 2)
      .attr("fill", "green")
      .attr("stroke", "red");
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={updateDataHandler}>Update Data</button>
      <button onClick={filterDataHandler}>Filter Data</button>
      <button onClick={resetDataHandler}>Reset Data</button>
    </React.Fragment>
  );
}

export default App;
