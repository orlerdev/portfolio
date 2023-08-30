import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import MobileMenu from '../components/MobileMenu.jsx';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 2em;
  width: 100%;
  height: 80px;
  padding: 10px 20px 0 20px;
  background: rgba(255,255,255,.2);
  backdrop-filter: blur(20px);
  border: none;
  outline: none;
  transition: all ease .4s;

  ${media.small`
    justify-content:center;
    left: 50%;
    transform: translateX(-50%);
    align-items:center;
  `}
`;

const Menu = styled.ul`
  display: flex;
  column-gap: 10px;  
  
  ${media.xs`
    display:none;
  `}
`;

const Item = styled(NavLink)`
  padding: 5px 10px;
  transition: all ease-out .3s;
  flex:1 1 auto;

  &:hover {
    background: rgba(255, 255, 255, .2);
    border-radius: .2em;
    font-weight: bold;
  }
`;



const Navbar = () => {

  return (
    <Nav>
      <MobileMenu />
      <Menu>
        <Item to="/">Home</Item>
        <span>|</span>
        <Item to="/about">About</Item>
        <span>|</span>
        <Item to="/projects">Projects</Item>
      </Menu>

    </Nav>
  );
};

export default Navbar;
