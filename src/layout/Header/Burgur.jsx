import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";

const Middle = styled.span`
  display: ${({open}) => (open ? "none" : "block")};
  position: relative;
  width: 2.25rem;
  height: 0.1875rem;
  background: ${theme.colors.white};
  cursor: pointer;
`;

const Top = styled.span`
  bottom: 0.5rem;
  display: block;
  width: 2.25rem;
  height: 0.1875rem;
  background-color: ${theme.colors.white};
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transform-origin: left center;
  transform: ${({open}) => (open ? "rotate(45deg) translate(0px,-4.5px)" : "none")};
`;

const Bottom = styled.span`
  top: 0.5rem;
  display: block;
  width: 2.25rem;
  height: 0.1875rem;
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
