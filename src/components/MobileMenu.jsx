import styled from '@emotion/styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { media } from '../styles/utils.js';

const MobileWrapper = styled.div`
  display: none;
  width: 100vw;
  height: 80px;
  padding: 10px;
  background: rgba(255, 255, 255, .2);

  ${media.xs`
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    cursor:pointer;
  `}
`;

const Bars = styled(FontAwesomeIcon)`
  width: auto;
  height: 70px;
`;

const Overlay = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background: rgba(0, 0, 0, .8);
  pointer-events: none;
  backdrop-filter: blur(40px);
  z-index: 2;
`;

const MobMenu = styled.ul`
  display: flex;
  position: fixed;
  top: 80px;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;
  width: 100vw;
  height: fit-content;
  padding:20px;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(40px);
  z-index: 3;
  transition: all ease .4s;


`;
const MobItem = styled(NavLink)`
  padding: 5px 10px;
  transition: all ease-out .3s;

  &:hover {
    background: rgba(255, 255, 255, .2);
    border-radius: .2em;
    font-weight: bold;
  }
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MobileWrapper>
      <Bars icon={faBars} onClick={toggleMenu} />
      {isOpen && (
        <>
          <Overlay />
          <MobMenu>
            <MobItem to="/">Home</MobItem>
            <MobItem to="/about">About</MobItem>
            <MobItem to="/projects">Projects</MobItem>
          </MobMenu>
        </>
      )}
    </MobileWrapper>
  );
};
export default MobileMenu;