import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { HoverProvider } from '../context/HoverContext';

const PageWrapper = styled.div`
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const PageRow = styled.div`
	display: flex;
	flex: 1 0 0;
`;
const PageColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	row-gap: 40px;
	width: 100%;
	height: 100%;
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
			<PageWrapper>
				<GlowingEffect
					className={active ? 'active' : ''}
					style={{
						top: cursorPos.y,
						left: cursorPos.x
					}}
				/>
				<PageContainer>
					<PageRow>
						<PageColumn>
							<Header />
							<main>{children}</main>
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