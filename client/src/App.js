import React from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    hit: 0
  };

  handleClick = event => {
    const { id } = event.target;

    if (id === "balls" && this.state.balls === 3) {
      this.setState({ balls: 0, strikes: 0 });
    } else if (id === "balls" && this.state.balls < 4) {
      this.setState({ balls: this.state.balls + 1 });
    } else if (id === "strikes" && this.state.strikes === 2) {
      this.setState({ balls: 0, strikes: 0 });
    } else if (id === "strikes" && this.state.strikes < 3) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else if (id === "fouls" && this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else if (id === "hit") {
      this.setState({ strikes: 0, balls: 0 });
    }
  };

  render() {
    return (
      <div className="App">
        <Display count={this.state} />
        <Dashboard handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
