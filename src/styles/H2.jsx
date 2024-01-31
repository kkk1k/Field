import styled from "styled-components";
import theme from "../theme";

const H2 = styled.h2`
  font-size: ${props => (props.size ? props.size : "2rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  font-family: ${props => (props.family ? props.family : "sans-serif")};
`;

export default H2;
