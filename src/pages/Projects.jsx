import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import DNDB from '../assets/DNDB.png';


const ProjectsWrapper = styled.div`
  margin-top: 100px;
`;
const MainTitle = styled.h1``;
const ProjectContainer = styled.div``;
const ProjectTitle = styled.h2``;
const ProjectPhoto = styled.img`
  width:100%;
  height:auto;
`;

const Projects = () => {
  return (
    <DefaultLayout>
      <ProjectsWrapper>
        <MainTitle>Projects</MainTitle>
        <ProjectContainer>
          <ProjectTitle>Dungeons & Dust Bunnies</ProjectTitle>
          <a href='https://dndb.me' target='_blank' rel="noreferrer"><ProjectPhoto src={DNDB} alt='Dungeons and Dust Bunnies home page photo' /></a>
        </ProjectContainer>
      </ProjectsWrapper>
    </DefaultLayout>
  );
};
export default Projects;