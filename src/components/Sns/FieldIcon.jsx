import React from "react";
import styled from "styled-components";

import theme from "../../theme";

export default function FiledIcon() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0 0.5rem 0;
    p {
      font-size: 1rem;
    }
  `;

  return (
    <Container>
      <p style={{color: theme.colors.red}}>F</p>
      <p style={{color: theme.colors.blue}}>I</p>
      <p style={{color: theme.colors.yellow}}>E</p>
      <p style={{color: theme.colors.purple}}>L</p>
      <p style={{color: theme.colors.green}}>D</p>
    </Container>
  );
}
