import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import FlexBox from "../../styles/FlexBox";
import Image from "../../styles/Image";
import Span from "../../styles/Span";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;
function DescriptionLeft({description, title, src, color}) {
  return (
    <FlexBox mr='10%' mb='3.75rem'>
      <Image src={src} width='8.75rem' height='6.875rem' ml='10%' mr='5%' />
      <TitleContainer>
        <Span color={color} bold='bold' size='1.1rem'>
          {title}
        </Span>
        <Span>{description}</Span>
      </TitleContainer>
    </FlexBox>
  );
}

DescriptionLeft.propTypes = {
  title: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
  src: Prototypes.string.isRequired,
  color: Prototypes.string.isRequired,
};

export default DescriptionLeft;
