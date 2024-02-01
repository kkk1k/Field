import styled from "styled-components";
import theme from "../theme";

const H3 = styled.h3`
  font-size: ${props => (props.size ? props.size : "1.5rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  text-align: center;
};
`;

export default H3;
