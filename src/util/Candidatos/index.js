import React from 'react';

import { Container } from './styles';

function Candidatos(Cidade, Photo, NomeCandidato) {
  return <Container>
		<h2>{Cidade}<br/> 
		Pagina de Download</h2>
		<div className="wrapperContainer">
			<div className="cardPerson">
				<img src={Photo} alt=""/>
				<h3>{NomeCandidato}</h3>
				<div className="alignButtons">
				<button id="AndroidButton">Download App Android</button> 
				<button id="IosButton">Download App ios</button>
				</div>
			</div>
		</div>
  </Container>
}

export default Candidatos;