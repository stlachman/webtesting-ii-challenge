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
    getByText(/1 Balls/i);
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
    // find the button
    const { getByText } = render(<App />);
    const button = getByText(/record strike/i);

    // click it
    fireEvent.click(button);
    getByText(/1 Strikes/i);
    // confirm that Strikes is updated to 1
    fireEvent.click(button);
    getByText(/2 Strikes/i);

    fireEvent.click(button);
    getByText(/0 Strikes/i);
  });
});
