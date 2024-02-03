import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Burgur from "./Burgur";
import MenuContents from "./MenuContents";

const TopInfo = styled.header`
  display: flex;
  padding: 0 2.5%;
  align-items: center;
  background-color: #000b26;
  height: 4.5rem;
  position: sticky;
  justify-content: space-between;
  top: 0;
  z-index: 20;
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const Homeredirect = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
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
          <Burgur open={isOpen} />
        </button>
      </TopInfo>

      {isOpen && <MenuContents onOpen={handleClick} />}
    </>
  );
}
