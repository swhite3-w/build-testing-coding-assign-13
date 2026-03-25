import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

describe("Table", () => {
  test("is visible", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-wrapper")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(
      <Table disabled={true}>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-wrapper")).toHaveStyle("background: #e0e0e0");
  });
});