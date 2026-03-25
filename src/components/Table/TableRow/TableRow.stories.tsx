import { Table } from "../Table";
import { TableHeader } from "../TableHeader";
import { TableRow } from "./TableRow";

export default {
  title: "Components/TableRow",
  component: TableRow,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    backgroundColor: "transparent",
    disabled: false,
  },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ textAlign: "left", padding: 8 }}>Name</th>
          <th style={{ textAlign: "left", padding: 8 }}>Value</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow disabled={args.disabled} backgroundColor={args.backgroundColor}>
          <td style={{ padding: 8 }}>Row 1</td>
          <td style={{ padding: 8 }}>123</td>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Disabled = {
  args: {
    backgroundColor: "transparent",
    disabled: true,
  },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ textAlign: "left", padding: 8 }}>Name</th>
          <th style={{ textAlign: "left", padding: 8 }}>Value</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow disabled={args.disabled} backgroundColor={args.backgroundColor}>
          <td style={{ padding: 8 }}>Row 1</td>
          <td style={{ padding: 8 }}>123</td>
        </TableRow>
      </tbody>
    </Table>
  ),
};