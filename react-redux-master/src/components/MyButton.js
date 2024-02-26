import React from "react";
import { useDispatch } from "react-redux";
import increment from "../actions";

const myButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(1))}>Increment counter</button>
  );
};

export default myButton;
