import styled from 'styled-components';

export const Container = styled.div`
  background:black;
  padding: 0px 5%;

  .cWrapper{
    min-height: 7vh;
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
    margin-top:1%;
    
  }

  #btn-contato{
    padding: 0.5vw;
    border: solid 1px white;
    border-radius: 0.2vw;
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
    transition: 0.3s;

    &:hover{
      background:white;
      color:black;
      padding:2px;
      border-radius:2px;
    }
  }
}

#nav-links-Legun{
    display: flex;
    align-items: center;
  }

.cWrapper p{
  color:white;
  font-size:0.9vw;
  margin-top:2%;
  margin-bottom:5%;
}

`;
