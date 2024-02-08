import styled from "styled-components";
import theme from "../theme";

const H3 = styled.h3`
  font-size: ${props => (props.size ? props.size : "1.5rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  text-align: ${props => (props.align ? props.align : "center")};
  margin: ${props => (props.margin ? props.margin : "")};
  font-weight: bold;
  font-family: ${props => (props.fontFamily ? props.fontFamily : "")};
};
`;

export default H3;
