import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import Span from "../../styles/Span";
import H3 from "../../styles/H3";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  background: #ffbc13;
  align-items: center;
  padding: 1rem;
`;

function ReviewCard({question, answer, school, name}) {
  return (
    <Card>
      <H3 color='black' mb='0.5rem'>
        {question}
      </H3>
      <Span color='black' mb='0.3rem'>
        {answer}
      </Span>
      <Span color='black'>{school}</Span>
      <Span color='black'>{name}</Span>
    </Card>
  );
}

ReviewCard.propTypes = {
  question: Prototypes.string.isRequired,
  answer: Prototypes.string.isRequired,
  school: Prototypes.string.isRequired,
  name: Prototypes.string.isRequired,
};

export default ReviewCard;
