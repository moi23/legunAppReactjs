import React from 'react';
import BurguerNavbar from './../burguernavbar'
import { Container } from './styles';

function Mheader() {
  return <Container>
          <BurguerNavbar />
          <div className="alignTitleMobile">
            <h2>Soluções</h2>
            <h2>Transparência</h2>
            <h2>Segurança!</h2>
         </div>
         <div className="alignTitleLegun">
           <h1>Legun</h1>
         </div>
         <div className="alignButtonLegun">
           <button>BAIXE NOSSOS APP!</button>
         </div>
        </Container>;
}

export default Mheader;