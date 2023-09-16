import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import headshot from '../assets/Headshot.png';

const AvatarWrapper = styled.div`
	position: relative;
	width: 500px;
	height: 600px;
	border-radius: 1.2rem;
	background: ${(props) => props.theme.colors.frosted};
	background-image: ${(props) => props.theme.colors.backgroundImage};
	background-blend-mode: overlay;
	box-shadow: ${(props) => props.theme.effects.darkBoxShadow};
	overflow: hidden;

		${media.small`
		height:500px;
		width:400px;
	`}
	
	${media.xs`
		height:450px;
		width:350px;
	`}
	
`;

const AvatarImage = styled.img`
	height:600px;
	width:500px;
	
	${media.small`
		height:500px;
		width:400px;
	`}
	
	${media.xs`
		height:450px;
		width:350px;
	`}
`;

const Avatar = () => {
	return (
		<>
			<AvatarWrapper>
				<AvatarImage src={headshot} alt='Headshot' />
			</AvatarWrapper>
		</>
	);
};
export default Avatar;
