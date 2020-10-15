import styled from 'styled-components';

export const Container = styled.div`
  /* min-height: 50vh; */
  padding: 0px 5%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #f3f3f3;


  h2{
    font-size: 3vw;
    margin-top: 2vw;
  }

  .wrapperContain{
    display:grid;
    /* grid-template-rows: 50vh 50vh; */
    grid-template-areas: "left right";
  }

  .wrapperContain .left{
    width:40vw;
    grid-area: "left";

    display:flex;
    align-items:center;
    justify-content:center;

    h2{
        font-style:italic;
        font-size: 8vw;
        background:black;
        color:white;
        padding: 3vw;

      }
  }

  .wrapperContain .right{
    width:40vw;
    grid-area: "right";

    display:flex;
    flex-direction:column;
    justify-content:center;

    p{
      font-size: 1.2vw;
      margin-top: 2vw;
    }

    a{
      margin-bottom: 5%;
      font-size: 1.2vw;
    }
  }

`;
