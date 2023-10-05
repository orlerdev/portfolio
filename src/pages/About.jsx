import DefaultLayout from '../layouts/DefaultLayout.jsx';
import usePhoto from '../hooks/usePhoto.jsx';
import styled from '@emotion/styled';
import {media} from '../styles/utils.js';

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-top: 90px;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  background: ${props => props.theme.colors.frosted};
  background-image: ${props => props.theme.colors.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.effects.darkBoxShadow};
  backdrop-filter: blur(20px);
  border-radius: 1em;
  padding-left: 20px;
  color: ${props => props.theme.colors.altText};

  ${media.small`
    flex-direction:column;
    row-gap:40px;
    align-items:center;
    width:100%;
    padding:unset;
  `}

`;

const SEntry = styled(Entry)`
  justify-content: unset;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 40px;
  width: 60%;
  padding: 20px;

  ${media.small`
    width:100%;
  `}
`;

const STextWrapper = styled(TextWrapper)`
  width:100%;
  row-gap:10px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  width:100%;

  ${media.xl`
    font-size:2rem;
  `}
`;

const STitle = styled(Title)``;

const SArticle = styled.article`
  font-size:1.1rem;
`;

const AboutBody = styled.ul`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  ${media.xl`
    font-size:1.2rem;
  `}
  li {
    padding-left: 1.5em;
    text-indent: -1em;
  }

  li::before {
    content: '- ';
  }
  
`;

const Photo = styled.img`
  max-width: 40%;
  max-height: 100%;
  width: 40%;
  height: auto;
  aspect-ratio: auto;
  border-radius: 1em;

  ${media.small`
    max-width:100%;
    width:100%;
    border-radius:unset;
  `}
`;

const About = () => {
  const photo1 = usePhoto('navy2.webp');
  const photo2 = usePhoto('navy9.webp');
  const photo3 = usePhoto('navy7.webp');
  const photo4 = usePhoto('navy4.webp');
  const familyPhoto = usePhoto('familyPhoto.webp')
  return (
    <DefaultLayout>
      <Entries>
        <SEntry>
          <STextWrapper>
            <STitle>My Journey</STitle>
            <SArticle>
              I started my journey in software development with freeCodeCamp.org. I completed the course in Responsive Web Design and then the JavaScript Algorithms and Data Structures course. From there I moved onto Udemy.com where I continued learning the skills needed to pursue a career in this field. After retiring from the Navy, my family and I headed for San Antonio, TX where I enrolled in the Web Development program at Codeup. After 9-5, 5 days a week, for 20 weeks, I graduated the program with the rest of Bigfoot cohort. It was definitely a challenge, but it was worth it. I met some really great people, and learned a lot about developing as a professional. I really enjoyed working together with a team to complete our Capstone project, Dungeons and Dust Bunnies.  My favorite part of the project was collaborating with people from different backgrounds, and experiences. Someone always had a unique approach for a feature we wanted to implement, or a problem that needed solving. This is a great profession with an awesome community, and I’m really happy about being a part of it.
            </SArticle>
          </STextWrapper>
        </SEntry>
        <Entry>
          <TextWrapper>
            <Title>Family</Title>
            <AboutBody>
              <li>I&apos;m a husband and father of two</li>
              <li>We&apos;ve been all across the country, living in 4 states and moving 6 times in 15 1/2 years.</li>
            </AboutBody>
          </TextWrapper>
          <Photo src={familyPhoto} alt='Family photo'/>
        </Entry>
        <Entry>
          <TextWrapper>
            <Title>2007-2012: USS Carl Vinson(CVN70)</Title>
            <AboutBody>
              <li>Proactively conducted 100 critical repairs and system overhauls resulting in a savings in excess of
                $30,000.00
              </li>
              <li>Qualified Enlisted Surface Warfare Specialist</li>
            </AboutBody>
          </TextWrapper>
          <Photo src={photo1} alt="Entry photo"/>
        </Entry>
        <Entry>
          <TextWrapper>
            <Title>2012-2015: Recruit Training Command(RTC)</Title>
            <AboutBody>
              <li>Reviewed and corrected curriculum deficiencies, ensuring that the most up-to-date information was
                being provided to the Navy
              </li>
              <li>Provided high-risk training to 78,000 Naval recruits, with zero safety mishaps, and a passing rate of
                100%
              </li>
              <li>Qualified as a Master Training Specialist</li>
            </AboutBody>
          </TextWrapper>
          <Photo src={photo2} alt="Entry photo"/>
        </Entry>
        <Entry>
          <TextWrapper>
            <Title>2015-2020: USS Michael Monsoor(DDG1001)</Title>
            <AboutBody>
              <li>Essential in the creation of unique ZUMWALT damage control doctrine</li>
              <li>Delivered 300+ hours of dynamic damage control training and assessed 100+ casualty scenarios,
                resulting in a fully qualified crew
              </li>
            </AboutBody>
          </TextWrapper>
          <Photo src={photo3} alt="Entry photo"/>
        </Entry>
        <Entry>
          <TextWrapper>
            <Title>2020-2022: HSM-41 Seahawks</Title>
            <AboutBody>
              <li>Responsible for supervising 120 personnel in the maintenance and upkeep of all squadron working
                spaces, establishing a structured and safe environment
              </li>
              <li>Personnel onboarding manager and Leading Petty Officer. Implemented a comprehensive overhaul of
                unreliable standards and procedures, leading to an 80% reduction in administrative delinquencies.
              </li>
            </AboutBody>
          </TextWrapper>
          <Photo src={photo4} alt="Entry photo"/>
        </Entry>
      </Entries>
    </DefaultLayout>
  );
};

export default About;
