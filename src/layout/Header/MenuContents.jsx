import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import theme from "../../theme";

const slideDownAnimation = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }

  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
`;

const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeaderContent = styled.div`
  position: fixed;
  width: 100%;
  top: 4.5rem;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.black};

  animation: ${slideDownAnimation} 0.3s ease-in-out;
  padding: 1rem 0;
  z-index: 10;
  button {
    appearance: none;
    border: none;
    font-size: 2rem;
    background: ${theme.colors.black};
    text-align: left;
    padding: 0.8rem 1rem;
    color: ${theme.colors.gray};
  }
  button:hover {
    cursor: pointer;
  }
  ${props =>
    props.activeButton &&
    `
    button[name="${props.activeButton}"] {
      color: ${theme.colors.yellow};
      background: #091A45;
    }
  `}
`;

export default function MenuContents({onOpen}) {
  const location = useLocation();
  const navigate = useNavigate();

  const directionHandler = e => {
    navigate(`/${e.target.name}`);
    onOpen();
  };

  const backgroundClickHandler = () => {
    onOpen();
  };

  return (
    <>
      <HeaderBackground onClick={backgroundClickHandler} />
      <HeaderContent activeButton={location.pathname.replace("/", "")}>
        <button type='button' name='about' onClick={directionHandler}>
          About FIELD
        </button>
        <button type='button' name='camp' onClick={directionHandler}>
          FIELD CAMP
        </button>
        <button type='button' name='news' onClick={directionHandler}>
          NEWS
        </button>
        <button type='button' name='sns' onClick={directionHandler}>
          SNS
        </button>
        <button type='button' name='contact' onClick={directionHandler}>
          CONTACT
        </button>
      </HeaderContent>
    </>
  );
}

MenuContents.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
