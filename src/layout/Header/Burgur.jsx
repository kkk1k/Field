import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";

const Middle = styled.span`
  display: ${({open}) => (open ? "none" : "block")};
  position: relative;
  width: 36px;
  height: 3px;
  background: ${theme.colors.white};
  cursor: pointer; // 클릭 가능하도록 커서 설정
`;

const Top = styled.span`
  bottom: 8px;
  display: block;
  width: 36px;
  height: 3px;
  background-color: ${theme.colors.white};
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transform-origin: left center;
  transform: ${({open}) => (open ? "rotate(45deg) translate(0px,-4.5px)" : "none")};
`;

const Bottom = styled.span`
  top: 8px;
  display: block;
  width: 36px;
  height: 3px;
  background-color: ${theme.colors.white};
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transform-origin: left center;
  transform: ${({open}) => (open ? "rotate(-45deg) translate(0px,4.5px)" : "none")};
`;

export default function Burgur(props) {
  const {open} = props;

  return (
    <>
      <Top open={open} />
      <Middle open={open} />
      <Bottom open={open} />
    </>
  );
}

Burgur.propTypes = {
  open: PropTypes.bool.isRequired,
};
