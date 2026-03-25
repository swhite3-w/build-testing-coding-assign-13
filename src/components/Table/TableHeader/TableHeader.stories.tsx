import { Table } from '../Table';
import { TableHeader } from './TableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: false,
  },
  render: (args: any) => (
    <Table>
      <TableHeader
        disabled={args.disabled}
        backgroundColor={args.backgroundColor}
      >
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Name</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Value</th>
        </tr>
      </TableHeader>
      <tbody>
        <tr>
          <td style={{ padding: 8 }}>Row 1</td>
          <td style={{ padding: 8 }}>123</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Disabled = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: true,
  },
  render: (args: any) => (
    <Table>
      <TableHeader
        disabled={args.disabled}
        backgroundColor={args.backgroundColor}
      >
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Name</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Value</th>
        </tr>
      </TableHeader>
      <tbody>
        <tr>
          <td style={{ padding: 8 }}>Row 1</td>
          <td style={{ padding: 8 }}>123</td>
        </tr>
      </tbody>
    </Table>
  ),
};
