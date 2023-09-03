import { useHover } from '../context/HoverContext';
import styled from '@emotion/styled';
import headshot from '../assets/Headshot.png';

const AvatarWrapper = styled.div`
	position:relative;
	max-height:100%;
	width: 250px;
	aspect-ratio: auto;
	background: none;
	filter: ${({ isHovered }) => (isHovered ? 'brightness(110%)' : 'none')};
	//transform: ${({ isHovered }) => (isHovered ? 'none' : 'translate(-20%, 0)')};
`;

const AvatarImage = styled.img`
	height: 100%;
	width: 100%;
	border-radius:  0 0 1em 1em;
`;

const Avatar = () => {
	const { $isHovered } = useHover();

	return (
		<>
			<AvatarWrapper isHovered={$isHovered}>
				<AvatarImage src={headshot} alt="Headshot" />
			</AvatarWrapper>
		</>
	);
};
export default Avatar;
