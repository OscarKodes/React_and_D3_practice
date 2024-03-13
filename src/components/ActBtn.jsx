import React from "react";

const ActBtn = (props) => {
  const btnHandler = () => {
    props.toggle(props.act);
  };
  return <button onClick={btnHandler}>{props.act}</button>;
};

export default ActBtn;
