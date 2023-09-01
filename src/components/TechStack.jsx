import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TechWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 70vw;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content:space-evenly;
  background: rgba(44, 44, 44, 0.2);
  border-radius: 1em;
  padding: 2em;
`;

const TechContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:10px;
  text-align: center;
  font-weight:700;
  width:125px;
`;

const TechTitle = styled.p`
  width:100%;
`;

const TechIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius:.5em;
  background: rgba(255,255,255);
  padding:5px;
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
      {imagePaths.map((path, index) => (
        <TechContainer key={index}>
          <TechIcon src={path} alt={`Image ${index}`} title={techTitles[index]} />
          <TechTitle>{techTitles[index]}</TechTitle>
        </TechContainer>
      ))}
    </TechWrapper>
  );
};
export default TechStack;