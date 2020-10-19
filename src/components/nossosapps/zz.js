import React from 'react';
import { Container } from './styles';
import PraiaGrande from "./../../assets/PraiaGrandeImage.png";
import Ibitinga from "./../../assets/IbitingaImage.png";
import MineirosDoTiete from "./../../assets/MineirosDoTieteImage.png";
import SaoRoque from "./../../assets/SaoRoqueImage.png";
import Itu from "./../../assets/ItuImage.png";
import IbiritiMirim from "./../../assets/IbitiMirimImage.png";

//Files
import Apk from './../../files/applegun.apk';

let AppsText = [
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "Praia Grande",
    TitleBtn:"Acessar Página."
  },
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "Ibitinga",
    TitleBtn:"Acessar Página."
  },
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "Mineiros do Tietê",
    TitleBtn:"Acessar Página."
  },
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "São Roque",
    TitleBtn:"Acessar Página."
  },
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "Itú",
    TitleBtn:"Acessar Página."
  },
  {
    Title: "Baixe agora nossos Aplicativos!",
    Cidade: "Ibiti Mirim",
    TitleBtn:"Acessar Página."
  },
]



const Apps = () => {
  return(
    <Container>
      <h2>Baixe agora nossos Aplicativos!</h2>
      <div className="wrapperBoxDownload">
        <div className="boxDownload">
          <a href={Apk} download="Legun-Praia-Grande" >
            <img src={PraiaGrande} className="ThumbImageDownload" alt="ss"/>
            <p>Praia Grande</p>
            <button>Acessar Página</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href={Apk} download="Legun-Ibitinga">
            <img src={Ibitinga} className="ThumbImageDownload" alt="ss"/>
            <p>Ibitinga</p>
            <button>Acessar Página</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href={Apk} download="Legun-Mineiros-do-Tiete">
            <img src={MineirosDoTiete} className="ThumbImageDownload" alt="ss"/>
            <p>Mineiros do Tietê</p>
            <button>Acessar Página</button>
          </a>
        </div>
      </div>
      <div className="wrapperBoxDownload">
        <div className="boxDownload">
          <a href={Apk} download="Legun-Sao-Roque">
            <img src={SaoRoque} className="ThumbImageDownload" alt="ss"/>
            <p>São Roque</p>
            <button>Acessar Página</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href={Apk} download="Legun-Itu">
            <img src={Itu} className="ThumbImageDownload" alt="ss"/>
            <p>Itu</p>
            <button>Acessar Página</button>
          </a>
        </div>
        <div className="boxDownload">
          <a href={Apk} download="Legun-Ibiritim-Mirim">
            <img src={IbiritiMirim} className="ThumbImageDownload" alt="ss"/>
            <p>Ibiritim Mirim</p>
            <button>Acessar Página</button>
          </a>
        </div>
      </div>
      

      
    </Container>
  )
}


export default Apps;