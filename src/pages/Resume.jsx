import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import profilePic from '../assets/Headshot.png';

const ResumeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top:50px;
  color: ${props => props.theme.colors.altText};

  h2 {
    border-bottom: 1px solid ${props => props.theme.colors.altText};
  }
`;
const ResumeBody = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 80px;
  flex: 2;
  height: 100%;
  row-gap: 20px;
`;
const ResumeAside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 40px 80px 40px 40px;
  flex: 1;
  height: 100%;
  row-gap: 20px;
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
`;
const Summary = styled.div``;
const Projects = styled.div``;
const Experience = styled.div``;
const ProfilePic = styled.img`
  width: 200px;
  height: 250px;
  align-self:center;
  margin-bottom:20px;
  border-radius: 2rem;
  background: rgba(0,0,0,.3);
`;
const TechSkills = styled.div``;
const Education = styled.div``;

const Resume = () => {
  const handleDownload = () => {
    window.open('/jared_orler_resume.pdf', '_blank');
  };

  return (
    <DefaultLayout>
      <ResumeWrapper>
        <ResumeBody>
          <Summary>
            <h2>SUMMARY</h2>
          </Summary>
          <Projects>
            <h2>PROJECTS</h2>
          </Projects>
          <Experience>
            <h2>EXPERIENCE</h2>
          </Experience>
        </ResumeBody>
        <ResumeAside>
          <ProfilePic src={profilePic} alt="Profile Picture" />
          <TechSkills>
            <h2>TECHNICAL SKILLS</h2>
          </TechSkills>
          <Education>
            <h2>EDUCATION</h2>
          </Education>
        </ResumeAside>
      </ResumeWrapper>
    </DefaultLayout>
  );
};
export default Resume;