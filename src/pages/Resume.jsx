import { useEffect, useRef, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { techSkills, techTools, techAPIs } from '../data/technical.js';
import { projects } from '../data/projects.js';
import { experiences } from '../data/experience.js';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot, faAddressCard, faFilePdf
} from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../assets/Headshot.png';

// STANDARD
const SECTION = styled.section``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const P = styled.p`
  padding: .8rem;
  backdrop-filter: blur(20px);
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
const LI = styled.li``;

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
  height: 100%;
  row-gap: 20px;
`;
const SectionTitle = styled(H2)`
  border-bottom: 1px solid ${props => props.theme.colors.altText};
  padding: 10px;
`;
const SectionSubtitle = styled(H3)``;
const SectionPara = styled(P)``;
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
const Summary = styled(SECTION)`

`;
// PROJECTS
const Projects = styled(SECTION)``;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`;
const ProjectTitle = styled(H2)`
  align-self: center;
  margin-top: .5rem;
`;
const ProjectBody = styled(P)``;
// EXPERIENCE
const Experience = styled(SECTION)``;
const ExpPara = styled(P)`
  width: fit-content;
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
  ` : ''};
  width: fit-content;
  transition: background-color .3s, color .3s;
`;
const Tool = styled(Skill)``;
const API = styled(Skill)``;
const Education = styled.div``;

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
                        <Location><Icon icon={faLocationDot} /> San Antonio, TX</Location>
                        <InfoWrapper>
                            <InfoContainer>
                                <Icon icon={faFilePdf} />
                                <Download onClick={handleDownload}>Download Resume</Download>
                            </InfoContainer>
                            <InfoContainer>
                                <Icon icon={faAddressCard} />
                                <Contact onClick={(e) => {
                                    e.stopPropagation();
                                    toggleModal();
                                }}>Contact Me!</Contact>
                            </InfoContainer>
                            <InfoContainer>
                                <Icon icon={faGithub} />
                                <Info
                                    href="https://www.github.com/orlerdev"
                                    target="_blank"
                                    rel="noreferrer">
                                    GitHub
                                </Info>
                            </InfoContainer>
                            <InfoContainer>
                                <Icon icon={faLinkedin} />
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
                        <SectionTitle>SUMMARY</SectionTitle>
                        <SectionPara>
                            Proud military veteran and Full Stack Software Developer with
                            exceptional leadership skills. Experience in operational risk
                            management, personnel evaluations, and overhauling procedures.
                            Successfully developed training programs, facilitated high-risk
                            training evolutions, and corrected deficiencies in damage control
                            curriculum as Warfare Manager and Instructor. Ready to leverage
                            leadership expertise as a software developer.
                        </SectionPara>
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
                        {experiences.map(exp => (<div key={exp.title}>
                            <SectionSubtitle>{exp.title}</SectionSubtitle>
                            <ExpPara>{exp.dates}</ExpPara>
                            <ExpPara>{exp.workPlace}</ExpPara>
                            <ExpPara>{exp.location}</ExpPara>
                            <ul>
                                {exp.body.map((desc, index) => (<li key={index}>{desc}</li>))}
                            </ul>
                        </div>))}
                    </Experience>
                </ResumeBody>
                <ResumeAside>
                    <ProfilePic src={profilePic} alt="Profile Picture" />
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
                        <SectionSubtitle>Full Stack Software Developer</SectionSubtitle>
                        <SectionPara>Codeup</SectionPara>
                        <SectionPara>02/2023 - 07/2023</SectionPara>
                        <SectionPara>San Antonio, TX</SectionPara>
                    </Education>
                </ResumeAside>
            </ResumeWrapper>
            {isOpen && (<div ref={modalRef}>
                <ContactForm toggleModal={toggleModal} />
            </div>)}
        </DefaultLayout>);
};
export default Resume;