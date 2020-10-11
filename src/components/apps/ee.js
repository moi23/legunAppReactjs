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



const Apps = () => {
  const Cards = [
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
  ];

  return(
    <Container>
      <h2>Baixe agora nossos Aplicativos!</h2>
        <div className="wrapperBoxDownload" >
          <div className="boxDownload">
            <a href={Apk} download="Legun-Praia-Grande" >
            {Cards.map(({Title, Cidade, TitleBtn, key}) => (
              <div key={key}>
                <img src={PraiaGrande} className="ThumbImageDownload" alt="ss"/>
                <p>{Cidade}</p>
                <button>{TitleBtn}</button>
              </div>
            ))}
            </a>
          </div>
         </div>
    </Container>
  )
}


export default Apps;