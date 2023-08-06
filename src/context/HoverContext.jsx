import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<HoverContext.Provider value={{ isHovered, setIsHovered }}>
			{children}
		</HoverContext.Provider>
	);
};

export const useHover = () => useContext(HoverContext);

HoverProvider.propTypes = {
	children: PropTypes.node.isRequired
};
