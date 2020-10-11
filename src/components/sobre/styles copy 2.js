import styled from 'styled-components';

export const Container = styled.div`


  h2{
    font-size: 3vw;
    margin-top: 2vw;
  }
  .wrapperContain{
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-around;
  }

  .wrapperContain .left{
      h2{
        font-style:italic;
        font-size: 8vw;
      }
  }

  .wrapperContain .right{
    padding: 10px;
  }

`;
