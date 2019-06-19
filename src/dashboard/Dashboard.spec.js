// Test away
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from '@testing-library/react'

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should render", () => {
    render(<Display closed="true" locked="true" />);
    cleanup();
  });
  it("should be locked", () => {
    const { getByText } = render(<Display closed="true" locked="true" />);
    getByText(/locked/i);
    cleanup();
  });
  it("should be closed", () => {
    const { getByText } = render(<Display closed="true" locked="true" />);
    getByText(/closed/i);
    cleanup();
  });
});
