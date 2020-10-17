import React from 'react';
import './App.css';
import './util/animate.css'

import Navbar from './components/navbar/';
import Header from './components/header/';
import Apps from './components/apps/';
import Sobre from './components/sobre/';
import Products from './components/products';
import Lgpd from './components/lgpd';
import Footer from './components/footer';
import Mnavbar from './mcomponents/navbar'
import Mheader from './mcomponents/mheader'

function App() {
  return (
    <div className="App ">
      <Mnavbar />
     <Navbar />

     <Mheader />
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
