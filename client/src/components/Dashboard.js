import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={props.handleClick} id="balls">
        Record Ball
      </button>
      <button onClick={props.handleClick} id="strikes">
        Record Strike
      </button>
      <button onClick={props.handleClick} id="fouls">
        Record Foul
      </button>
      <button onClick={props.handleClick} id="hit">
        Record Hit
      </button>
    </div>
  );
};

export default Dashboard;
