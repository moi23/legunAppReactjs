import React, {useState, useEffect} from 'react';
import ImgHeader from "./../../assets/imgHeader.png";
import './../../util/animate.css';

import { Container } from './styles';


const Header = () =>{
  
  const [hover, setHover] = useState(false);
  
  useEffect( () => {
    setTimeout( () => { setHover(true)}, 3000)

    if(hover){
      const element = document.querySelector('.btnHeaderApp');
      element.classList.add('btnHeaderAppHover');
      setTimeout( () => { element.classList.remove('btnHeaderAppHover')}, 2000)
    }
  })

  return (
    <Container className="">
      <div id="wrapper-header" className="animate__animated animate__fadeInLeft">
        <span id="firstTextTitle">Simples, Rápido e Seguro!</span>
        <span id="secondTextTitle">
          Lorem Ipsum is simply dummy <br/>
          Text of the printing and typesetting
          </span>
        <span id="threeTextTitle">
          Has been the industry's standard <br/>
          text ever since the 1500s
        </span>
        <a href="#">
          <button className="btnHeaderApp">
            BAIXE NOSSO APP!
          </button>
        </a>
        <h1 id="logoLegun">Legun</h1>
       </div>
       <img src={ImgHeader} id="imgHeader" className="animate__animated animate__fadeInRight animate__delay-1s" alt=""/>
    </Container>
  )
}

export default Header;