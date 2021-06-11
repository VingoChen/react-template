import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push('/todo');
      }}
    >
      click me to todo
    </div>
  );
};

export default Home;
