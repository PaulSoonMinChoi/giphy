import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      This is the Footer
    </FooterContainer>
  )
}

export default Footer;