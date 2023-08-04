import styled from 'styled-components';
import usePhoto from '../hooks/usePhoto';

const AvatarWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 350px;
	width: auto;
	background: none;
	border-radius: 20%;
	transition: all ease-out 0.3s;

	&:hover {
		transform: scale(1.1);
	}
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
		height: 73%;
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
	return (
		<>
			<AvatarWrapper>
				<AvatarBackground />
				<AvatarImage src={usePhoto('HeadshotMask.png')} alt="Headshot" />
			</AvatarWrapper>
		</>
	);
};
export default Avatar;
