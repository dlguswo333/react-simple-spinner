import React from 'react';
import Spinner from './Spinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner fill={true} colors={['#25f', '#ff0', '#f22']} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
