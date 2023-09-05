import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import {media} from '../styles/utils.js';

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self:center;
  background: ${props => props.theme.colors.frosted};
  background-image: ${props => props.theme.colors.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.effects.boxShadow};
  backdrop-filter: blur(20px);
  border-radius: 1em;
  padding: 2em;
  text-align:center;
  color: ${props => props.theme.colors.altText};
  width: 70vw;
  row-gap:40px;
  
    ${media.small`
    width:500px;
  `}
  
  ${media.xs`
    width:350px;
  `}
  
`;

const H2 = styled.h2`
  font-size: 4em;
  
  ${media.xs`
    font-size:2em;
  `}
  
`;

const TechContainer = styled.div`
  display: flex;
  height: fit-content;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  text-align: center;
  font-weight: 700;
  width: 125px;
  `;

const TechTitle = styled.p`
  width: 100%;
`;

const TechIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: .5em;
  background: rgba(255, 255, 255);
  padding: 5px;
`;

const techTitles = [
  'Apache/Tomcat',
  'Bootstrap',
  'CSS',
  'Firebase',
  'GitHub',
  'GraphQL',
  'Hibernate',
  'HTML',
  'Java',
  'JavaScript',
  'JSON',
  'Maven',
  'MySQL',
  'Node.js',
  'Node',
  'React',
  'Scrum',
  'Spring',
  'Thymeleaf',
  'Vite'
];

const TechStack = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const paths = [];
      for (let i = 1; i <= 20; i++) {
        const imagePath = await import (`../assets/${i}.png`);
        paths.push(imagePath.default);
      }
      setImagePaths(paths);
    };
    importImages();
  }, []);

  return (
    <TechWrapper>
      <H2>Tools I Use</H2>
      <TechContainer>
        {imagePaths.map((path, index) => (
          <TechIconContainer key={index}>
            <TechIcon src={path} alt={`Image ${index}`} title={techTitles[index]} />
            <TechTitle>{techTitles[index]}</TechTitle>
          </TechIconContainer>
        ))}
      </TechContainer>
    </TechWrapper>
  );
};
export default TechStack;