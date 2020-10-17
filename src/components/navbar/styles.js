import styled from 'styled-components';

export const Container = styled.div`
  background:black;
  padding: 0px 5%;

  .cWrapper{
    height: 10vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    
  a{
    color:white;
    text-decoration:none;
  }


  #logo-Legun{
    font-size: 2.5vw;
    font-style: italic;
    
  }

  #btn-download-app{
    padding: 0.5vw;
    border: solid 1px white;
    border-radius: 0.2vw;
    transition: 0.6s;


    &:hover{
    /* border: solid 1px black; */
    background:white;
    color: black;

    }
  }


  #nav-links-Legun a{
    font-size: 1vw;
    text-transform:uppercase;
    margin-left:1.5vw;
    transition:0.3s;

    &:hover{
      background:white;
      color:black;
      padding:2px;
      border-radius:2px;
    }
  }
}


@media (max-width: 425px){
    display:none;
}

`;
