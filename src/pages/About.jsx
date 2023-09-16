import DefaultLayout from '../layouts/DefaultLayout.jsx';
import usePhoto from '../hooks/usePhoto.jsx';
import styled from '@emotion/styled';
import { media } from '../styles/utils.js';

const Entries = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:40px;
  margin-top:90px;
`;

const Entry = styled.div`
  display:flex;
  justify-content:space-between;
  width: 70vw;
  background: ${props => props.theme.colors.frosted};
  background-image: ${props => props.theme.colors.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.effects.darkBoxShadow};
  backdrop-filter: blur(20px);
  border-radius:1em;
  padding-left:20px;
  color: ${props => props.theme.colors.altText};
  
  ${media.small`
    flex-direction:column;
    row-gap:40px;
    align-items:center;
    width:100%;
    padding:unset;
  `}
  
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  row-gap:40px;
  width:60%;
  padding:20px;
  
  ${media.small`
    width:100%;
  `}
`;

const Title = styled.h2`
  align-self:center;
  text-align: center;
  font-size:4rem;
  font-weight:700;
  border-bottom: 1px solid;
  width:fit-content;
  
  ${media.xl`
    font-size:2.5rem;
  `}
`;

const AboutBody = styled.ul`
  font-size: 2rem;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  
  ${media.xl`
    font-size:1.2rem;
  `}
  
  li{
    padding-left: 1.5em;
    text-indent: -1em;
  }
  
  li::before{
    content: '- ';
  }
  
  
`;

const Photo = styled.img`
  max-width: 40%;
  max-height:100%;
  width:40%;
  height:auto;
  aspect-ratio:auto;
  border-radius:1em;
  
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
        <Entry>
          <TextWrapper>
            <Title>Family</Title>
            <AboutBody>
              <li>I&apos;m a husband and father of two</li>
              <li>We&apos;ve moved 6 times in the past 15 1/2 years, and we&apos;ve lived in 5 different states</li>
            </AboutBody>
          </TextWrapper>
            <Photo src={familyPhoto} alt='Family photo' />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>2007-2012: USS Carl Vinson(CVN70)</Title>
            <AboutBody>
              <li>Proactively conducted 100 critical repairs and system overhauls resulting in a savings in excess of $30,000.00</li>
              <li>Qualified Enlisted Surface Warfare Specialist</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo1} alt="Entry photo" />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>2012-2015: Recruit Training Command(RTC)</Title>
            <AboutBody>
              <li>Reviewed and corrected curriculum deficiencies, ensuring that the most up-to-date information was being provided to the Navy</li>
              <li>Provided high-risk training to 78,000 Naval recruits, with zero safety mishaps, and a passing rate of 100%</li>
              <li>Qualified as a Master Training Specialist</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo2} alt="Entry photo" />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>2015-2020: USS Michael Monsoor(DDG1001)</Title>
            <AboutBody>
              <li>Essential in the creation of unique ZUMWALT damage control doctrine</li>
              <li>Delivered 300+ hours of dynamic damage control training and assessed 100+ casualty scenarios, resulting in a fully qualified crew</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo3} alt="Entry photo" />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>2020-2022: HSM-41 Seahawks</Title>
            <AboutBody>
              <li>Responsible for supervising 120 personnel in the maintenance and upkeep of all squadron working spaces, establishing a structured and safe environment</li>
              <li>Personnel onboarding manager and Leading Petty Officer. Implemented a comprehensive overhaul of unreliable standards and procedures, leading to an 80% reduction in administrative delinquencies.</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo4} alt="Entry photo" />
        </Entry>
      </Entries>
    </DefaultLayout>
  );
};

export default About;
