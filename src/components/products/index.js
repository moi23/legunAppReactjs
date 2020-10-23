import React from 'react';

import { Container } from './styles';

import Eleicoes from "./../../assets/elei.png";
import Covid from "./../../assets/covid.png";
import GestaoPublica from "./../../assets/gest.png";
import Coracao from "./../../assets/cora.png";
import Modal from './../../util/Modal';


function Products() {
  return <Container>
      <h2>PRODUTOS</h2>

      <div className="BoxAlignProducts">
        <div className="boxLink">
          <img src={GestaoPublica} alt=""/>
          <h3>Módulos Gestao Pública</h3>
          {/* <Modal><a href="#">SAIBA MAIS</a></Modal> */}
					<a href="#">SAIBA MAIS</a>
          
        </div>
        <div className="boxLink">
          <img src={Eleicoes} alt=""/>
          <h3>Eleições 2020</h3>
          <a href="#">SAIBA MAIS</a>
        </div>
        <div className="boxLink">
          <img src={Covid} alt=""/>
          <h3>COVID-19</h3>
          <a href="#">SAIBA MAIS</a>
        </div>
        <div className="boxLink">
          <img src={Coracao} alt=""/>
          <h3>Saúde</h3>
          <a href="#">SAIBA MAIS</a>
        </div>
      </div>
  </Container>;
}

export default Products;