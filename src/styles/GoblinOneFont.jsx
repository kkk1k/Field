import styled from "styled-components";

const GoblinOneFont = styled.span`
  font-family: "Goblin One", serif;
  font-size: ${props => (props.size ? props.size : "2rem")};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  font-weight: bold;
  text-align: center;
`;

export default GoblinOneFont;
