import styled from 'styled-components';

const LandingContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 70vw;
	height: 50vh;
	background: rgba(44, 44, 44, 0.2);

	h2 {
		font-size: 6em;
		margin: 0;
	}

	h3 {
		font-size: 4rem;
		margin: 0;
	}
`;

const Landing = () => {
	return (
		<LandingContainer>
			<h2>{`Hi! I'm Jared`}</h2>
			<h3>Software Developer and proud Veteran</h3>
		</LandingContainer>
	);
};

export default Landing;
