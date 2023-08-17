import PropTypes from "prop-types";
import styled from "styled-components";

const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 50%;
`;
const Title = styled.h2``;
const Photo = styled.img`
  width: 250px;
  height: 250px;
`;
const Wrapper = styled.div`
  flex: 1;
`;

const TimelineEntry = ({ title, photo }) => {
  return (
    <Entry className='entry'>
      <Wrapper className='wrapper'>
        <Title className='title'>{title}</Title>
      </Wrapper>
      <Wrapper className='wrapper'>
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