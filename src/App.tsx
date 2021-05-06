import React from 'react';
import ShowEasyV from 'Components/ShowEasyV';

interface IProps {
  name: string;
}

const App: React.FC<IProps> = props => (
  // const { name, age } = props;
  <div>
    hello react
    <ShowEasyV />
  </div>
);
export default App;
