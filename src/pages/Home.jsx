import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';
import Landing from '../components/Landing';
import TechStack from '../components/TechStack.jsx';
import Contributions from '../components/Contributions.jsx';

const username = import.meta.env.VITE_USERNAME;

const HomeWrapper = styled.div`
	display:flex;
	flex-direction:column;
	justify-content: center;
	row-gap:40px;
	padding: 0 40px;
	min-height:100vh;
	overflow-x:hidden;
	overflow-y:auto;
`;

const Home = () => {
	return (
			<DefaultLayout>
				<HomeWrapper>
					<Landing/>
					<Contributions username={username}/>
					<TechStack />
				</HomeWrapper>
			</DefaultLayout>
	);
};

export default Home;
