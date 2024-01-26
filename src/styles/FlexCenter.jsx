import styled from "styled-components";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => (props.gap ? props.gap : "0")};
  position: ${props => (props.position ? props.position : "")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
`;

export default FlexCenter;
