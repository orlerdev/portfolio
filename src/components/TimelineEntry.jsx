import PropTypes from "prop-types";
import styled from "styled-components";

const Entry = styled.div`
  display: flex;
  flex-direction:column;
  align-content: center;
  justify-content: space-between;
  height: 30%;
  width: 30%;
  text-align: center;
`;
const Title = styled.h2``;
const Photo = styled.img`
  width: 250px;
  height: 250px;
`;
const Wrapper = styled.div``;

const TimelineEntry = ({ title, photo }) => {
  return (
    <Entry>
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
      <Wrapper>
        <Photo src={photo} alt="Timeline photo" />
      </Wrapper>
    </Entry>
  );

};

export default TimelineEntry;

TimelineEntry.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.node.isRequired
};