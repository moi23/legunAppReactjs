import styled from 'styled-components';
import BG from './../../assets/mobileHeaderBg.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${BG});
  background-size:cover;

  .alignTitleMobile{
    display:flex;
    flex-direction:column;
    margin-left: 11%;
    padding-top:10%;

  h2{
    margin-top: 5%;
    color:white;
    font-weight:300;
    letter-spacing:3px;
    font-size:10vw;
  }
}

.alignTitleLegun{
    display:flex;
    justify-content:center;
    padding-top: 14%;

    h1{
      color:white;
      font-size: 25vw;
      letter-spacing:10px;
      font-style:italic;
    }
  }

  .alignButtonLegun{
    display:flex;
    justify-content:center;
    margin-top: 17%;
    transition:0.9s;
        button {
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 30px 60px;
        border: solid 2px white;
        border-radius: 13px;
        font-size: 16px;
        &:hover{
          background:white;
          color:black;
          border: solid 2px green;
        }
    }
 }


 @media (min-width: 500px) {
    display: none;
}
  
`;
