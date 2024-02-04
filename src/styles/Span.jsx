import styled from "styled-components";
import theme from "../theme";

const Span = styled.span`
  font-size: ${props => (props.size ? props.size : "1rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  word-break: break-all;
  text-align: ${props => (props.align ? "center" : "justify")};
  line-height: 1.3;
  font-weight: ${props => (props.bold ? "bold" : "")};
  flex-basis: ${props => (props.basis ? props.basis : "")};
`;

export default Span;
