import React from 'react';

import { Container } from './styles';
import './../../util/animate.css';


const Footer = () => {
  return (
    <Container >
      <div className="cWrapper ">
        <a href="#" id="logo-Legun">Legun
        <p>Direitos autorais © 2020 Todos os direitos reservados</p>
        </a>
        
            <div id="nav-links-Legun">
              <a href="#">INÍCIO</a>
              <a href="#">APLICATIVOS</a>
              <a href="#">SOBRE NÓS</a>
              <a href="#">PRODUTOS</a>
              <a href="#">TRANSPARÊNCIA LGPD</a>
              <a href="#" id="btn-contato" >CONTATO</a>
            </div>
      </div> 
    </Container>
  )
}

export default Footer;