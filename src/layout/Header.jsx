import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

import styled, {keyframes} from "styled-components";
import theme from "../theme";

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

const Middle = styled.span`
  display: ${({isOpen}) => (isOpen ? "none" : "block")};
  position: relative;
  width: 36px;
  height: 3px;
  background: ${theme.colors.white};
  cursor: pointer; // 클릭 가능하도록 커서 설정
`;

const Top = styled.span`
  bottom: 8px;
  display: block;
  width: 36px;
  height: 3px;
  background-color: ${theme.colors.white};
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transform-origin: left center;
  transform: ${({isOpen}) => (isOpen ? "rotate(45deg) translate(0px,-4.5px)" : "none")};
`;

const Bottom = styled.span`
  top: 8px;
  display: block;
  width: 36px;
  height: 3px;
  background-color: ${theme.colors.white};
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transform-origin: left center;
  transform: ${({isOpen}) => (isOpen ? "rotate(-45deg) translate(0px,4.5px)" : "none")};
`;

const TopInfo = styled.header`
  display: flex;
  padding: 0 2.5%;
  align-items: center;
  background-color: black;
  height: 4.5rem;
  position: sticky;
  justify-content: space-between;
  top: 0;
  z-index: 10;
  button {
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    font: inherit;
    outline: none;
  }
`;

const HomeLogo = styled.div`
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  img {
    height: 2.25rem;
  }
  p {
    margin-left: 0.5rem;
    font-size: 2rem;
  }
`;

const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const HeaderContent = styled.div`
  position: absolute;
  width: 100%;
  top: 4.5rem;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.black};

  animation: ${slideDownAnimation} 0.3s ease-in-out;
  padding: 2rem 0;
  z-index: 2;
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
      color: ${theme.colors.white};
      background: ${theme.colors.gray};
    }
  `}
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState();

  const MenuHandler = () => {
    setIsActive(!isActive);
  };

  const Homeredirect = () => {
    navigate("/");
    setIsActive(false);
  };

  const directionHandler = e => {
    navigate(`/${e.target.name}`);
    setIsActive(false);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <>
      <TopInfo>
        <HomeLogo onClick={Homeredirect}>
          <img src='FieldLogo.png' alt='필드로고' />
          <p>FIELD</p>
        </HomeLogo>
        <button
          type='button'
          onClick={handleClick}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          style={{padding: "12px 0"}}
        >
          <Top isOpen={isOpen} />
          <Middle isOpen={isOpen} />
          <Bottom isOpen={isOpen} />
        </button>
      </TopInfo>
      {isActive && (
        <>
          <HeaderBackground onClick={MenuHandler} />
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
      )}
    </>
  );
}
