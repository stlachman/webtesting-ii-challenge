import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/react/cleanup-after-each";

it("renders without crashing", () => {
  render(<Display count={{ balls: 0, strikes: 0 }} />);
});

it("Finds the initial ball count", () => {
  const { getByText } = render(<Display count={{ balls: 0, strikes: 0 }} />);
  getByText(/0 balls/i);
});

it("Finds the initial strike count", () => {
  const { getByText } = render(<Display count={{ balls: 0, strikes: 0 }} />);
  getByText(/0 strikes/i);
});
