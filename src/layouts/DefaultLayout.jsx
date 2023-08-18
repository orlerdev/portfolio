import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { HoverProvider } from '../context/HoverContext';

const PageWrapper = styled.div`
	min-height:100vh;
  display: flex;
	flex-direction: column;
	overflow-x: hidden;
`;

const GlowingEffect = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 80%;
	height: 80%;
	pointer-events: none;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.8) 1%,
		transparent 40%
	);
	transform: translate(-50%, -50%);
	opacity: 0;

	&.active {
		animation: glow 10s ease-out infinite;
	}

	@keyframes glow {
		0% {
			opacity: 0.1;
			/* transform: scale(1); */
		}
		100% {
			opacity: 0.1;
			/* transform: scale(1.1); */
		}
	}
`;

const PageContainer = styled.div`
	display:flex;
  flex-direction:column;
  align-items:center;
`;
const PageRow = styled.div`
	display: flex;
	width:100%;
  flex:1 0 0;
`;
const PageColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex:1 0 0;
	align-items: center;
	flex-wrap:wrap;
	margin-top:100px;
`;

const DefaultLayout = ({ children }) => {
	const [active, setActive] = useState(false);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorPos({ x: e.clientX, y: e.clientY });
			setActive(true);
			// const timeout = setTimeout(() => {
			// 	setActive(false);
			// }, 6000);

			// return () => clearTimeout(timeout);
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<HoverProvider>
			<PageWrapper className='pagewrapper'>
				<GlowingEffect
					className={active ? 'active' : ''}
					style={{
						top: cursorPos.y,
						left: cursorPos.x
					}}
				/>
				<PageContainer className='pagecontainer'>
					<PageRow className='pagerow'>
						<PageColumn className='pagecolumn'>
							<Header />
							{children}
							<Footer />
						</PageColumn>
					</PageRow>
				</PageContainer>
			</PageWrapper>
		</HoverProvider>
	);
};

export default DefaultLayout;

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired
};
