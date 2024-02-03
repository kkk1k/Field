import styled from "styled-components";
import theme from "../theme";

const H2 = styled.h2`
  font-size: ${props => (props.size ? props.size : "2rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : "2rem 0 2rem 0")};
  text-align: center;
  font-weight: bold;
};
`;

export default H2;
