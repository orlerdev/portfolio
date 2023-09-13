import DefaultLayout from '../layouts/DefaultLayout.jsx';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faLocationDot } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../assets/Headshot.png';

const ResumeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: 50px;
  color: ${props => props.theme.colors.altText};
`;

const ResumeHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
`;

const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  column-gap: 5px;
`;

const SectionTitle = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.altText};
  padding: 10px;
`;

const SectionSubtitle = styled.h3``;

const SectionPara = styled.p`
  padding: 12px;
    //background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  margin-top: .5rem;
`;

const ResumeBody = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 80px;
  flex: 2;
  height: 100%;
  row-gap: 20px;
`;

const Name = styled.h1``;
const Title = styled.h2``;
const Icon = styled(FontAwesomeIcon)``;
const Info = styled.a``;

const Summary = styled.div`

`;
const Projects = styled.div``;

const Experience = styled.div``;
const ProfilePic = styled.img`
  width: 200px;
  height: 250px;
  align-self: center;
  margin-bottom: 20px;
  border-radius: 2rem;
  background: rgba(0, 0, 0, .3);
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
          <ResumeHeader>
            <Name>Jared Orler</Name>
            <Title>Software Developer</Title>
            <InfoWrapper>
              <InfoContainer>
                <Icon icon={faPhone} />
                <Info>Phone</Info>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faAt} />
                <Info>Email</Info>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faGithub} />
                <Info>GitHub</Info>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faLinkedin} />
                <Info>LinkedIn</Info>
              </InfoContainer>
            </InfoWrapper>
          </ResumeHeader>
          <Summary>
            <SectionTitle>SUMMARY</SectionTitle>
            <SectionPara>
              Proud military veteran and Full Stack Software Developer with exceptional leadership skills. Experience in operational risk management, personnel evaluations, and overhauling procedures. Successfully developed training programs, facilitated high-risk training evolutions, and corrected deficiencies in damage control curriculum as Warfare Manager and Instructor. Ready to leverage leadership expertise as a software developer.</SectionPara>
          </Summary>
          <Projects>
            <SectionTitle>PROJECTS</SectionTitle>
          </Projects>
          <Experience>
            <SectionTitle>EXPERIENCE</SectionTitle>
          </Experience>
        </ResumeBody>
        <ResumeAside>
          <ProfilePic src={profilePic} alt="Profile Picture" />
          <TechSkills>
            <SectionTitle>TECHNICAL SKILLS</SectionTitle>
          </TechSkills>
          <Education>
            <SectionTitle>EDUCATION</SectionTitle>
          </Education>
        </ResumeAside>
      </ResumeWrapper>
    </DefaultLayout>
  );
};
export default Resume;