import React from "react";
import { handlePlural } from "../utils/index";

const Display = props => {
  return (
    <div>
      <h1>Display</h1>
      <p>
        {props.count.balls} {handlePlural("Ball", props.count.balls)} and{" "}
        {props.count.strikes} {handlePlural("Strike", props.count.strikes)}
      </p>
    </div>
  );
};

export default Display;
