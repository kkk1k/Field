import styled from "styled-components";

export const Para = styled.p`
  text-align: left;
  font-size: ${props => (props.fs ? props.fs : "0.75rem")};
  margin: ${props => (props.margin ? props.margin : "1rem")};
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
