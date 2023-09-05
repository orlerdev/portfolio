import styled from '@emotion/styled';
import {media} from '../styles/utils.js';
import useGitHub from '../hooks/useGitHub.jsx';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self:center;
  background: ${props => props.theme.colors.frosted};
  background-image: ${props => props.theme.colors.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.colors.secondary} inset 0 0 6px 3px;
  backdrop-filter: blur(20px);
  border-radius: 1em;
  padding: 2rem;
  color: ${props => props.theme.colors.altText};
  width: 70vw;
  font-size: 1.5rem;
  
  ${media.small`
  padding:20px;
    width:500px;
  `}
  
  ${media.xs`
    width:350px;
    height:auto;
  `}

`;

const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width:100%;
  
  ${media.small`
    max-width:90%;
  `}
  
  h2{
    align-self:center;
    font-size:2.5rem;
    
    ${media.small`
      font-size:1.5rem;
    `}
  } 
  
  h3{
    font-size:1.2rem;
    
    ${media.small`
      font-size:1.5rem;
    `}
    
  }
  
`;

const Span = styled.span`
  display: block;
  font-size: 1.5rem;
  
  ${media.xs`
    font-size: 1rem;
  `}
  
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
        <ContributionsContainer>
          <h2>GitHub Stats</h2>
          <h3>Contributions:</h3>
          <Span>This Month: <strong>{contributionsData.currentMonth}</strong></Span>
          <Span>The Past 3 Months: <strong>{contributionsData.last3Months}</strong></Span>
          <Span>The Past 6 Months: <strong>{contributionsData.last6Months}</strong></Span>
          <Span>The Past Year: <strong>{contributionsData.lastYear}</strong></Span>
        </ContributionsContainer>
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