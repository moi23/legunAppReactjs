import styled from 'styled-components';

export const Container = styled.div`
  background: #ffff;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0px 5%;
  

h2{
  font-size: 3vw;
    margin-top: 2vw;
    margin-bottom: 4vw;
}



  .BoxAlignProducts{
    display:flex;
    width: 100%;
    justify-content:space-around;
    margin-bottom:2vw;
    flex-wrap:wrap;


    img{
    height: auto;
    width: 9vw;
    border-radius: 50%;
}
    }

    .boxLink{
      display:flex;
      flex-direction:column;
      align-items:center;


      h2{
        font-size: 1vw;
      }

      a{
        margin-top: 20px;
        border: 1px solid #0476d0;
        color: #ffffff;
        background-color: #0476d0;
        padding: 10px 10px;
        border-radius:4px;
        text-decoration:none;
        transition: background-color .35s, opacity .35s;
        margin-bottom: 5%;
}
      }


`;    
