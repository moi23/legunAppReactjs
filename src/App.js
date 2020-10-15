import React from 'react';
import './App.css';
import './util/animate.css'

import Navbar from './components/navbar/';
import Header from './components/header/';
import Apps from './components/apps/';
import Sobre from './components/sobre/';
import Products from './components/products';
import Lgpd from './components/lgpd'
import Footer from './components/footer'

function App() {
  return (
    <div className="App ">
     <Navbar />
     <Header />
     <Apps />
     <Sobre />
     <Products />
     <Lgpd/>
     <Footer/>
    </div>
  );
}

export default App;
