// Test away
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/react/cleanup-after-each";

describe("<Dashboard />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should render", () => {
    render(<Dashboard />);
  });
  it("should show controls and display", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});
