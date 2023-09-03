import styled from '@emotion/styled';
import useGitHub from '../hooks/useGitHub.jsx';
import Avatar from './Avatar.jsx';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: ${props => props.theme.colors.lightTheme.frosted};
  background-image: ${props => props.theme.colors.lightTheme.backgroundImage};
  background-blend-mode: overlay;
  //box-shadow: ${props => props.theme.colors.lightTheme.secondary} inset 0 0 6px 3px;
  box-shadow: ${props => props.theme.colors.lightTheme.boxShadow};
  backdrop-filter: blur(20px);
  border-radius:1em;
  padding-left: 20px;
  color: ${props => props.theme.colors.lightTheme.altText};
  width: 70vw;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  row-gap: 10px;
`;

const Span = styled.span`
  display: block;
  font-size: 1.5rem;
`;

const Contributions = ({ username }) => {
  const { contributionsData, loading, error } = useGitHub(username);

  if (loading) {
    return <p>Loading Data...</p>;
  }

  if (error) {
    return <p>Error fetching contributions data: {error.message}</p>;
  }

 return (
    <Wrapper>
      {contributionsData ? (
        <Container>
          <h2>GitHub Stats:</h2>
          <Span>This Month: <strong>{contributionsData.currentMonth}</strong></Span>
          <Span>The Past 3 Months: <strong>{contributionsData.last3Months}</strong></Span>
          <Span>The Past 6 Months: <strong>{contributionsData.last6Months}</strong></Span>
          <Span>The Past Year: <strong>{contributionsData.lastYear}</strong></Span>
        </Container>
      ) : (
        <p>No contributions data available</p>
      )}
      <Avatar />
    </Wrapper>
  );
};

export default Contributions;

Contributions.propTypes = {
  username: PropTypes.string.isRequired
};