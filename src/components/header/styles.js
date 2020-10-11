import styled from 'styled-components';
import Background from '../../assets/background.png';
import xlBg from '../../assets/xl-bg.png'

export const Container = styled.div`
  /* min-height:90vh; */
  background: black;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow-y:hidden;
  overflow-x:hidden;

  

  #imgHeader{
    position: absolute;
    height: auto;
    width: 50vw;
    bottom:0px;
    right:0px;
  }


  #wrapper-header{
    color:white;
    display:flex;
    flex-direction:column;
    padding: 0px 5%;
  }

  #firstTextTitle{
    /* font-size: 45px; */
    font-size: 3vw;
    font-weight: lighter;
    margin-top: 5%;
}

  #secondTextTitle{
      font-size: 2.7vw;
      font-weight: 300;
      margin: 3% 0;
  }

  #threeTextTitle{
    font-size: 2.2vw;
      font-weight: 300;
      margin: -1% 0;
  }


 .btnHeaderApp{
    color: white;
    padding: 20px 30px;
    font-size: 1vw;
    font-weight: bolder;
    background: none;
    border-radius: 18px;
    margin: 3% 0% 0% 0%;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: solid 3px white;
    cursor:pointer;
    transition: 0.9s;

    &:hover{
    border: solid 3px white;
    background:white;
    color:black;
    }
 } 

 .btnHeaderAppHover{
    border: solid 3px white !important;
    background:white !important;
    color:black !important;
    font-size: 1.2vw !important;
 }

 
 #logoLegun{
    font-style:italic;
    font-size: 5vw;
    margin: 2vw 0;
  }

  
`;
