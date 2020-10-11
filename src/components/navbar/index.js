import React from 'react';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <a href="#" id="logo-Legun">Legun</a>
            <div id="nav-links-Legun">
              <a href="#">INÍCIO</a>
              <a href="#">APLICATIVOS</a>
              <a href="#">SOBRE NÓS</a>
              <a href="#">PRODUTOS</a>
              <a href="#">TRANSPARÊNCIA LGPD</a>
              <a href="#">CONTATO</a>
              <a href="#" id="btn-download-app">Baixe Nosso App</a>
            </div> 
    </Container>
  )
}

export default Navbar;