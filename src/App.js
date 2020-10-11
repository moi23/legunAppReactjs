import React from 'react';
import './App.css';
import './util/animate.css'

import Navbar from './components/navbar/';
import Header from './components/header/';
import Apps from './components/apps/';

function App() {
  return (
    <div className="App ">
     <Navbar />
     <Header />
     <Apps />
    </div>
  );
}

export default App;
