import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import Image from "../../styles/Image";

const Figure = styled.figure`
  text-align: center;
`;

const FigCaption = styled.figcaption`
  margin-bottom: 0.5rem;
`;

function Profile({name, position, src}) {
  return (
    <Figure>
      <Image src={src} width='7.5rem' height='9.375rem' radius='50%' mb='0.5rem' />
      <FigCaption>{position}</FigCaption>
      <FigCaption>{name}</FigCaption>
    </Figure>
  );
}

Profile.propTypes = {
  name: Prototypes.string.isRequired,
  position: Prototypes.string.isRequired,
  src: Prototypes.string.isRequired,
};

export default Profile;
