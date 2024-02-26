import React from "react";
import { useSelector } from "react-redux";

const divPanel = () => {
  let counterVal = useSelector((state) => state.counter);
  return <div>This is the current value of the counter : {counterVal}</div>;
};

export default divPanel;
