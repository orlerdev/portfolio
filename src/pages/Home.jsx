import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';
import Landing from '../components/Landing';
import Avatar from '../components/Avatar';
import Contributions from '../components/Contributions.jsx';

const username = import.meta.env.VITE_USERNAME;

const HomeWrapper = styled.div``;

const Home = () => {
	return (
			<DefaultLayout>
				<HomeWrapper>
					<Landing/>
					<Avatar />
					<Contributions username={username}/>
				</HomeWrapper>
			</DefaultLayout>
	);
};

export default Home;
