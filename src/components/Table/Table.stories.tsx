import { Table } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    backgroundColor: 'transparent',
    disabled: false,
  },
  render: (args) => (
    <Table disabled={args.disabled} backgroundColor={args.backgroundColor}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Name</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Value</th>
        </tr>
      </thead>
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
    backgroundColor: 'transparent',
    disabled: true,
  },
  render: (args: any) => (
    <Table disabled={args.disabled} backgroundColor={args.backgroundColor}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: 8 }}>Name</th>
          <th style={{ textAlign: 'left', padding: 8 }}>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 8 }}>Row 1</td>
          <td style={{ padding: 8 }}>123</td>
        </tr>
      </tbody>
    </Table>
  ),
};
