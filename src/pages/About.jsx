import styled from "styled-components";
import usePhoto from "../hooks/usePhoto.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import TimelineEntry from "../components/TimelineEntry.jsx";

const Entries = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  row-gap:20px;
  width:75%;
  height:100vh;
`;

const About = () => {
  const photo1 = usePhoto("navy2.png");
  const photo2 = usePhoto("navy9.png");
  const photo3 = usePhoto("navy6.png");
  const photo4 = usePhoto("navy4.png");
  return (
    <DefaultLayout>
      <Entries className='entries'>
        <TimelineEntry title={"2007-2012: USS Carl Vinson(CVN70)"} photo={photo1} />
        <TimelineEntry title={"2012-2015: Recruit Training Command(RTC)"} photo={photo2} />
        <TimelineEntry title={"2015-2020: USS Michael Monsoor(DDG1001)"} photo={photo3} />
        <TimelineEntry title={"2020-2022: HSM-41 Seahawks"} photo={photo4} />
      </Entries>
    </DefaultLayout>
  );
};

export default About;
