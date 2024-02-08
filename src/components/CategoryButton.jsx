import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../theme";

const Button = styled.button`
  background-color: transparent;
  color: white;
  margin: 0rem;
  cursor: pointer;
  width: 5.5rem;
  height: 2.5rem;
  border-radius: 1.875rem;
  border: solid 1.5px;
  font-size: 1rem;

  ${props =>
    props.isActive &&
    `
    background-color: ${theme.colors.blue};
    color: #fff;
  `}
`;

function CategoryButton({label, onClick, isActive}) {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {label}
    </Button>
  );
}

export default CategoryButton;

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired, // label은 문자열이며 필수입니다.
  onClick: PropTypes.func.isRequired, // onClick은 함수 타입입니다. 필수는 아닙니다.
  isActive: PropTypes.bool, // isActive는 불리언 타입입니다. 필수는 아닙니다.
};

CategoryButton.defaultProps = {
  isActive: false,
};
