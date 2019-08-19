import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import App, { asyncFunc } from "./App";

describe("<App />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("asyncFunc", () => {
  it("eventually resolves to success", () => {
    const expected = "Success!";
    return expect(asyncFunc()).resolves.toBe(expected);
  });
});

describe("speak", () => {
  it('Should pass "bark" into Speak', () => {
    const { getByTestId, queryByText } = render(<App />);

    expect(queryByText(/bark/i)).toBeFalsy();

    fireEvent.click(getByTestId(/speak/i));

    expect(queryByText(/bark/i)).toBeTruthy();
  });
});

// yarn add -D (npm install -D) @testing-library/react
