import styled from "styled-components";
import theme from "../theme";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: center;
  gap: ${props => (props.gap ? props.gap : "0")};
  position: ${props => (props.position ? props.position : "")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
  left: ${props => (props.left ? props.left : "0")};
  background-color: ${props => (props.bgColor ? theme.colors[props.bgColor] : "")};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  font-size: ${props => (props.size ? props.size : "")};
  transform: ${props => (props.transform ? props.transform : "")};
`;

export default FlexCenter;
