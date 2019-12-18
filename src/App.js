import React from 'react';
import './App.css';
import { Todos } from './Todos';

const node = React.createElement('h1', {style : {backgroundColor: 'red'}}, 'React Component');
function App() {
  return (
    <div className="App">     
      {node}
      <Todos />
    </div>
  );
}

export default App;
