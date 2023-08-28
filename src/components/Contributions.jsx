import styled from 'styled-components';
import useGitHub from '../hooks/useGitHub.jsx';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display:inline-block;
  background:rgba(44,44,44,.2);
  border-radius:1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  row-gap: 10px;
  padding: 2rem;
`;

const Span = styled.span`
  display: block;
  font-size: 1rem;
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
          <h2>My GitHub Contributions:</h2>
          <Span>This Month: <strong>{contributionsData.currentMonth}</strong></Span>
          <Span>The Past 3 Months: <strong>{contributionsData.last3Months}</strong></Span>
          <Span>The Past 6 Months: <strong>{contributionsData.last6Months}</strong></Span>
          <Span>The Past Year: <strong>{contributionsData.lastYear}</strong></Span>
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