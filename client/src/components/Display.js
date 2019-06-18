import React from "react";

const Display = props => {
  const ballsText = props.count.balls === 1 ? "Ball" : "Balls";
  const strikesText = props.count.strikes === 1 ? "Strike" : "Strikes";
  return (
    <div>
      <h1>Display</h1>
      <p>
        {props.count.balls} {ballsText} and {props.count.strikes} {strikesText}
      </p>
    </div>
  );
};

export default Display;
