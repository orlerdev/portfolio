import PropTypes from "prop-types";
import styled from 'styled-components';

const Entry = styled.div`
  display:flex;
  align-content:center;
  justify-content:center;
  height: 300px;
  width: 600px;
`;
const Title = styled.h2``;
const Photo = styled.img`
  width: 250px;
  height: 250px;
`;


const TimelineEntry = ({title, photo}) => {
  return (
    <Entry>
      <Title>{title}</Title>
      <Photo src={photo} alt="Timeline photo"/>
    </Entry>
  )

}

export default TimelineEntry;

TimelineEntry.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
}