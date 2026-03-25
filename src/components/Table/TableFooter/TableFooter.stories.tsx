import { Table } from "../Table";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";
import { TableFooter } from "./TableFooter";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: { disabled: false, backgroundColor: "#f5f5f5" },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ padding: 8, textAlign: "left" }}>Name</th>
          <th style={{ padding: 8, textAlign: "left" }}>Value</th>
        </tr>
      </TableHeader>

      <tbody>
        <TableRow>
          <TableCell>Row 1</TableCell>
          <TableCell>123</TableCell>
        </TableRow>
      </tbody>

      <TableFooter {...args}>
        <tr>
          <td style={{ padding: 8 }} colSpan={2}>
            Footer content
          </td>
        </tr>
      </TableFooter>
    </Table>
  ),
};

export const Disabled = {
  args: { disabled: true, backgroundColor: "#f5f5f5" },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ padding: 8, textAlign: "left" }}>Name</th>
          <th style={{ padding: 8, textAlign: "left" }}>Value</th>
        </tr>
      </TableHeader>

      <tbody>
        <TableRow>
          <TableCell>Row 1</TableCell>
          <TableCell>123</TableCell>
        </TableRow>
      </tbody>

      <TableFooter {...args}>
        <tr>
          <td style={{ padding: 8 }} colSpan={2}>
            Disabled footer
          </td>
        </tr>
      </TableFooter>
    </Table>
  ),
};