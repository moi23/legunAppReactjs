import React from 'react';

import { Container } from './styles';

const Header = () =>{
  return (
    <Container>
      <div id="wrapper-header">
        <span id="firstTextTitle">Simples, Rápido e Seguro!</span>
        <span id="secondTextTitle">
          Lorem Ipsum is simply dummy <br/>
          Text of the printing and typesetting
          </span>
        <span id="threeTextTitle">
          Has been the industry's standard <br/>
          text ever since the 1500s
        </span>
        <a href="#">
          <button id="btnHeaderApp">
            BAIXE NOSSO APP!
          </button>
        </a>
        <h1 id="logoLegun">Legun</h1>
       </div>
    </Container>
  )
}

export default Header;