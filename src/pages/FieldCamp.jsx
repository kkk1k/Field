import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/CampBackground.jpg";

const SectionHeaderContainer = styled.section`
  display: flex;
  position: relative;
  background-image: url(${backgroundImage});
  background-position: center;
  padding-top: 12rem;
  padding-bottom: 18rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-size: cover;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;

function FieldCamp() {
  return <SectionHeaderContainer />;
}

export default FieldCamp;
