import styled from "styled-components";
import theme from "../theme";

const Span = styled.span`
  font-size: ${props => (props.size ? props.size : "1rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  word-break: break-all;
  text-align: justify;
  line-height: 1.3;
`;

export default Span;
