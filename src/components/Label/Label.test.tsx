import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

describe("Label", () => {
  test("is visible", () => {
    render(<Label text="Hello Label" />);
    expect(screen.getByTestId("label")).toBeVisible();
    expect(screen.getByText(/hello label/i)).toBeInTheDocument();
  });

  test("background color changes when disabled", () => {
    render(<Label text="Disabled Label" disabled={true} />);
    const label = screen.getByTestId("label");
    expect(label).toHaveStyle("background: #e0e0e0");
  });
});