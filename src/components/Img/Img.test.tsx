import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";
import { getBg } from "../testUtils";

describe("Img", () => {
  test("is visible", () => {
    render(<Img src="https://placehold.co/100x50" data-testid="img-root" />);
    expect(screen.getByTestId("img-root")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { rerender } = render(
      <Img src="https://placehold.co/100x50" disabled={false} data-testid="img-root" />
    );
    const bgDefault = getBg(screen.getByTestId("img-root"));

    rerender(<Img src="https://placehold.co/100x50" disabled={true} data-testid="img-root" />);
    const bgDisabled = getBg(screen.getByTestId("img-root"));

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});