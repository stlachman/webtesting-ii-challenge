import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={props.handleBall} id="balls">
        Record Ball
      </button>
      <button onClick={props.handleStrike} id="strikes">
        Record Strike
      </button>
      <button onClick={props.handleFoul} id="fouls">
        Record Foul
      </button>
      <button onClick={props.handleHit} id="hit">
        Record Hit
      </button>
    </div>
  );
};

export default Dashboard;
