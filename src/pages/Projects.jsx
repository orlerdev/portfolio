import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import DNDB from '../assets/DNDB.png';


const ProjectsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  height:100vh;
  row-gap:10px;
  padding:10px;
  background: ${props => props.theme.colors.frosted};
  color: ${props => props.theme.colors.altText};
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: 1em;
`;
const ProjectTitle = styled.h2`
  align-self: center;
  font-size: 3em;
`;
const ProjectPhoto = styled.img`
  width:100%;
  height:auto;
  border-radius: 1em;
`;

const Projects = () => {
  return (
    <DefaultLayout>
      <ProjectsWrapper>
          <ProjectTitle>Dungeons & Dust Bunnies</ProjectTitle>
          <a href='https://dndb.me' target='_blank' rel="noreferrer"><ProjectPhoto src={DNDB} alt='Dungeons and Dust Bunnies home page photo' /></a>
      </ProjectsWrapper>
    </DefaultLayout>
  );
};
export default Projects;