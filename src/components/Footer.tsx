import React from 'react';
import styled from 'styled-components';
import { primaryFont, typeScale, colors } from '../utils/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 20vh;
  background: linear-gradient(180deg, rgba(219, 211, 201, 0) 0%, #dbd3c9 50%);
  align-items: center;

  > .section-column {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
      margin: 10px;
      font-family: ${primaryFont};
      font-size: ${typeScale.subBodyText};
      cursor: pointer;
      text-align: center;
    }
  }
`;

const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    margin: 10px;
    font-family: ${primaryFont};
    font-size: ${typeScale.subBodyText};
    cursor: pointer;
    text-align: center;
  }
`;

const SectionRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > span {
    margin: 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.75s ease;

    &:hover {
      transform: scale(1.6);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SectionColumn>
        <span>Testimonials</span>
        <span>Careers</span>
        <span>Investors</span>
        <span>Terms of Service</span>
      </SectionColumn>
      <SectionColumn>
        <span>How it works</span>
        <span>Support</span>
        <span>Contact</span>
        <span>Giffy © 2021</span>
      </SectionColumn>
      <SectionRow>
        <span>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </span>
      </SectionRow>
    </FooterContainer>
  );
};

export default Footer;
