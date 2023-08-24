import DefaultLayout from '../layouts/DefaultLayout.jsx';
import usePhoto from '../hooks/usePhoto.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  min-width: 100vw;
  min-height: 100vh;
  margin-top: 100px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Entry = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  justify-content: space-between;
  height: 50vh;
  width: 80vw;
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  row-gap:10px;
`;

const Title = styled.h2`
  flex: 1;
`;

const AboutBody = styled.ul`
  max-width:70%;
  list-style-type: none;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  
  li{
    padding-left: 1em;
    text-indent: -1em;
  }
  
  li::before{
    content: '- ';
  }
`;

const Photo = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
  object-fit: contain;
  object-position:center;
`;

const About = () => {
  const photo1 = usePhoto('navy2.png');
  const photo2 = usePhoto('navy9.png');
  const photo3 = usePhoto('navy6.png');
  const photo4 = usePhoto('navy4.png');
  return (
    <DefaultLayout>
      <Entries>
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
              <li>Served as Damage Control Warfare Manager, Damage Control Training Team Coordinator, Fire Marshal, Gas Free Engineer, Quality Assurance Officer, Education Services Officer, Command Managed Equal Opportunity Manager, and Motorcycle Safety Manager</li>
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
              <li>Conducted 100+ personnel performance evaluations, facilitating professional development of the crew.</li>
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