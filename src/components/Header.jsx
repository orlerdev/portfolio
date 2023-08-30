import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
  background: transparent;
  backdrop-filter: blur(20px);
  border: none;
  outline: none;
  transition: all ease .4s;

  ${media.small`
    justify-content:flex-start;
    left: 50%;
    transform: translateX(-50%);
    flex-direction:column;
    align-items:center;
  `}
`;

const Menu = styled.ul`
  display: flex;
  column-gap: 10px;

  ${media.small`
    flex-direction:column;
    align-items:center;
  `}
`;

const Item = styled(NavLink)`
  padding: 5px 10px;
  transition: all ease-out .3s;

  &:hover {
    background: rgba(255, 255, 255, .2);
    border-radius: .2em;
    font-weight: bold;
  }
`;

const Bars = styled(FontAwesomeIcon)`
  display: none;

  ${media.small`
    display:block;
    cursor:pointer;
  `}
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Menu style={{ display: isOpen ? 'flex' : 'none' }}>
        <Item to="/">Home</Item>
        <span>|</span>
        <Item to="/about">About</Item>
        <span>|</span>
        <Item to="/projects">Projects</Item>
      </Menu>
      <Bars icon={faBars} onClick={toggleMenu} />
    </Nav>
  );
};

export default Navbar;
