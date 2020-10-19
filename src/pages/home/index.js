import React from 'react';

// import { Container } from './styles';

import Mnavbar from './../../mcomponents/navbar'
import Navbar from './../../components/navbar/';

import Mheader from './../../mcomponents/mheader'
import Header from './../../components/header/';

import MnossosApps from './../../mcomponents/mnossosapps'
// import NossosApps from './../../components/apps/';
import Sobre from './../../components/sobre/';
import Products from './../../components/products';
import Lgpd from './../../components/lgpd';
import Footer from './../../components/footer';

	
function Home() {
	return (
    <div >
     <Mnavbar />
     <Navbar />

     <Mheader />
     <Header />

     <MnossosApps />
     {/* <NossosApps /> */}

     <Sobre />

     <Products />

     <Lgpd/>
		 
     <Footer/>
    </div>
  );
}
	
export default Home;