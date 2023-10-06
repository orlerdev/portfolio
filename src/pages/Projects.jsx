import {useState} from 'react';
import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import {projects} from "../data/projects.js";


const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  row-gap: 10px;
  padding: 10px;
  margin-top: 50px;
  color: ${props => props.theme.colors.altText};
`;

const ProjectContainer = styled.div`
`;

const ProjectTitle = styled.h2`
  font-size: 3em;
  border-bottom: 5px solid ${props => props.theme.colors.altText};
  width: 100%;
  text-align: center;
`;

const ProjectLink = styled.a`
  margin-top: 1rem;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectPhoto = styled.img`
  width: 80%;
  height: auto;
  border-radius: 1em;
`;

const ProjectDescription = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: fit-content;
  opacity: ${props => props.isHovered ? '1' : '0'};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  pointer-events: none;
  box-shadow: ${props => props.theme.colors.boxShadow};
  color: ${props => props.theme.colors.altText};
  transition: opacity .3s ease;
  z-index: 3;
`;


const Projects = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState('ontouchstart' in window);

  return (
    <DefaultLayout>
      <ProjectsWrapper>
        {projects.map(project => (
          <ProjectContainer key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectLink href={project.link} target='_blank' rel='noreferrer'>
              <PhotoWrapper>
                <ProjectPhoto
                  src={project.image}
                  alt='Project Photo'
                  onMouseEnter={() => setHoveredPhoto(project.title)}
                  onMouseLeave={() => setHoveredPhoto(null)}
                />
                {!isTouchDevice &&
                  <ProjectDescription
                    isHovered={hoveredPhoto === project.title}>{project.body}</ProjectDescription>
                }
              </PhotoWrapper>
            </ProjectLink>

          </ProjectContainer>
        ))}
      </ProjectsWrapper>
    </DefaultLayout>
  );
};
export default Projects;
