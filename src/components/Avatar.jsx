import styled from '@emotion/styled';
import { media } from '../styles/utils.js';
import headshot from '../assets/Headshot.png';

const AvatarWrapper = styled.div`
  position: relative;
  width: auto;
  height: 45vh;
  border-radius: 1.2rem;
  background: ${props => props.theme.colors.frosted};
  background-image: ${props => props.theme.colors.backgroundImage};
  background-blend-mode: overlay;
  box-shadow: ${props => props.theme.effects.boxShadow};
  overflow: hidden;

  ${media.small`
		max-width:100%;
		max-height:100%;
	`}
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: auto;
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
