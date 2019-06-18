import React from "react";

const Display = props => {
  return (
    <div>
      <h1>Display</h1>
      <p>
        {props.count.balls} Balls and {props.count.strikes} Strikes
      </p>
    </div>
  );
};

export default Display;
