import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import DefaultLayout from '../layouts/DefaultLayout';
import Landing from '../components/Landing';
import TechStack from '../components/TechStack.jsx';
import Contributions from '../components/Contributions.jsx';

const username = import.meta.env.VITE_USERNAME;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;
  padding: 0 40px;
  min-height: 100vh;
  min-width:100vw;
  overflow-x: hidden;
  overflow-y: auto;


  ${media.medium`
		padding: 30px;
		row-gap: 30px;
	`}

  ${media.small`
		padding: 0 20px;
		row-gap: 20px;
	`}
`;

const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height:100vh;
  width:100vw;
  padding:40px;
  
  ${media.xs`
    height:auto;
    width:350px;
  `}
  
`;

const Home = () => {
  console.log(username);
  return (
    <DefaultLayout>
      <HomeWrapper>
        <LandingWrapper>
          <Landing />
        </LandingWrapper>
        <Contributions username={username} />
        <TechStack />
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
