import React from 'react';
import { Container } from './styles';
import Moises from './../../../assets/moises.jpg'

function PraiaGrandePage() {
	return <Container>
		<h2>Praia Grande <br/>Página de Download</h2>
		<div className="wrapperContainer">

			{/* CANDIDACT ONE */}
			<div className="cardPerson">
				<img src={Moises} alt=""/>
				<h3>(123456)</h3>
				<h3>Moisés Vilas Boas</h3>
				<div className="alignButtons">
				<button id="AndroidButton">Download App Android</button> 
				<button id="IosButton">Download App ios</button>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

			{/* CANDIDACT THREE */}
			<div className="cardPerson">
				<img src={Moises} alt=""/>
				<h3>(123456)</h3>
				<h3>Moisés Vilas Boas</h3>
				<div className="alignButtons">
				<button id="AndroidButton">Download App Android</button> 
				<button id="IosButton">Download App ios</button>
				</div>
			</div>
			{/* END CANDIDACT THREE */}

		</div>
	</Container>;
}

export default PraiaGrandePage;