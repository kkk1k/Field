import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import FlexBox from "../../styles/FlexBox";
import Image from "../../styles/Image";
import Span from "../../styles/Span";

const Figure = styled.figure`
  text-align: center;
`;

const FigureBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FigCaption = styled.figcaption`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

function ProfileLeft({name, intro, position, src}) {
  return (
    <FlexBox ml='10%' gap='2rem' mr='10%' mt='2rem' direction='column'>
      <FigureBox>
        <Figure>
          <Image src={src} width='7.5rem' height='9.375rem' radius='50%' mb='0.5rem' />
          <FigCaption>{position}</FigCaption>
          <FigCaption>{name}</FigCaption>
        </Figure>
      </FigureBox>
      <Span>{intro}</Span>
    </FlexBox>
  );
}

ProfileLeft.propTypes = {
  name: Prototypes.string.isRequired,
  intro: Prototypes.string.isRequired,
  position: Prototypes.string.isRequired,
  src: Prototypes.string.isRequired,
};

export default ProfileLeft;
