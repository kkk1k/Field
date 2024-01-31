import styled from "styled-components";
import theme from "../theme";

const H2 = styled.h2`
  font-size: ${props => (props.size ? props.size : "2rem")};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
<<<<<<< HEAD
  font-family: ${props => (props.family ? props.family : "sans-serif")};
=======
  margin: ${props => (props.padding ? props.padding : "2rem 0 2rem 0")};
  font-family: 'Goblin One', serif;
  text-align: center;
};
>>>>>>> 69d0eff0c35500ffbc5c97111783d4ce0033c83e
`;

export default H2;
