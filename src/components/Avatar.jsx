import styled from 'styled-components';

const AvatarWrapper = styled.div`
	height: 400px;
	width: 350px;
	background: none;
	border-radius: 20%;
`;

const AvatarBackground = styled.div`
	height: 100%;
	width: 100%;
	background: linear-gradient(
		rgba(255, 255, 255, 0.3),
		rgba(255, 255, 255, 0.3)
	);
	backdrop-filter: blur(20px);
`;

const AvatarImage = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20%;
`;

const Avatar = () => {
	return (
		<>
			<AvatarWrapper>
				<AvatarBackground>
					<AvatarImage src="#" alt="Headshot" />
				</AvatarBackground>
			</AvatarWrapper>
		</>
	);
};
export default Avatar;
