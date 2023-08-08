import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: flex-end;
	padding: 0 20px;
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 2em;
	column-gap: 20px;
	color: #fff;
`;

const Item = styled.li``;

const Footer = () => {
	return (
		<FooterWrapper>
			<Menu>
				<Item>
					<a href='#'>Home</a>
				</Item>
				<Item>
					<a
						href='https://www.linkedin.com/in/orlerjared'
						target='_blank'
						rel='noreferrer'>
						Linked
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</Item>
				<Item>
					<a
						href='https://www.github.com/orlerdev'
						target='_blank'
						rel='noreferrer'>
						GitHub
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</Item>
			</Menu>
		</FooterWrapper>
	);
};

export default Footer;
