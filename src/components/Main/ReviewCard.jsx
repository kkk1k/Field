import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import Span from "../../styles/Span";
import H3 from "../../styles/H3";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto
  width: 80%;
  background: #ffbc13;
  padding: 1rem;
  border-radius: 10px;
`;

function ReviewCard({question, answer, school, name}) {
  return (
    <Card>
      <H3 color='black' mb='1rem'>
        {question}
      </H3>
      <Span color='black' mb='0.5rem'>
        {answer}
      </Span>

      <Span color='black' align='center'>
        {school}
      </Span>
      <Span color='black' align='center'>
        {name}
      </Span>
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
