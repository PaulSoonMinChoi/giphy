import React from 'react';
import styled from 'styled-components';
import { primaryFont, typeScale, colors } from '../utils/index';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20vh;
  background-color: ${colors.secondary3};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      This is the Footer
    </FooterContainer>
  )
}

export default Footer;