import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={props.handleClick} id="balls">
        Record Ball
      </button>
      <button id="strikes">Record Strike</button>
      <button id="fouls">Record Foul</button>
      <button id="hit">Record Hit</button>
    </div>
  );
};

export default Dashboard;
