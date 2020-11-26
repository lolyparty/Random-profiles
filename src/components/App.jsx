import React from 'react';
import { Search } from './searchinput/search-component';
import { Cardgrid } from './cards-grid/cards-grid-component';

const App = () => {
  const [inputState, setInput] = React.useState('');

  const changed = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className="container">
      <h1 className="header">Profiles</h1>
      <Search change={changed} />
      <Cardgrid 
        searched={inputState}
      />
    </div>
  );
};

export { App };
