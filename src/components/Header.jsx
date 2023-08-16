import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	display:flex;
	align-items:center;
	font-size: 2em;
	width: 100%;
	height: 80px;
	padding: 10px 20px 0 20px;
	background: transparent;
	backdrop-filter: blur(20px);
	border: none;
	outline: none;
`;

const Menu = styled.ul`
	display:flex;
	column-gap:20px;
`;

const Item = styled(NavLink)`
	padding:5px 10px;
	transition: all ease-out .3s;
	
	&:hover{
		background:rgba(255,255,255,.2);
		border-radius: .2em;
		font-weight: bold;
	}
`;

const Navbar = () => {
	return (
	<Nav>
		<Menu>
			<Item to='/'>Home</Item>
			<Item to='/about'>About Me</Item>
		</Menu>
	</Nav>
	)
};

export default Navbar;
