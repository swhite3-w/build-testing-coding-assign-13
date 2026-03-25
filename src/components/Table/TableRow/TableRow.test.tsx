import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "../Table";
import { TableRow } from "./TableRow";

describe("TableRow", () => {
  test("is visible", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <td>Cell</td>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-row")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(
      <Table>
        <tbody>
          <TableRow disabled={true}>
            <td>Cell</td>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-row")).toHaveStyle("background: #ededed");
  });
});