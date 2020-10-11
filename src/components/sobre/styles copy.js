import styled from 'styled-components';

export const Container = styled.div`
  min-height: 50vh;
  padding: 0px 5%;

  h2{
    color:black;
    font-size: 3vw;
    margin-top: 2vw;
    text-align:center;
  }
  .sobreWrapper{
    display:flex;
    justify-content:space-around;

    a{

    }

    .alignText{
      display:flex;
      align-items:center;
      justify-content:center;
      width: 50vh;
      height: 30vh;

    }

    #legunTitle{
      color:black;
      text-decoration:none;
      font-size: 10vw;
      font-style: italic;
    }
  }

`;
