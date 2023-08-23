import styled from 'styled-components';
import useGitHub from '../hooks/useGitHub.jsx';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display:inline-block;
  max-width:fit-content;
  background:rgba(44,44,44,.2);
  border-radius:1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  row-gap: 10px;
  padding: 40px;
`;

const Span = styled.span`
  display: block;
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
          <h2>My GitHub Stats:</h2>
          <Span>{contributionsData.currentMonth} contributions this month</Span>
          <Span>{contributionsData.last3Months} contributions the last 3 months</Span>
          <Span>{contributionsData.last6Months} contributions the last 6 months</Span>
          <Span>{contributionsData.lastYear} contributions the last year</Span>
        </Container>
      ) : (
        <p>No contributions data available</p>
      )}
    </Wrapper>
  );
};

export default Contributions;

Contributions.propTypes = {
  username: PropTypes.string.isRequired
};