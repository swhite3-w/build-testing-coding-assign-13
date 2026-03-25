import { Table } from '../Table';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { TableCell } from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: { disabled: false, backgroundColor: 'transparent' },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ padding: 8 }}>Name</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell {...args}>Cell Content</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Disabled = {
  args: { disabled: true, backgroundColor: 'transparent' },
  render: (args: any) => (
    <Table>
      <TableHeader>
        <tr>
          <th style={{ padding: 8 }}>Name</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell {...args}>Disabled Cell</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};
