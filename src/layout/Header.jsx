import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

import styled from "styled-components";
import theme from "../theme";

const TopInfo = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 4.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  position: stiky;
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
  border-top: 1px solid gray;
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
  };

  return (
    <TopInfo>
      <HomeLogo onClick={Homeredirect}>
        <img src='FieldLogo.png' alt='필드로고' />
        <p>FIELD</p>
      </HomeLogo>
      <button
        type='button'
        onClick={MenuHandler}
        style={{background: "none", border: "none", paddingRight: "1rem"}}
      >
        <img src='menu-bar.png' alt='필드로고' width={40} height={40} />
      </button>
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
    </TopInfo>
  );
}
