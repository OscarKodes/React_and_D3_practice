import React, { useState } from "react";
import BarChart from "./BarChart";

function App() {
  function btnHandler() {
    document.getElementById("btn").click();
  }

  return (
    <div>
      <button onClick={btnHandler}>Add More (React)</button>
      <BarChart />
    </div>
  );
}

export default App;
