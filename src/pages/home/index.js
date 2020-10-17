import React from 'react';

// import { Container } from './styles';

import Navbar from './../../components/navbar/';
import Header from './../../components/header/';
import Apps from './../../components/apps/';
import Sobre from './../../components/sobre/';
import Products from './../../components/products';
import Lgpd from './../../components/lgpd';
import Footer from './../../components/footer';
import Mnavbar from './../../mcomponents/navbar'
import Mheader from './../../mcomponents/mheader'

	
function Home() {
	return (
    <div >
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
	
export default Home;