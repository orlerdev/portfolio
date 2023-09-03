import styled from '@emotion/styled';
import headshot from '../assets/Headshot.png';

const AvatarWrapper = styled.div`
	position:relative;
	width: auto;
	height: 50vh;
	border-radius: 50%;
	background: ${props => props.theme.colors.frosted};
	border: .5rem solid ${props => props.theme.colors.primary};
	overflow:hidden;
`;

const AvatarImage = styled.img`
	height:100%;
	width:100%;
	aspect-ratio:auto;
`;

const Avatar = () => {
	return (
		<>
			<AvatarWrapper>
				<AvatarImage src={headshot} alt="Headshot" />
			</AvatarWrapper>
		</>
	);
};
export default Avatar;
