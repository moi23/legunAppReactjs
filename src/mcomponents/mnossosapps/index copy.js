import React from 'react';
import { Container } from './styles';
import PraiaGrande from "./../../assets/PraiaGrandeImage.png";
import Ibitinga from "./../../assets/IbitingaImage.png";
import MineirosDoTiete from "./../../assets/MineirosDoTieteImage.png";
import SaoRoque from "./../../assets/SaoRoqueImage.png";
import Itu from "./../../assets/ItuImage.png";
import IbiritiMirim from "./../../assets/IbitiMirimImage.png";
import Modal from './../../util/Modal';


//Files
import Apk from './../../files/applegun.apk';


function Mnossosapps() {
	return <Container>
			<h2>Baixe agora br nossos Aplicativos!</h2>
			<div className="wrapperBoxDownload">
				<div className="boxDownload">
					<a>
						<img src={PraiaGrande} className="ThumbImageDownload" alt="ss"/>
						<p>Praia Grande</p>
						<button>Acessar Página</button>
					</a>
				</div>
				<div className="boxDownload">
					<a>
						<img src={Ibitinga} className="ThumbImageDownload" alt="ss"/>
						<p>Ibitinga</p>
						<button>Acessar Página</button>
					</a>
				</div>
				<div className="boxDownload">
					<a>
						<img src={MineirosDoTiete} className="ThumbImageDownload" alt="ss"/>
						<p>Mineiros do Tietê</p>
						<button>Acessar Página</button>
					</a>
				</div>
		</div>
		<div className="wrapperBoxDownload">
				<div className="boxDownload">
					<a>
						<img src={SaoRoque} className="ThumbImageDownload" alt="ss"/>
						<p>São Roque</p>
						<button>Acessar Página</button>
					</a>
				</div>
				<div className="boxDownload">
					<a>
						<img src={Itu} className="ThumbImageDownload" alt="ss"/>
						<p>Itú</p>
						<button>Acessar Página</button>
					</a>
				</div>
				<div className="boxDownload">
					<a>
						<img src={IbiritiMirim} className="ThumbImageDownload" alt="ss"/>
						<p>Ibitimirim</p>
						<button>Acessar Página</button>
					</a>
				</div>
		</div>
</Container>
 }

export default Mnossosapps;