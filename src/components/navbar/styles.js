import styled from 'styled-components';

export const Container = styled.div`
  background:black;
  height: 10vh;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0px 5%;
  
  a{
    color:white;
    text-decoration:none;
  }

  #logo-Legun{
    font-size: 30px;
    font-style: italic;
    
  }

  #btn-download-app{
    /* background:white; */
    padding: 10px;
    border: solid 1px white;
    border-radius: 4px;
    transition: 0.6s;


    &:hover{
    border: solid 1px black;
    background:white;
    color: black;

    }
  }

  #nav-links-Legun a{
    font-size: 1vw;
    text-transform:uppercase;
    margin-left:1.5vw;
  }

`;
