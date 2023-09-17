import { useEffect, useState } from 'react';
import { media } from '../styles/utils.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DC1 from '../assets/DC1.webp';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${DC1}) no-repeat fixed top;
  background-size: cover;
  font-family: ${(props) => props.theme.fonts.victor};
  overflow-x: hidden;
  line-height: 1.6;
`;

const GlowingEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  pointer-events: none;
  background: radial-gradient(circle,
  rgba(255, 255, 255, 0.7) 1%,
  transparent 40%);
  transform: translate(-50%, -50%);
  opacity: 1;

  &.active {
    animation: glow 10s ease-out infinite;
  }

  @keyframes glow {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.1;
    }
  }

`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageRow = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 0;

  ${media.xl`max-width:1100px; width:100%;`}

  ${media.xs``}
`;
const PageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DefaultLayout = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState('ontouchstart' in window);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);
  return (
    <PageWrapper>
      {!isTouchDevice && (<GlowingEffect
        className={active ? 'active' : ''}
        style={{
          top: cursorPos.y,
          left: cursorPos.x
        }}
      />)}
      <PageContainer>
        <PageRow>
          <PageColumn>
            <Header />
            {children}
            <Footer />
          </PageColumn>
        </PageRow>
      </PageContainer>
    </PageWrapper>
  );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};
