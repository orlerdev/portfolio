import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StackWrapper = styled.div`
  display:flex;
  height:fit-content;
  width:70vw;
  gap:20px;
  flex-wrap:wrap;
  align-items: flex-start;
`;
const TechIcon = styled.img`
  width:100px;
  height:100px;
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
]

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
    <StackWrapper>
      {imagePaths.map((path, index) => (
        <TechIcon key={index} src={path} alt={`Image ${index}`} title={techTitles[index]} />
      ))}
    </StackWrapper>
  );
};
export default TechStack;