import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouseBlank } from '@fortawesome/pro-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const FooterWrapper = styled.footer`
  min-width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0 40px;
  margin-top: 20px;

  ${media.small`
  `}
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2em;
  column-gap: 40px;
  color: #fff;


`;

const Item = styled.li`
  display: flex;
  column-gap: 10px;
  
`;

const Span = styled.span`
  ${media.small`
    display:none;
  `}
`;

const FooterLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Menu>
        <FooterLink to="/"><Span>Home</Span><FontAwesomeIcon icon={faHouseBlank} /></FooterLink>
        <Item>
          <a
            href="https://www.linkedin.com/in/orlerjared"
            target="_blank"
            rel="noreferrer">
            <Span>Linked</Span>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.github.com/orlerdev"
            target="_blank"
            rel="noreferrer">
            <Span>GitHub</Span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Item>
      </Menu>
    </FooterWrapper>
  );
};

export default Footer;
