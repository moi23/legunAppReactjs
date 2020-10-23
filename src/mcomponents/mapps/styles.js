const { default: styled } = require('styled-components');

import styled from 'styled-components';

export const Container = styled.div`
  //Faz desaparecer quando chegar em tela de 500px
  @media (min-width: 500px) {
    display: none;
  }
`;
