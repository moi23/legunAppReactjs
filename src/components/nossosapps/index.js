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



const Apps = () => {
  let Cards = [
    {
      Title: "Baixe agora nossos Aplicativos!",
      Cidade: "Praia Grande",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
    {
      Title: "Baixe agora nossos Aplicativos!",
      Cidade: "Ibitinga",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
    {
      Title: "Baixe agora nossos Aplicativos!",
      Cidade: "Mineiros do Tietê",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
    {
      Title: "Baixe agora nossos Aplicativos!",
      Cidade: "São Roque",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
    {
      Title: "Baixe agora nossos Aplicativos!",
      Cidade: "Itú",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
    {
      Title: "",
      Cidade: "Ibiti Mirim",
      TitleBtn:"Acessar Página.",
      key: "1"
    },
  ]

  return(
    <Container>
			<div className="tt">
          <h2>Baixe agora nossos Aplicativos!</h2>
          <div className="wrapperBoxDownload">
            <div className="boxDownload">
              <a>
                <img src={PraiaGrande} className="ThumbImageDownload" alt="ss"/>
                <p>Praia Grande</p>
                <Modal cidade="Nossos Apps de Praia Grande" />
              </a>
            </div>
            <div className="boxDownload">
              <a>
                <img src={Ibitinga} className="ThumbImageDownload" alt="ss"/>
                <p>Ibitinga</p>
                <Modal cidade="Nossos Apps de Ibitinga" />
              </a>
            </div>
            <div className="boxDownload">
              <a>
                <img src={MineirosDoTiete} className="ThumbImageDownload" alt="ss"/>
                <p>Mineiros do Tietê</p>
                <Modal cidade="Nossos Apps de Mineiros do Tietê" />
              </a>
            </div>
        </div>
        <div className="wrapperBoxDownload">
            <div className="boxDownload">
              <a>
                <img src={SaoRoque} className="ThumbImageDownload" alt="ss"/>
                <p>São Roque</p>
                <Modal cidade="Nossos Apps de São Roque" />
              </a>
            </div>
            <div className="boxDownload">
              <a>
                <img src={Itu} className="ThumbImageDownload" alt="ss"/>
                <p>Itú</p>
                <Modal cidade="Nossos Apps de Itú" />
              </a>
            </div>
            <div className="boxDownload">
              <a>
                <img src={IbiritiMirim} className="ThumbImageDownload" alt="ss"/>
                <p>Ibitimirim</p>
                <Modal cidade="Nossos Apps de Ibiritimirim" />
              </a>
            </div>
        </div>
				</div>
    </Container>
  )
}
export default Apps;