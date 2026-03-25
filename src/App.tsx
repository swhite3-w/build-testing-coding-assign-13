import { Button } from './components/Button/Button';
import { Label } from './components/Label/Label';
import { Text } from './components/Text/Text';
import { Table } from './components/Table/Table';

import { Img } from './components/Img/Img';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>UI Component Library Demo</h1>

      {/* BUTTON */}
      <section>
        <h2>Button</h2>
        <Button label="Click Me" disabled={false} />
        <Button label="Disabled Button" disabled={true} />
      </section>

      {/* LABEL */}
      <section>
        <h2>Label</h2>
        <Label text="This is a label" />
      </section>

      {/* TEXT */}
      <section>
        <h2>Text</h2>
        <Text text="This is some text content." size="md" />
        <Text text="Disabled text" size="md" disabled />
      </section>

      {/* TABLE */}
      <section>
        <h2>Table</h2>
        <Table disabled={false} backgroundColor="white">
          <thead>
            <tr>
              <th style={{ padding: 8 }}>Name</th>
              <th style={{ padding: 8 }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 8 }}>Example</td>
              <td style={{ padding: 8 }}>123</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section>
        <h2>Image</h2>
        <Img src="https://via.placeholder.com/150" alt="Example" />
      </section>
    </div>
  );

  const x=1
}

export default App;
