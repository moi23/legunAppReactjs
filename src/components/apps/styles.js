import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 0px 5%;
  display:flex;
  flex-direction:column;
  align-items:center;

  h2{
    font-size: 3vw;
    margin-top: 2vw;
  }
  .wrapperBoxDownload{
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top: 3vw;
  }
  .ThumbImageDownload{
    height: auto;
    width: 25vw;
  }
  .boxDownload{

    a{
      text-decoration:none;
      display:flex;
      flex-direction:column;
      align-items:center;
      color:black;
    }
    p{
      margin-bottom: 1vw;
      font-size: 3vw;
    }
    button{
      /* height: 2vw;
      width: 4vw; */
      padding: 1vw 4vw;
      font-size:2vw;
      background: #00B506;
      color: white;
      border: none;
      border-radius: 11px;
      text-transform: uppercase;
    }
  }

  //UltraWide Theme
  @media screen and (max-width: 2560px){
      height: 100vh;
      padding: 0.5vw 2vw;
      display:flex;
      flex-direction:column;
      align-items:center;

    h2{
      font-size: 3vw;
      margin-top: 2vw;
    }

    .wrapperBoxDownload{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 3vw;
    }

    .ThumbImageDownload{
      height: auto;
      width: 12vw;
    }

    .boxDownload{
      a{
        text-decoration:none;
        display:flex;
        flex-direction:column;
        align-items:center;
        color:black;
      }

      p{
        margin-bottom: 1vw;
        font-size: 2vw;
      }

      button{
        padding: 1vw 2vw;
        font-size:1vw;
        background: #00B506;
        color: white;
        border: none;
        border-radius: 11px;
        text-transform: uppercase;
        transition: 0.3s;
        cursor:pointer;
          &:hover{
            background:none;
            border: solid 1px #00B506;
            color: #00B506;
          }
      }
    }
  }

  //Desktop Theme
  @media screen and (max-width: 1920px){
      height: 100vh;
      padding: 0px 5%;
      display:flex;
      flex-direction:column;
      align-items:center;
    h2{
      font-size: 3vw;
      margin-top: 2vw;
    }
    .wrapperBoxDownload{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 3vw;
    }
    .ThumbImageDownload{
      height: auto;
      width: 20vw;
    }
    .boxDownload{
      a{
        text-decoration:none;
        display:flex;
        flex-direction:column;
        align-items:center;
        color:black;
      }
      p{
        margin-bottom: 1vw;
        font-size: 2vw;
      }
      button{
        padding: 1vw 5vw;
        font-size: 1.2vw;
        background: #00B506;
        color: white;
        border: none;
        border-radius: 11px;
        text-transform: uppercase;
        transition: 0.3s;
        cursor:pointer;
          &:hover{
            background:none;
            border: solid 1px #00B506;
            color: #00B506;
          }
      }
    }
  }
`;
