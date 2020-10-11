import React from 'react';
import { Container } from './styles';
import PraiaGrande from "./../../assets/PraiaGrandeImage.png";
import Ibitinga from "./../../assets/IbitingaImage.png";
import MineirosDoTiete from "./../../assets/MineirosDoTieteImage.png";
import SaoRoque from "./../../assets/SaoRoqueImage.png";
import Itu from "./../../assets/ItuImage.png";
import IbiritiMirim from "./../../assets/IbitiMirimImage.png";



const Apps = () => {
  return(
    <Container>
      <h2>Baixe agora nossos Aplicativos!</h2>
      <div className="wrapperBoxDownload">
        <div className="boxDownload">
          <a href="#">
            <img src={PraiaGrande} className="ThumbImageDownload" alt="ss"/>
            <p>Praia Grande</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href="#">
            <img src={Ibitinga} className="ThumbImageDownload" alt="ss"/>
            <p>Ibitinga</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href="#">
            <img src={MineirosDoTiete} className="ThumbImageDownload" alt="ss"/>
            <p>Mineiros do Tietê</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
      </div>
      <div className="wrapperBoxDownload">
        <div className="boxDownload">
          <a href="#">
            <img src={SaoRoque} className="ThumbImageDownload" alt="ss"/>
            <p>São Roque</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href="#">
            <img src={Itu} className="ThumbImageDownload" alt="ss"/>
            <p>Itu</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href="#">
            <img src={IbiritiMirim} className="ThumbImageDownload" alt="ss"/>
            <p>Ibiritim Mirim</p>
            <button>Baixar Agora!</button>
          </a>
        </div>
      </div>
      

      
    </Container>
  )
}


export default Apps;