import styled from "styled-components";
import theme from "../theme";

const Span = styled.span`
  font-size: ${props => (props.size ? props.size : "1rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
`;

export default Span;
