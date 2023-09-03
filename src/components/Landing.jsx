import styled from '@emotion/styled';


const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5%;
  text-align: center;
  height: 100vh;
  width: 50vw;
  font-family: ${props => props.theme.fonts.alt};
  color: ${props => props.theme.colors.altText};
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.alt};
  font-size: 12em;
  //align-self:flex-start;
`;

const H2 = styled.h2`
  font-size: 5rem;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <H1>{`Hi! I'm Jared`}</H1>
      <H2>Full Stack Software Developer <br /> and US Navy Veteran</H2>
    </LandingContainer>
  );
};

export default Landing;
