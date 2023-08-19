import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  width: 50%;
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(400%")};
  transition: transform .4s ease;

  &:nth-of-type(even) {
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(-400%)")};
  }

`;
const Title = styled.h2``;
const Photo = styled.img`
  width: 250px;
  height: 250px;
`;
const Wrapper = styled.div`
  flex: 1;
`;

const TimelineEntry = ({ title, photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const showEntry = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const entryTop = boxRef.current.getBoundingClientRect().top;

      if (entryTop < triggerBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", showEntry);
    showEntry();

    return () => {
      window.removeEventListener("scroll", showEntry);
    };

  }, []);

  return (
    <Entry $isVisible={isVisible} ref={boxRef}>
      <Wrapper className="wrapper">
        <Title className="title">{title}</Title>
      </Wrapper>
      <Wrapper className="wrapper">
        <Photo src={photo} alt="Timeline photo" />
      </Wrapper>
    </Entry>
  );

};

export default TimelineEntry;

TimelineEntry.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};