import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const FooterWrapper = styled.footer`
  min-width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
  margin-top: 20px;
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
  display:flex;
  column-gap:10px;
  
  & > span{
    ${media.small`
      display:none;
    `}
  }
`;

const FooterLink = styled(NavLink)``;

const Footer = () => {
  return (
    <FooterWrapper>
      <Menu>
        <FooterLink to="/">Home</FooterLink>
        <Item>
          <span>Linked</span>
          <a
            href="https://www.linkedin.com/in/orlerjared"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Item>
        <Item>
          <span>GitHub</span>
          <a
            href="https://www.github.com/orlerdev"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Item>
      </Menu>
    </FooterWrapper>
  );
};

export default Footer;
