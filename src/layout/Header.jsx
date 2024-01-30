import React from "react";
import styled from "styled-components";

const TopInfo = styled.div`
  background-color: black;
  height: 4rem;
  position: sticky;
  top: 0;
`;

export default function Header() {
  return <TopInfo>Header</TopInfo>;
}
