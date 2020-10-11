import React from 'react';
import './App.css';
import './util/animate.css'

import Navbar from './components/navbar/';
import Header from './components/header/';
import Apps from './components/apps/';
import Sobre from './components/sobre/'

function App() {
  return (
    <div className="App ">
     <Navbar />
     <Header />
     <Apps />
     <Sobre />
    </div>
  );
}

export default App;
