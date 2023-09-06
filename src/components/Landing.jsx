import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import Avatar from '../components/Avatar.jsx';

const LandingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width:100%;
  height:100%;
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.altText};
  
  ${media.smedium`
    flex-direction: column;
    
  `}
  
  ${media.small`
    justify-content:unset;
    width:500px;
  `}
  
  ${media.xs`
    width:350px;
  `}
  
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  height: 100%;
  width: 50%;
  justify-content: space-around;
  
  ${media.smedium`
    width:100%
  `}
  
   ${media.xs`
    text-align:center;
  `}
  
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 15em;
  
  ${media.small`
    font-size:10rem;
  `}
`;

const H2 = styled.h2`
  margin-top: -10rem;
  font-size: 8rem;
  
  ${media.small`
    font-size:5rem;
    margin-top: -5rem;
  `}
`;

const H3 = styled.h3`
  margin-top: -5rem;
  font-size: 2.5rem;
  
  ${media.small`
    font-size:2rem;
    margin-top:unset;
  `}
  
  ${media.xs`
    font-size:1.5rem;
  `}
  
`;

const Landing = () => {
  return (
    <LandingContainer>
      <TextWrapper>
      <H1>{`Hi!`}</H1>
      <H2>{`I'm Jared`}</H2>
      <H3>Full Stack Software Developer <br /> and US Navy Veteran</H3>
        </TextWrapper>
      <Avatar />
    </LandingContainer>
  );
};

export default Landing;
