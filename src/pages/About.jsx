import styled from "styled-components";
import usePhoto from "../hooks/usePhoto.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import TimelineEntry from "../components/TimelineEntry.jsx";

const Entries = styled.div`
  display:flex;
  flex-direction:column;
  align-content: center;
  row-gap:20px;
  width:100%;
  height:100%;
`;

const About = () => {
  const photo1 = usePhoto("navy2.png");
  const photo2 = usePhoto("navy9.png");
  const photo3 = usePhoto("navy6.png");
  const photo4 = usePhoto("navy4.png");
  return (
    <DefaultLayout>
      <Entries>
        <TimelineEntry title={"2007-2012"} photo={photo1} />
        <TimelineEntry title={"2012-2015"} photo={photo2} />
        <TimelineEntry title={"2015-2020"} photo={photo3} />
        <TimelineEntry title={"2020-2022"} photo={photo4} />
      </Entries>
    </DefaultLayout>
  );
};

export default About;
