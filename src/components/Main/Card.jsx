import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import H3 from "../../styles/H3";
import Span from "../../styles/Span";
import redCircle from "../../assets/redCircle.png";
import BackgroundImage from "../../styles/BackgroundImage";

const Template = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
function Card({name, description, hashTag}) {
  return (
    <Template>
      <H3 align='justify'>{name}</H3>
      <Span>{description}</Span>
      <SecondContainer>
        <BackgroundImage src={redCircle} width='32%' height='100px' size='100%'>
          <Span color='black'>소통능력</Span>
        </BackgroundImage>
        <BackgroundImage src={redCircle} width='32%' height='100px' size='100%'>
          <Span color='black'>소통능력</Span>
        </BackgroundImage>
        <BackgroundImage src={redCircle} width='32%' height='100px' size='100%'>
          <Span color='black'>소통능력</Span>
        </BackgroundImage>
      </SecondContainer>

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
};
export default Card;
