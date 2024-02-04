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

function DescriptionRight({description, src, title, color}) {
  return (
    <FlexBox ml='10%' mb='3.75rem'>
      <TitleContainer>
        <Span color={color} size='1.1rem' bold='bold'>
          {title}
        </Span>
        <Span>{description}</Span>
      </TitleContainer>
      <Image src={src} width='8.75rem' height='6.875rem' ml='5%' mr='10%' />
    </FlexBox>
  );
}

DescriptionRight.propTypes = {
  title: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
  src: Prototypes.string.isRequired,
  color: Prototypes.string.isRequired,
};

export default DescriptionRight;
