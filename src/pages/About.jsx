import DefaultLayout from '../layouts/DefaultLayout.jsx';
import usePhoto from '../hooks/usePhoto.jsx';
import styled from 'styled-components';

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 50%;
`;

const Title = styled.h2`
  flex: 1;
`;

const Photo = styled.img`
  flex: 1;
  width: 250px;
  height: 250px;
  object-fit: contain;
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
          <Title>&quot;2007-2012: USS Carl Vinson(CVN70)&quot;</Title>
          <Photo src={photo1} alt="Timeline entry" />
        </Entry>
        <Entry>
          <Title>&quot;2012-2015: Recruit Training Command(RTC)&quot;</Title>
          <Photo src={photo2} alt="Timeline entry" />
        </Entry>
        <Entry>
          <Title>&quot;2015-2020: USS Michael Monsoor(DDG1001)&quot;</Title>
          <Photo src={photo3} alt="Timeline entry" />
        </Entry>
        <Entry>
          <Title>&quot;2020-2022: HSM-41 Seahawks&quot;</Title>
          <Photo src={photo4} alt="Timeline entry" />
        </Entry>
      </Entries>
    </DefaultLayout>
  );
};

export default About;
