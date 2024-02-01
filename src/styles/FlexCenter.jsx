import styled from "styled-components";
import theme from "../theme";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => (props.gap ? props.gap : "0")};
  position: ${props => (props.position ? props.position : "")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
  background-color: ${props => (props.bgColor ? theme.colors[props.bgColor] : "")};
  padding-top: ${props => (props.pt ? props.pt : "")};
  padding-bottom: ${props => (props.pb ? props.pb : "")};
  padding-left: ${props => (props.pl ? props.pl : "")};
  padding-right: ${props => (props.pr ? props.pr : "")};
`;

export default FlexCenter;
