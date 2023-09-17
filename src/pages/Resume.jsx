import {useEffect, useRef, useState} from 'react';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import ContactForm from '../components/ContactForm.jsx';
import {media} from '../styles/utils.js';
import theme from '../styles/theme.js';
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

  ${media.medium`
      align-self:center;
      font-size:1.2rem;
      `}
`;
const H3 = styled.h3``;
const P = styled.p`
  padding: 1.2rem;
  border-radius: 1rem;
  margin-top: .5rem;
`;
const SPAN = styled.span`
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.colors.boxShadow};
  color: ${props => props.theme.colors.altText};
  border-radius: .2rem;
  padding: 8px 6px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;

  ${media.medium`
      font-size:1rem;
      width:50%;
      `}
  ${media.smedium`
      width:100%;
      text-align:center;
      `}
`;
const A = styled.a`
  background: ${props => props.theme.colors.frosted};
  backdrop-filter: blur(20px);
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: .2rem;
  padding: 8px 6px;
  font-weight: 700;
  font-size: 1.2rem;

  ${media.medium`
      font-size:1rem;
      width:50%;
      `}
  ${media.smedium`
      width:100%;
      text-align:center;
      `}
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 15rem;
  row-gap: .2rem;
  padding: 1.2rem;

  ${media.medium`
      flex-wrap: nowrap;
      max-height: unset;
      `}
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

  ${media.small`
      flex-direction:column;
      `}
`;
// RESUME BODY
const ResumeBody = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 4rem 8rem;
  flex: 2;
  row-gap: 20px;

  ${media.medium`
      padding: 1rem;
      `}
  ${media.small`
      padding:.5rem;
      `}
`;
const SectionTitle = styled(H2)`
  align-self: flex-start;
`;
const SectionSubtitle = styled(H3)``;
// RESUME HEADER
const ResumeHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  ${media.small`
      row-gap:.2rem;
      `}
`;
const Name = styled.h1`
  font-size: 4rem;


  ${media.medium`
      font-size: 2.5rem;
      `}
  ${media.smedium`
      align-self:center;
      `}
`;
const Title = styled(H2)`
  font-size: 2.5rem;
  border: none;

  ${media.medium`
     font-size: 1.8rem;
     align-self:flex-start;
     `}
  ${media.smedium`
     align-self:center;   
      `}

`;
const LocationWrapper = styled.div`
  display:flex;
  align-items: center;
  column-gap:1rem;
  padding:0 .5rem;
`;

const Location = styled(H3)`
  font-size: 1.8rem;

  ${media.medium`
    font-size:1.2rem;    
  `}
  ${media.small`
      align-self:center;
      `}
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;

  ${media.medium`
		  flex-direction:column;
		  flex-wrap:nowrap;
		  margin-top:.8rem;
	`}
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

  ${media.medium`
      width:1.2rem;
      height:1.2rem;
      `}
`;
const Download = styled(SPAN)``;
const Contact = styled(SPAN)``;
const Info = styled(A)``;
// SUMMARY
const Summary = styled(SECTION)``;
const SummaryTitle = styled(H2)``;
const SummaryPara = styled(P)`
  border: 1px solid ${props => props.theme.colors.altText};
  border-radius: .5rem;

  ${media.medium`
      border:none;
      `}
`;
// PROJECTS
const Projects = styled(SECTION)``;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .2rem;
  padding-top: .5rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.altText};

  ${media.medium`
      row-gap:unset;
      `}
`;
const ProjectTitle = styled(H3)`
  align-self: center;

  ${media.medium`
      align-self:flex-start;
      margin-left:1rem;
      border:none;
      `}
`;
const ProjectBody = styled(P)`
  margin: 0;
  padding: 1rem;
`;
// EXPERIENCE
const Experience = styled(SECTION)``;
const ExperienceContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.altText};
  border-radius: .5rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  row-gap: .5rem;

  ${media.medium`
      border:none;
      align-items:center;
      text-align:center;
      `}
`;
const ExpPara = styled(P)`
  width: fit-content;
  padding: unset;
  border-radius: unset;
  margin-top: unset;
`;
const ExpList = styled(UL)`
  max-height: 100%;
  flex-wrap: nowrap;
  row-gap: 1rem;

  ${media.medium`
      border:1px solid ${props => props.theme.colors.altText};
      border-radius:.5rem;
      text-align:left;
      `}
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
  border-radius: 0 0 0 1rem;
  backdrop-filter: blur(20px);

  ${media.medium`
      padding: 1rem;
      `}

  ${media.small`
     border-radius:1rem 1rem 0 0;
     `}
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
const EducationTitle = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.altText};
  padding: 10px;

  ${media.medium`
      font-size:1.2rem;
      `}
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

  ${media.medium`
      grid-template-columns:1fr;
      grid-template-areas:
      'title'
      'school'
      'dates'
      'location'
      'desc';
      gap:5px;
      `}
`;
const EduPara = styled(P)`
  padding: unset;
  border-radius: unset;
  margin-top: unset;

  ${media.small`
      font-size:1rem;
      `}
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

  ${media.medium`
      margin-top:1rem;
      `}
`;

const Resume = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);
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
        const handleResize = () => {
            if (window.innerWidth <= parseInt(theme.breakpoints.smedium)) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, isMobileView]);

    return (<DefaultLayout>
        <ResumeWrapper>
            <ResumeBody>
                <ResumeHeader>
                    <Name>Jared Orler</Name>
                    <Title>Software Developer</Title>
                    <LocationWrapper>
                        {!isMobileView &&
                            <Icon icon={faLocationDot}/>
                        }
                        <Location>San Antonio, TX</Location>
                    </LocationWrapper>
                    <InfoWrapper>
                        <InfoContainer>
                            {!isMobileView &&
                                <Icon icon={faFilePdf}/>
                            }
                            <Download onClick={handleDownload}>Download Resume</Download>
                        </InfoContainer>
                        <InfoContainer>
                            {!isMobileView &&
                                <Icon icon={faAddressCard}/>
                            }
                            <Contact onClick={(e) => {
                                e.stopPropagation();
                                toggleModal();
                            }}>Contact Me!</Contact>
                        </InfoContainer>
                        <InfoContainer>
                            {!isMobileView &&
                                <Icon icon={faGithub}/>
                            }
                            <Info
                                href="https://www.github.com/orlerdev"
                                target="_blank"
                                rel="noreferrer">
                                GitHub
                            </Info>
                        </InfoContainer>
                        <InfoContainer>
                            {!isMobileView &&
                                <Icon icon={faLinkedin}/>
                            }
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
                {!isMobileView &&
                    <ProfilePic src={profilePic} alt="Profile Picture"/>
                }
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
                    <EducationTitle>EDUCATION</EducationTitle>
                    {education.map(edu => (<EduWrapper key={edu.school}>
                        <EduTitle>{edu.degree}</EduTitle>
                        <EduSchool>{edu.school}</EduSchool>
                        <EduDates>{edu.dates}</EduDates>
                        <EduLocation>{edu.location}</EduLocation>
                        {!isMobileView &&
                            <EduDescription>{edu.description}</EduDescription>
                        }
                    </EduWrapper>))}
                </Education>
            </ResumeAside>
        </ResumeWrapper>
        {isOpen && (<div ref={modalRef}>
            <ContactForm toggleModal={toggleModal}/>
        </div>)}
    </DefaultLayout>);
};
export default Resume;