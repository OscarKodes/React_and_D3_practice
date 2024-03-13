import React, { useState } from "react";
import BarChart from "./BarChart";
import ActBtn from "./ActBtn";

function App() {
  const [acts, setActs] = useState(["running", "chasing"]);

  const activitiesArr = [
    "running",
    "chasing",
    "climbing",
    "eating",
    "foraging",
  ];

  const activityToggler = (action) => {
    setActs((prevState) => {
      let stateCopy = [...prevState];

      if (stateCopy.includes(action)) {
        return [...prevState].filter((d) => d !== action);
      } else {
        return [...prevState, action];
      }
    });
  };

  const allBtns = activitiesArr.map((activity) => {
    return <ActBtn key={activity} act={activity} toggle={activityToggler} />;
  });

  return (
    <div>
      <div className="btnContainer">
        <p>Click to add or remove activity from barchart.</p>
        {allBtns}
      </div>
      <BarChart actArr={acts} />
    </div>
  );
}

export default App;
