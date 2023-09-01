import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import DefaultLayout from '../layouts/DefaultLayout';
import Landing from '../components/Landing';
import TechStack from '../components/TechStack.jsx';
import Contributions from '../components/Contributions.jsx';

const username = import.meta.env.VITE_USERNAME;

const HomeWrapper = styled.div`
	display:flex;
	flex-direction:column;
	//justify-content: center;
	align-items:center;
	row-gap:40px;
	padding: 0 40px;
	min-height:100vh;
	overflow-x:hidden;
	overflow-y:auto;
	
	${media.xl`
		align-items:unset;
	`}
	
	${media.medium`
		padding: 30px;
		row-gap: 30px;
	`}
	
	${media.small`
		padding: 0 20px;
		row-gap: 20px;
	`}
	
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
