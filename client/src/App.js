import React from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  handleStrike = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  handleFoul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  handleHit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  render() {
    return (
      <div className="App">
        <Display count={this.state} />
        <Dashboard
          handleBall={this.handleBall}
          handleStrike={this.handleStrike}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
        />
      </div>
    );
  }
}
export default App;
