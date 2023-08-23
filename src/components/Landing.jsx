import styled from 'styled-components';
import { useHover } from '../context/HoverContext';

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70vw;
  height: fit-content;
  background: rgba(44, 44, 44, 0.2);
  border-radius: 1em;
  padding: 2em;
  
  h3 {
    font-size: 2.3rem;
    margin: 0;
  }
`;

const LandingH2 = styled.h2`
  font-size: 4em;
    margin: 0;
`;

const LandingSpan = styled.span`
  font-size: 3.5rem;
  margin: 0;
  display: inline-block;
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
  column-gap: 1rem;
  margin-bottom:8rem;
`;

const Landing = () => {
  const { setIsHovered } = useHover();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <LandingContainer>
      <LandingH2>{`Hi!`}</LandingH2>
      <IntroWrapper>
        <LandingSpan>{`I'm`}</LandingSpan>
        <LandingSpan
          style={{ cursor: 'pointer' }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}>{`Jared`}</LandingSpan>
      </IntroWrapper>
      <h3>
        Full Stack Software Developer <br /> and US Navy Veteran
      </h3>
    </LandingContainer>
  );
};

export default Landing;
