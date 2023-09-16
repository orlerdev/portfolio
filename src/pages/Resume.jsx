import {useEffect, useRef, useState} from 'react';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import ContactForm from '../components/ContactForm.jsx';
import {techSkills, techTools, techAPIs} from '../data/technical.js';
import {projects} from '../data/projects.js';
import {experiences} from '../data/experience.js';
import {education} from "../data/education.js";
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faAddressCard, faFilePdf
} from '@fortawesome/pro-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import profilePic from '../assets/Headshot.png';

// STANDARD
const SECTION = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
  padding: 1rem;
`;
const H2 = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.altText};
  padding: 10px;
`;
const H3 = styled.h3``;
const P = styled.p`
  padding: 1.2rem;
  border-radius: 1rem;
  margin-top: .5rem;
`;
const SPAN = styled.span``;
const A = styled.a``;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 15rem;
  row-gap: .2rem;
  padding: 1.2rem;
`;
const LI = styled.li`
  padding-left: 1.5rem;
  text-indent: -1rem;
  word-wrap: break-word;

  &::before {
    content: '- ';
  }
`;

const ResumeWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  margin-top: 50px;
  color: ${props => props.theme.colors.altText};
`;
// RESUME BODY
const ResumeBody = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 80px;
  flex: 2;
  //height: 100%;
  row-gap: 20px;
`;
const SectionTitle = styled(H2)``;
const SectionSubtitle = styled(H3)``;
// RESUME HEADER
const ResumeHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const Name = styled.h1`
  font-size: 4rem;
`;
const Title = styled(H2)`
  font-size: 2.5rem;
  border: none;
`;
const Location = styled(H3)`
  font-size: 1.8rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: .5rem;
  padding: .5rem;
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.8rem;
  height: 1.8rem;
`;
const Download = styled(SPAN)`
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.colors.boxShadow};
  color: ${props => props.theme.colors.altText};
  border-radius: .2rem;
  padding: 8px 6px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Contact = styled(Download)``;
const Info = styled(A)`
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: .2rem;
  padding: 8px 6px;
  font-weight: 700;
  font-size: 1.2rem;
`;
// SUMMARY
const Summary = styled(SECTION)``;
const SummaryTitle = styled(H2)``;
const SummaryPara = styled(P)`
  border: 1px solid ${props => props.theme.colors.altText};
  border-radius: .5rem;
`;
// PROJECTS
const Projects = styled(SECTION)``;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
  border: 1px solid ${props => props.theme.colors.altText};
`;
const ProjectTitle = styled(H2)`
  align-self: center;
  margin-top: .5rem;
`;
const ProjectBody = styled(P)``;
// EXPERIENCE
const Experience = styled(SECTION)``;
const ExperienceContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.altText};
  border-radius: .5rem;
  padding: .5rem;
`;
const ExpPara = styled(P)`
  width: fit-content;
`;
const ExpList = styled(UL)`
  max-height: 100%;
  flex-wrap: nowrap;
  row-gap: 1rem;
`;
const ExpItem = styled(LI)`
`;

// PROFILE PIC
const ProfilePic = styled.img`
  width: 200px;
  height: 250px;
  align-self: center;
  margin-bottom: 20px;
  border-radius: 2rem;
  background: rgba(0, 0, 0, .3);
  box-shadow: ${props => props.theme.effects.darkBoxShadow};
`;
// RESUME ASIDE
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
const TechGroup = styled.div``;
const TechList = styled(UL)``;
const Skill = styled(LI)`
  color: ${props => props.theme.colors.altText};
  ${props => props.redacted ? `
    color: ${props.theme.redacted.color};
    background-color: ${props.theme.redacted.backgroundColor};
    box-shadow: ${props.theme.colors.boxShadow};
    border-radius:.5rem;
  ` : ''};
  width: fit-content;
  transition: background-color .3s, color .3s;
`;
const Tool = styled(Skill)``;
const API = styled(Skill)``;
const Education = styled.div`
  display: flex;
  flex-direction: column;
`;
const EduWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-areas:
  'title title'
  'school school'
  'dates location'
  'desc desc';
  gap: 10px;
  padding: 1.2rem;
`;
const EduPara = styled(P)`
  padding: unset;
  border-radius: unset;
  margin-top: unset;
`;
const EduTitle = styled(EduPara)`
  grid-area: title;
  font-size: 1.2em;
`;
const EduSchool = styled(EduPara)`
  grid-area: school;
  font-size: 1.2em;
`;
const EduDates = styled(EduPara)`
  grid-area: dates;
`;
const EduLocation = styled(EduPara)`
  grid-area: location;
`;
const EduDescription = styled(EduPara)`
  grid-area: desc;
`;

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const modalRef = useRef();

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleDownload = () => {
    window.open('/jared_orler_resume.pdf', '_blank');
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (isOpen) toggleModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <DefaultLayout>
      <ResumeWrapper>
        <ResumeBody>
          <ResumeHeader>
            <Name>Jared Orler</Name>
            <Title>Software Developer</Title>
            <Location><Icon icon={faLocationDot}/> San Antonio, TX</Location>
            <InfoWrapper>
              <InfoContainer>
                <Icon icon={faFilePdf}/>
                <Download onClick={handleDownload}>Download Resume</Download>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faAddressCard}/>
                <Contact onClick={(e) => {
                  e.stopPropagation();
                  toggleModal();
                }}>Contact Me!</Contact>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faGithub}/>
                <Info
                  href="https://www.github.com/orlerdev"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </Info>
              </InfoContainer>
              <InfoContainer>
                <Icon icon={faLinkedin}/>
                <Info
                  href="https://www.linkedin.com/in/orlerjared"
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </Info>
              </InfoContainer>
            </InfoWrapper>
          </ResumeHeader>
          <Summary>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryPara>
              Proud military veteran and Full Stack Software Developer with
              exceptional leadership skills. Experience in operational risk
              management, personnel evaluations, and overhauling procedures.
              Successfully developed training programs, facilitated high-risk
              training evolutions, and corrected deficiencies in damage control
              curriculum as Warfare Manager and Instructor. Ready to leverage
              leadership expertise as a software developer.
            </SummaryPara>
          </Summary>
          <Projects>
            <SectionTitle>PROJECTS</SectionTitle>
            {projects.map(project => (<Project
              key={project.title}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectBody>{project.body}</ProjectBody>
            </Project>))}
          </Projects>
          <Experience>
            <SectionTitle>EXPERIENCE</SectionTitle>
            {experiences.map(exp => (<ExperienceContainer key={exp.title}>
              <SectionSubtitle>{exp.title}</SectionSubtitle>
              <ExpPara>{exp.dates}</ExpPara>
              <ExpPara>{exp.workPlace}</ExpPara>
              <ExpPara>{exp.location}</ExpPara>
              <ExpList>
                {exp.body.map((desc, index) => (<ExpItem key={index}>{desc}</ExpItem>))}
              </ExpList>
            </ExperienceContainer>))}
          </Experience>
        </ResumeBody>
        <ResumeAside>
          <ProfilePic src={profilePic} alt="Profile Picture"/>
          <TechGroup>
            <SectionTitle>TECHNICAL SKILLS</SectionTitle>
            <TechList>
              {techSkills.map(skill => {
                const isSkillUsed = hoveredProject ? hoveredProject.skills.includes(skill) : true;
                return (<Skill key={skill} redacted={!isSkillUsed}>
                  {skill}
                </Skill>);
              })}
            </TechList>
          </TechGroup>
          <TechGroup>
            <SectionTitle>TECHNICAL TOOLS</SectionTitle>
            <TechList>
              {techTools.map(tool => {
                const isToolUsed = hoveredProject ? hoveredProject.tools.includes(tool) : true;
                return (<Tool key={tool} redacted={!isToolUsed}>
                  {tool}
                </Tool>);
              })}
            </TechList>
          </TechGroup>
          <TechGroup>
            <SectionTitle>APIs</SectionTitle>
            <TechList>
              {techAPIs.map(api => {
                const isApiUsed = hoveredProject ? hoveredProject.apis.includes(api) : true;
                return (<API key={api} redacted={!isApiUsed}>
                  {api}
                </API>);
              })}
            </TechList>
          </TechGroup>
          <Education>
            <SectionTitle>EDUCATION</SectionTitle>
            {education.map(edu => (
            <EduWrapper key={edu.school}>
              <EduTitle>{edu.degree}</EduTitle>
              <EduSchool>{edu.school}</EduSchool>
              <EduDates>{edu.dates}</EduDates>
              <EduLocation>{edu.location}</EduLocation>
              <EduDescription>{edu.description}</EduDescription>
            </EduWrapper>
              ))}
          </Education>
        </ResumeAside>
      </ResumeWrapper>
      {isOpen && (<div ref={modalRef}>
        <ContactForm toggleModal={toggleModal}/>
      </div>)}
    </DefaultLayout>);
};
export default Resume;