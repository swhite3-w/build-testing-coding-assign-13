import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "../Table";
import { TableRow } from "../TableRow";
import { TableCell } from "./TableCell";

describe("TableCell", () => {
  test("is visible", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-cell")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell disabled={true}>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-cell")).toHaveStyle("background: #f0f0f0");
  });
});