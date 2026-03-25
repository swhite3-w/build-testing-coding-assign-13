import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "../Table";
import { TableHeader } from "./TableHeader";

describe("TableHeader", () => {
  test("is visible", () => {
    render(
      <Table>
        <TableHeader>
          <tr>
            <th>Col</th>
          </tr>
        </TableHeader>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-header")).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(
      <Table>
        <TableHeader disabled={true}>
          <tr>
            <th>Col</th>
          </tr>
        </TableHeader>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId("table-header")).toHaveStyle("background: #d6d6d6");
  });
});