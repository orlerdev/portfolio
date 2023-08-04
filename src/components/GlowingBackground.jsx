// import { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const GlowingEffect = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 250px;
// 	height: 250px;
// 	pointer-events: none;
// 	background: radial-gradient(
// 		circle,
// 		rgba(255, 255, 255, 0.8) 40%,
// 		transparent 70%
// 	);
// 	transform: translate(-50%, -50%);
// 	opacity: 0;

// 	&.active {
// 		animation: glow 0.6s ease-out;
// 	}

// 	@keyframes glow {
// 		0% {
// 			opacity: 0.8;
// 			transform: scale(1);
// 		}
// 		100% {
// 			opacity: 0;
// 			transform: scale(1.5);
// 		}
// 	}
// `;

// const GlowingBackground = () => {
// 	const [active, setActive] = useState(false);
// 	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

// 	useEffect(() => {
// 		const handleMouseMove = e => {
// 			setCursorPos({ x: e.clientX, y: e.clientY });
// 			setActive(true);
// 			const timeout = setTimeout(() => {
// 				setActive(false);
// 			}, 600);

// 			return () => clearTimeout(timeout);
// 		};

// 		document.addEventListener('mousemove', handleMouseMove);

// 		return () => {
// 			document.removeEventListener('mousemove', handleMouseMove);
// 		};
// 	}, []);

// 	return active && <GlowingEffect className="active" />;
// };

// export default GlowingBackground;
