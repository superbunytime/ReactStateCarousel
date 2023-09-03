import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card />);
});

it("matches snapshot", function () {
  const obj = render(<Card />);
  expect(obj.asFragment()).toMatchSnapshot();
});
