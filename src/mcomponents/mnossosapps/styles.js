import styled from 'styled-components';

export const Container = styled.div`


height: 100%;
  margin-bottom: 4%;
  padding: 0px 5%;
  display:flex;
  flex-direction:column;
  align-items:center;

  h2{
    font-size: 8vw;
		margin-top: 4vw;
		margin-bottom: 4vw;
		text-align:center;
  }
  .wrapperBoxDownload{
    width:100%;
    display:flex;
    justify-content:space-between;
		margin-top: 3vw;
		flex-wrap:wrap;
  }
  .ThumbImageDownload{
    height: auto;
		width: 39vw;
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
      font-size: 5vw;
    }
    button{
		padding: 3vw 6vw;
    font-size: 3vw;
    background: #00B506;
    color: white;
    border: none;
    border-radius: 11px;
		text-transform: uppercase;
		margin-bottom:20%;
    }
  }




	//Faz desaparecer quando chegar em tela de 500px
	@media (min-width: 500px) {
    display: none;
}
  	
`;
