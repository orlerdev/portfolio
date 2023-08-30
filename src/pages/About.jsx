import DefaultLayout from '../layouts/DefaultLayout.jsx';
import usePhoto from '../hooks/usePhoto.jsx';
import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import PropTypes from 'prop-types';

const Entries = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:40px;
`;

const Entry = styled.div`
  display:flex;
  justify-content:space-between;
  background: rgba(44,44,44,.2);
  padding:10px 0 10px 10px;
  border-radius:1em;
  
  
  ${media.small`
    flex-direction:column;
    row-gap:40px;
    align-items:center;
  `}
  
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  row-gap:20px;
  max-width:50%;
  
  ${media.small`
    max-width:100%;
  `}
`;

const Title = styled.h2`
  text-align: center;
`;

const AboutBody = styled.ul`
  
  
  li{
    padding-left: 1.5em;
    text-indent: -1em;
  }
  
  li::before{
    content: '- ';
  }
`;

const Photo = styled.img`
  max-width: 30%;
  max-height:100%;
  aspect-ratio:auto;
  object-fit: contain;
  border-radius:1em;
  
  ${media.small`
    max-width:100%;
  `}
`;

const About = () => {
  const photo1 = usePhoto('navy2.png');
  const photo2 = usePhoto('navy9.png');
  const photo3 = usePhoto('navy6.png');
  const photo4 = usePhoto('navy4.png');
  const familyPhoto = usePhoto('familyPhoto.png')
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
          <Title>&quot;2007-2012: USS Carl Vinson(CVN70)&quot;</Title>
            <AboutBody>
              <li>Proactively conducted 100 critical repairs and system overhauls resulting in a savings in excess of $30,000.00</li>
              <li>Qualified Enlisted Surface Warfare Specialist</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo1} alt="Entry photo" />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>&quot;2012-2015: Recruit Training Command(RTC)&quot;</Title>
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
          <Title>&quot;2015-2020: USS Michael Monsoor(DDG1001)&quot;</Title>
            <AboutBody>
              <li>Essential in the creation of unique ZUMWALT damage control doctrine</li>
              <li>Delivered 300+ hours of dynamic damage control training and assessed 100+ casualty scenarios, resulting in a fully qualified crew</li>
            </AboutBody>
            </TextWrapper>
          <Photo src={photo3} alt="Entry photo" />
        </Entry>
        <Entry>
          <TextWrapper>
          <Title>&quot;2020-2022: HSM-41 Seahawks&quot;</Title>
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

About.propTypes = {
  imageUrl: PropTypes.string.isRequired
};