import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";
import Search from "../components/search";

afterEach(cleanup);

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    screen.debug();
  });
});

describe("Search", () => {
  test("renders Search component", () => {
    render(<Search />);

    screen.debug();
  });
});

describe("App", () => {
  test("renders Search button", () => {
    render(<App />);

    screen.getByText("Search");
  });
});

describe("Search", () => {
  test("renders Name field placeholder", () => {
    render(<Search />);

    screen.getByPlaceholderText("Name");
  });
});

describe("Search", () => {
  test("renders All companies as default", () => {
    render(<Search />);

    screen.getByText("All companies");
  });
});

it("captures clicks", () => {
  render(<App />);
  const node = screen.getByText("Search");
  fireEvent.click(node);
});
