import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import theme from "../../theme";

const KeywordContainer = styled.span`
  width: 6rem;
  text-align: center;
  padding: 0.5rem 0.8rem;
  border-radius: 1.25rem;
  border: 3px solid white;
  background-color: ${props => (props.bgColor ? theme.colors[props.bgColor] : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  font-size: 1.1rem;
`;

function Keyword({bgColor, keyWord, ml, mb}) {
  return (
    <KeywordContainer bgColor={bgColor} ml={ml} mb={mb}>
      {keyWord}
    </KeywordContainer>
  );
}

Keyword.propTypes = {
  bgColor: Prototypes.string.isRequired,
  keyWord: Prototypes.string.isRequired,
  ml: Prototypes.string.isRequired,
  mb: Prototypes.string.isRequired,
};

export default Keyword;
