import React from 'react';

import { Container } from './styles';

function Sobre() {
  return <Container>
          <h2>SOBRE NÓS</h2>
          <div className="wrapperContain">
            <div className="left">
              <h2>Legun</h2>
            </div>
            <div className="right">
              <p>A Legun é uma Empresa de TECNOLOGIA que foi pensada e desenvolvida dentro de alguns princípios que norteiam o nosso trabalho.</p>
              <p>A Satisfação do nosso cliente, dede a primeira visita até a efetivação do contrato é a nossa prioridade. A transparência nas negociações e a assessoria constate surpreendem e superam as expectativas. Garantimos as soluções tecnológicas mais adequadas as necessidades de nossos clientes, olhando de forma individualizada para cada um.
              </p>
              <p>Buscamos atualizações e novidades sempre, para que nossos clientes tenham, além do que há mais novo no mercado, as melhores soluções tecnológicas.</p>
              <p>Contate-nos e se surpreenda com o que podemos lhe oferecer!</p>
              <a href="#">Clique aqui para ir ao Formulário</a>
            </div>
          </div>
         </Container>;
}

export default Sobre;