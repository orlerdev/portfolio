import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolling, setIsScrolling }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrolling = () => useContext(ScrollContext);

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired
};