import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Burgur from "./Burgur";
import MenuContents from "./MenuContents";
import Image from "../../styles/Image";
import {Para} from "../../components/Contact/ContactStyle";

const TopInfo = styled.header`
  display: flex;
  padding: 0 10%;
  align-items: center;
  background-color: #000b26;
  height: 4.5rem;
  padding-left: 10%;
  padding-right: 10%;
  position: sticky;
  justify-content: space-between;
  top: 0;
  z-index: 20;
`;

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: "0.75rem 0"
  margin: 0;
  font: inherit;
  outline: none;
`;

const HomeLogo = styled.div`
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

const A = styled.div`
  position: fixed;
  bottom: 10rem;
  padding: 1rem 0.2rem;
  background: transparent;
  right: 1rem;
  z-index: 100;
  border-radius: 2rem;
  display: flex;
  border: 2px solid black;
  flex-direction: column;
`;

const Imag = styled.img`
  padding: 0.3rem;
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
          <Image src='FieldLogo.png' alt='필드로고' />
          <Para>FIELD</Para>
        </HomeLogo>
        <Button
          type='button'
          onClick={handleClick}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <Burgur open={isOpen} />
        </Button>
      </TopInfo>
      <A>
        <Imag src='YoutubeLogo.png' alt='shit' width={40} height={40} />
        <Imag src='InstagramLogo.png' alt='shit' width={36} height={40} />
        <Imag src='KakaoTalkLogo.png' alt='shit' width={40} height={40} />
      </A>

      {isOpen && <MenuContents onOpen={handleClick} />}
    </>
  );
}
