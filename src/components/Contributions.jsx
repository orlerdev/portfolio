// import styled from 'styled-components';
import useGitHub from '../hooks/useGitHub.jsx';
import PropTypes from 'prop-types';

const Contributions = ({username}) => {
	const { contributions, loading, error } = useGitHub(username);

	if (loading) {
		return <p>Loading Data...</p>
	}

	if (error) {
		return <p>Error fetching contributions data: {error.message}</p>
	}

	return (
			<div>
				{contributions ? (
						<div>
							<h2>{username}&apos;s GitHub Contributions</h2>
							<p>Total Contributions: {contributions.totalContributions}</p>
						</div>
				) : (
						<p>No contributions data available</p>
				)
				}
			</div>
	)
}

export default Contributions;

Contributions.propTypes = {
	username: PropTypes.string.isRequired
}