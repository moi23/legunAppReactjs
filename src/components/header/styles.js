import styled from 'styled-components';
import Background from '../../assets/background.png';
import xlBg from '../../assets/xl-bg.png'

export const Container = styled.div`
  /* min-height:90vh; */
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width:2560px){
  /* min-height:90vh; */
  /* background: url(${xlBg}); */
  background:black;
  background-size: contain;
  background-repeat: no-repeat;

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
    font-size: 2.9vw;
    font-weight: 300;
    margin: 3% 0;
}

#threeTextTitle{
    font-size: 34px;
    font-weight: 300;
    margin: -1% 0;
}


 #btnHeaderApp{
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

 
 #logoLegun{
    font-style:italic;
    font-size: 5vw;
    /* margin-top: 3vw; */
  }
  
`;
