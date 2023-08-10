import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 0 20px;
	background: transparent;
	border: none;
	outline: none;
`;

const Menu = styled.ul``;

const Item = styled(Link)``;

const Navbar = () => {
	<Nav>
		<Menu>
			<Item to='/'>Home</Item>
			<Item to='/about'>About Me</Item>
			<Item to='/prof'>Professional History</Item>
		</Menu>
	</Nav>;
};

export default Navbar;
