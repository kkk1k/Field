import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import H3 from "../../styles/H3";
import Span from "../../styles/Span";

const Template = styled.div`
  display: flex;
  flex-direction: column;
`;

function Card({name, intro, description}) {
  return (
    <Template>
      <H3 color='black'>{name}</H3>
      <Span color='black'>{intro}</Span>
      <Span color='black'>{description}</Span>
    </Template>
  );
}

Card.propTypes = {
  name: Prototypes.string.isRequired,
  intro: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
};
export default Card;
