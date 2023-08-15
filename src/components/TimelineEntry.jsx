import PropTypes from "prop-types";
import styled from 'styled-components';

const Entry = styled.div``;
const Title = styled.h2``;
const Body = styled.p``;


const TimelineEntry = ({title}) => {
  return (
    <Entry>
      <Title>{title}</Title>
      <Body></Body>
    </Entry>
  )

}

export default TimelineEntry;

TimelineEntry.propTypes = {
  title: PropTypes.string.isRequired
}