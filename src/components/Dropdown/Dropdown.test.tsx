import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";
import { getBg } from "../testUtils";

describe("Dropdown", () => {
  const options = [{ label: "A", value: "a" }];

  test("is visible", () => {
    render(<Dropdown options={options} data-testid="dropdown-root" />);
    expect(screen.getByTestId("dropdown-root")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { rerender } = render(
      <Dropdown options={options} disabled={false} data-testid="dropdown-root" />
    );

    const select = screen.getByTestId("dropdown-root").querySelector("select") as HTMLElement;
    const bgDefault = getBg(select);

    rerender(<Dropdown options={options} disabled={true} data-testid="dropdown-root" />);
    const selectDisabled = screen.getByTestId("dropdown-root").querySelector("select") as HTMLElement;
    const bgDisabled = getBg(selectDisabled);

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});