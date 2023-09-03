import styled from '@emotion/styled';
import { useHover } from '../context/HoverContext';

const LandingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: fit-content;
  width: 70vw;
  background: ${props => props.theme.colors.lightTheme.frosted};
  background-image: ${props => props.theme.colors.lightTheme.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.colors.lightTheme.boxShadow};
  backdrop-filter: blur(20px);
  border-radius:1em;
  padding: 0 5px 5px 20px;
  color: ${props => props.theme.colors.lightTheme.altText};

  h3 {
    font-size: 2.3rem;
    margin: 0;
  }
`;

const LandingH2 = styled.h2`
  font-size: 5em;
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
`;

const AvatarTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <AvatarTextWrapper>
        <h3>
          Full Stack Software Developer <br /> and US Navy Veteran
        </h3>
      </AvatarTextWrapper>
    </LandingContainer>
  );
};

export default Landing;
