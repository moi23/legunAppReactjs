import React from 'react';
import { Container } from './styles';
import Moises from './../../../assets/moises.jpg';
import Dicaprio from './../../../assets/dicaprio.jpg';

import AfranioTavares from './../../../assets/afraniotavares.jpg';
import AfranioApkAndroid from './../../../files/MineirosDoTiete/afraniotavares55000.apk';

import AnaOlaia from './../../../assets/AnaOlaia.jpg'
import AnaoLaiaAndroid from './../../../files/MineirosDoTiete/anaolaia55999.apk';

// import BetoRamos from './../../../assets/AnaOlaia.jpg'
import betoramosAndroid from './../../../files/MineirosDoTiete/betoramos55555.apk';

// import Bocao from './../../../assets/AnaOlaia.jpg'
import bocao55678Android from './../../../files/MineirosDoTiete/bocao55678.apk';

import EdimilsonFoto from './../../../assets/Edimilson.jpg'
import edimilsoneufrasio55125Android from './../../../files/MineirosDoTiete/edimilsoneufrasio55125.apk';

import EnadillaFoto from './../../../assets/EEnadilla.jpg'
import enadillavoltolin55888Android from './../../../files/MineirosDoTiete/enadillavoltolin55888.apk';

import GabrielaFoto from './../../../assets/Gabriela.jpg'
import gabrielabig55333Android from './../../../files/MineirosDoTiete/gabrielabig55333.apk';

import GazaniFoto from './../../../assets/Gazani.jpg'
import gazani55789Android from './../../../files/MineirosDoTiete/gazani55789.apk';

import MarcoFoto from './../../../assets/Marco.jpg'
import marcopadaria55444Android from './../../../files/MineirosDoTiete/marcopadaria55444.apk';

// import AnaOlaiaFoto from './../../../assets/AnaOlaia.jpg'
import marildapaulucci55222Android from './../../../files/MineirosDoTiete/marildapaulucci55222.apk';

import MauroFoto from './../../../assets/Mauro.jpg'
import maurorodrigues55111Android from './../../../files/MineirosDoTiete/maurorodrigues55111.apk';


import ThallesRodriguesPhoto from './../../../assets/ThallesRodrigues.jpg'
import thallesrodrigues20000Android from './../../../files/MineirosDoTiete/thallesrodrigues20000.apk';

import VaniaFoto from './../../../assets/Vania.jpg'
import vaniabraga13222Android from './../../../files/MineirosDoTiete/vaniabraga13222.apk';

import VadiFoto from './../../../assets/Vadi.jpg';
import vadi123465Android from './../../../files/MineirosDoTiete/vadicesarin.apk';

import ChicoFoto from './../../../assets/Chico.jpg';
import tiochico55456Android from './../../../files/MineirosDoTiete/tiochico55456.apk';

import SidineyFoto from './../../../assets/Sidiney.jpg';
import sidineygasparotto13000Android from './../../../files/MineirosDoTiete/sidineygasparotto13000.apk';

import FefeFoto from './../../../assets/Fefe.jpg';
import fefe55123Android from './../../../files/MineirosDoTiete/fefe55123.apk';

import ElaineFoto from './../../../assets/Elaine.JPG';
import elainedasaude20200Android from './../../../files/MineirosDoTiete/elainedasaude20200.apk';

function MineirosDoTiete() {
	return <Container>
		<h2>Mineiros Do Tietê <br/>Página de Download</h2>
		<div className="wrapperContainer">

			{/* Afranio Tavares ONE */}
			<div className="cardPerson">
				<img src={AfranioTavares} alt=""/>
				<h3>(55 000)</h3>
				<h3>Afranio Tavares</h3>
				<div className="alignButtons">
				<a href={AfranioApkAndroid} download="AfranioTavares.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

			{/* Anão Laia */}
			<div className="cardPerson">
				<img src={AnaOlaia} alt=""/>
				<h3>(55 999)</h3>
				<h3>Ana Olaia</h3>
				<div className="alignButtons">
				<a href={AnaoLaiaAndroid} download="Ana.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

				{/* Beto Ramos */}
				<div className="cardPerson">
				{/* <img src={Dicaprio} alt=""/> */}
				<h3>(55 555)</h3>
				<h3>Beto Ramos</h3>
				<div className="alignButtons">
				<a href={betoramosAndroid} download="BetoRamos.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

				{/* Bócio */}
				<div className="cardPerson">
				{/* <img src={Dicaprio} alt=""/> */}
				<h3>(55 678)</h3>
				<h3>Bocão</h3>
				<div className="alignButtons">
				<a href={bocao55678Android} download="Bocão.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

				{/* Edimilson Eufrázio */}
				<div className="cardPerson">
				<img src={EdimilsonFoto} alt=""/>
				<h3>(55 125)</h3>
				<h3>Edimilson Eufrazio</h3>
				<div className="alignButtons">
				<a href={edimilsoneufrasio55125Android} download="EdimilsonEufrasio.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END CANDIDACT ONE */}

				{/* Enadilla voltolin */}
				<div className="cardPerson">
				<img src={EnadillaFoto} alt="EnadillaFoto"/>
				<h3>(55 888)</h3>
				<h3>Enadilla Voltolin</h3>
				<div className="alignButtons">
				<a href={enadillavoltolin55888Android} download="Enadillavoltolin.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Enadillavoltolin */}

				{/* Gabriela Big */}
				<div className="cardPerson">
				<img src={GabrielaFoto} alt=""/>
				<h3>(55 333)</h3>
				<h3>Gabriela Big</h3>
				<div className="alignButtons">
				<a href={gabrielabig55333Android} download="GabrielaBig.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Gabriela Big */}

				{/* Gazani */}
				<div className="cardPerson">
				<img src={GazaniFoto} alt=""/>
				<h3>(55 789)</h3>
				<h3>Gazini</h3>
				<div className="alignButtons">
				<a href={gazani55789Android} download="Gazini.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Gazani */}

				{/* Marco Padaria */}
				<div className="cardPerson">
				<img src={MarcoFoto} alt=""/>
				<h3>(55 444)</h3>
				<h3>Marco Padaria</h3>
				<div className="alignButtons">
				<a href={marcopadaria55444Android} download="MarcoPadaria.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Marco Padaria */}

				{/* Marilda Paulucci */}
				<div className="cardPerson">
				{/* <img src={Dicaprio} alt=""/> */}
				<h3>(55 222)</h3>
				<h3>Marilda Paulucci</h3>
				<div className="alignButtons">
				<a href={marildapaulucci55222Android} download="MarildaPaulucci.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Marilda Paulucci */}

				{/* Mauro Rodrigues */}
				<div className="cardPerson">
				<img src={MauroFoto} alt=""/>
				<h3>(55 111)</h3>
				<h3>Mauro Rodrigues</h3>
				<div className="alignButtons">
				<a href={maurorodrigues55111Android} download="MauroRodrigues.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Mauro Rodrigues */}

				{/* Thalles Rodrigues */}
				<div className="cardPerson">
				<img src={ThallesRodriguesPhoto} alt="Thales Rodrigues"/>
				<h3>(20 000)</h3>
				<h3>Thalles Rodrigues</h3>
				<div className="alignButtons">
				<a href={thallesrodrigues20000Android} download="ThalesRodrigues.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Thalles Rodrigues */}

				{/* Vania Braga */}
				<div className="cardPerson">
				<img src={VaniaFoto} alt="Vania Foto"/>
				<h3>(13 222)</h3>
				<h3>Vania Braga</h3>
				<div className="alignButtons">
				<a href={vaniabraga13222Android} download="VaniaBraga.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Vania Braga */}
			
				{/* Vandicesarin  */}
				<div className="cardPerson">
				<img src={VadiFoto} alt=""/>
				<h3>(55 )</h3>
				<h3>Vadi Cezarin</h3>
				<div className="alignButtons">
				<a href={vadi123465Android} download="VadiCezarin.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Vandicesarin */}

				{/* Tio Chico */}
				<div className="cardPerson">
				<img src={ChicoFoto} alt=""/>
				<h3>(55 456)</h3>
				<h3>Tio Chico</h3>
				<div className="alignButtons">
				<a href={tiochico55456Android} download="TioChico.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Tio Chico */}

				{/* Sidney Gasparoto */}
				<div className="cardPerson">
				<img src={SidineyFoto} alt=""/>
				<h3>(13 000)</h3>
				<h3>Sidney gasparoto</h3>
				<div className="alignButtons">
				<a href={sidineygasparotto13000Android} download="SidneyGasparotto.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Sidney gasparoto */}

				{/* FEFE */}
				<div className="cardPerson">
				<img src={FefeFoto} alt=""/>
				<h3>(13 222)</h3>
				<h3>Fefe</h3>
				<div className="alignButtons">
				<a href={fefe55123Android} download="Fefe.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END FEFE */}

				{/* Elaine da saude */}
				<div className="cardPerson">
				<img src={ElaineFoto} alt=""/>
				<h3>(13 222)</h3>
				<h3>Elaine da Saude</h3>
				<div className="alignButtons">
				<a href={elainedasaude20200Android} download="ElaineDaSaude.apk" id="AndroidButton">Download App Android</a> 
				<a id="IosButton">Download App ios</a>
				</div>
			</div>
			{/* END Elaine da Saude */}

		</div>
	</Container>;
}

export default MineirosDoTiete;