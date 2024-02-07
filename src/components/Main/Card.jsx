import Prototypes from "prop-types";
import React from "react";
import styled from "styled-components";
import H3 from "../../styles/H3";
import Span from "../../styles/Span";
import Keyword from "./Keyword";

const Template = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Card({name, description, hashTag, keyWord1, keyWord2, keyWord3}) {
  return (
    <Template>
      <H3 align='justify'>{name}</H3>
      <Span mb='0.5rem'>{description}</Span>
      <Keyword bgColor='blue' keyWord={keyWord1} ml='55%' mb='1rem' />
      <Keyword bgColor='red' keyWord={keyWord2} ml='10%' mb='1rem' />
      <Keyword bgColor='yellow' keyWord={keyWord3} ml='40%' />
      {hashTag.map(item => (
        <Span size='1.1rem' color='yellow'>
          {item}
        </Span>
      ))}
    </Template>
  );
}

Card.propTypes = {
  name: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
  hashTag: Prototypes.string.isRequired,
  keyWord1: Prototypes.string.isRequired,
  keyWord2: Prototypes.string.isRequired,
  keyWord3: Prototypes.string.isRequired,
};
export default Card;
