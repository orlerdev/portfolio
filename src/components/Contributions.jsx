import styled from 'styled-components';
import useGitHub from '../hooks/useGitHub.jsx';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	display:flex;
	padding:40px;
`;

const Span = styled.span`
	display:block;
`;


const Contributions = ({username}) => {
	const { contributions, loading, error } = useGitHub(username);

	if (loading) {
		return <p>Loading Data...</p>
	}

	if (error) {
		return <p>Error fetching contributions data: {error.message}</p>
	}

	return (
			<Wrapper>
				{contributions ? (
						<div>
							<h2>My GitHub Stats: </h2>
							<Span>This month:</Span>
							<Span>Total Contributions: {contributions.totalContributions}</Span>
						</div>
				) : (
						<p>No contributions data available</p>
				)
				}
			</Wrapper>
	)
}

export default Contributions;

Contributions.propTypes = {
	username: PropTypes.string.isRequired
}