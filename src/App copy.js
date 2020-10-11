import React from 'react';
import Matue from './files/applegun.apk'
import './App.css';

function App() {
  return (
    <div className="App">
      <a href={Matue} download="cleitinho">BTN</a>
    </div>
  );
}

export default App;
