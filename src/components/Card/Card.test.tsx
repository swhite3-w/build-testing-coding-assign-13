import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";
import { getBg } from "../testUtils";

describe("Card", () => {
  test("is visible", () => {
    render(<Card data-testid="card-root" />);
    expect(screen.getByTestId("card-root")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { rerender } = render(<Card disabled={false} data-testid="card-root" />);
    const bgDefault = getBg(screen.getByTestId("card-root"));

    rerender(<Card disabled={true} data-testid="card-root" />);
    const bgDisabled = getBg(screen.getByTestId("card-root"));

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});