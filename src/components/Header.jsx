import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media } from '../styles/utils.js';
import MobileMenu from './MobileMenu.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  border: none;
  outline: none;
  z-index: 5;
  transition: all ease .4s;

  ${media.small`
    justify-content:center;
    left: 50%;
    transform: translateX(-50%);
    align-items:center;
  `}

  ${media.xs`
    height:50px;
  `}
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8em;

  ${media.xs`
    display:none;
  `}
`;

const Item = styled(NavLink)`
  padding: 5px 10px;
  transition: all ease-out .3s;
  flex: 1 1 auto;

  &:hover {
    background: rgba(255, 255, 255, .2);
    border-radius: .2em;
    font-weight: bold;
  }
`;

const Span = styled.span`
  transform: translateY(10%);
`;

const Navbar = () => {
  return (
    <Nav>
      <MobileMenu />
      <Menu>
            <Item to="/">Home</Item>
            <Span>|</Span>
            <Item to="/about">About</Item>
            <Span>|</Span>
            <Item to="/projects">Projects</Item>
      </Menu>
      <ThemeToggle />
    </Nav>
  );
};

export default Navbar;
