import Prototypes from "prop-types";
import React from "react";
import styled from "styled-components";
import PublicMain from "../../assets/PublicMain.jpg";
import FlexCenter from "../../styles/FlexCenter";
import Image from "../../styles/Image";
import Span from "../../styles/Span";

const TitleContainer = styled.span`
  font-size: 1.6rem;
  border: 1px solid white;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  align-self: left;
`;

const Card = styled.div`
  border: 1px solid white;
  padding: 2rem;
  border-radius: 20px;
  gap: 1rem;
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;

function ActivityIntro({title, description, src}) {
  return (
    <FlexCenter align='start' gap='1rem' width='100%'>
      <Card>
        <TitleContainer>{title}</TitleContainer>
        <Image src={PublicMain} width='100%' mt='2rem' radius='20px' mb='2rem' />
        <Span>{description}</Span>
      </Card>
    </FlexCenter>
  );
}

ActivityIntro.propTypes = {
  title: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
  src: Prototypes.string.isRequired,
};

export default ActivityIntro;
