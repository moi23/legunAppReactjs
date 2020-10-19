import styled from 'styled-components';

export const Container = styled.div`
  height: 13vh;
  background: black;
  border:none;
  display:flex;
  justify-content:flex-end;
  align-items:center;

  a{
    color:white;
    text-decoration:none;
    font-style:italic;
    font-size: 10vw;
    padding-right: 6%;
    padding-top:4px;
    font-weight: 400;
    letter-spacing: 4px;
	}
	//Faz desaparecer quando chegar em tela de 500px
	@media (min-width: 500px) {
    display: none;
}
  
`;
