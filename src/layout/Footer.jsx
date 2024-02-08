import React from "react";
import styled from "styled-components";
import {Para} from "../components/Contact/ContactStyle";

const FooterP = styled(Para)`
  margin: 0.1rem 0;
  font-size: 0.5rem;
`;

const FooterArea = styled.footer`
  padding: 0.5rem 0;
  margin-top: 1rem;
  background: #000b26;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterArea>
      <FooterP>Repubilshed 2008.</FooterP>
      <FooterP>FIELD (필드, 전국 대학생 산업공학도 동아리)</FooterP>
      <FooterP>Copyrightⓒ2024.FIELD. All rights reserved.</FooterP>
      <FooterP>contact : iefieldcamp24@gmail.com</FooterP>
    </FooterArea>
  );
}
