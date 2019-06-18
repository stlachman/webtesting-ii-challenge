import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, queryByText } from "@testing-library/react";
import App from "./App";
import "@testing-library/react/cleanup-after-each";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Finds the initial ball count", () => {
  const { getByText } = render(<App />);
  getByText(/0 balls/i);
});

it("Finds the initial strike count", () => {
  const { getByText } = render(<App />);
  getByText(/0 strikes/i);
});

describe("Record Ball Button", () => {
  it("button click updates ball count", () => {
    // find the button
    const { getByText } = render(<App />);
    const button = getByText(/record ball/i);

    // click it
    fireEvent.click(button);
    getByText(/1 Ball/i);
    // confirm that Balls is updated to 1
    fireEvent.click(button);
    getByText(/2 Balls/i);

    fireEvent.click(button);
    getByText(/3 Balls/i);

    fireEvent.click(button);
    getByText(/0 Balls/i);
  });
});

describe("Record Strike Button", () => {
  it("button click updates strike count", () => {
    const { getByText } = render(<App />);
    const button = getByText(/record strike/i);

    fireEvent.click(button);
    getByText(/1 Strike/i);
    // confirm that Strikes is updated to 1

    fireEvent.click(button);
    getByText(/2 Strikes/i);
    // confirm that Strikes is updated to 1
    fireEvent.click(button);
    getByText(/0 Strikes/i);
  });
});

describe("Record Hit Button", () => {
  it("button click should reset ball and strike display counts", () => {
    const { getByText } = render(<App />);

    // Record Ball
    const ballButton = getByText(/record ball/i);
    fireEvent.click(ballButton);
    getByText(/1 Ball/i);

    // Record One Strike
    const strikeButton = getByText(/record strike/i);
    fireEvent.click(strikeButton);
    getByText(/1 Strike/i);

    // Reset Displays through hit
    const hitButton = getByText(/record hit/i);
    fireEvent.click(hitButton);
    getByText(/0 Balls/i);
    getByText(/0 Strikes/i);
  });
});

describe("Record Foul Button", () => {
  it("button click should add strike to count unless strike count is at 2", () => {
    const { getByText } = render(<App />);

    // Record One Strike
    const strikeButton = getByText(/record strike/i);
    fireEvent.click(strikeButton);
    getByText(/1 Strike/i);

    // Reset Strike through foul
    const foulButton = getByText(/record foul/i);
    fireEvent.click(foulButton);
    getByText(/2 Strikes/i);

    fireEvent.click(foulButton);
    getByText(/2 Strikes/i);
  });
});
