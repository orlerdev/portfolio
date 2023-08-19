import PropTypes from "prop-types";
import styled from 'styled-components';
// import usePhoto from '../hooks/usePhoto';
import { useHover } from '../context/HoverContext';
import headshot from '../assets/Headshot.png';

const AvatarWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 350px;
	width: auto;
	background: none;
	border-radius: 20%;
	filter: ${({ isHovered }) => (isHovered ? 'brightness(110%)' : 'none')};
	//transform: ${({ isHovered }) => (isHovered ? 'none' : 'translate(-20%, 0)')};
`;

const AvatarBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80%;
		backdrop-filter: blur(20px);
		border-radius: 2em 2em 0 0;
		background: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.3)
		);
	}
	z-index: -1;
`;

const AvatarImage = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20% 20% 0 0;
`;

const Avatar = () => {
	const { isHovered } = useHover();

	return (
		<>
			<AvatarWrapper isHovered={isHovered}>
				<AvatarBackground />
				{/*<AvatarImage src={usePhoto('HeadshotMask.png')} alt="Headshot" />*/}
				<AvatarImage src={headshot} alt="Headshot" />
			</AvatarWrapper>
		</>
	);
};
export default Avatar;

Avatar.propTypes = {
	isHovered: PropTypes.func
}