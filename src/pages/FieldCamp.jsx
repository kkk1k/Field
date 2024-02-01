import React from "react";
import styled from "styled-components";
import H2 from "../styles/H2";
import H3 from "../styles/H3";
import BackgroundImage from "../styles/BackgroundImage";
import campBackgroundImage from "../assets/CampBackground.jpg";
import Image from "../styles/Image";
import FlexCenter from "../styles/FlexCenter";
import Span from "../styles/Span";
import scrollDown from "../assets/transfer-down-light.svg";
import theme from "../theme";

function FieldCamp() {
  return (
    <>
      <BackgroundImage
        position='relative'
        src={campBackgroundImage}
        pl='2rem'
        pr='2rem'
        opacity='0.9'
        height='90vh'
      >
        <FlexCenter>
          <H2>Field Camp</H2>
          <H3>팀원과 함께 여러분의 열정을 보여주세요!!</H3>
        </FlexCenter>

        <FlexCenter bottom='1rem' position='absolute'>
          <Button>신청하기</Button>
          <Span color='white'>아래로 스크롤하세요.</Span>
          <Image
            src={scrollDown}
            width='1.875rem'
            height='1.875rem'
            object-fit='cover'
            alt='아래로 스크롤하세요'
          />
        </FlexCenter>
      </BackgroundImage>
      <H3>FieldCamp 소개</H3>
    </>
  );
}

export default FieldCamp;

const Button = styled.button`
  background: ${theme.colors.yellow};
  color: ${theme.colors.red};
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10%;
  font-weight: bold;
  font-family: "SUIT-Regular";
`;

const Dl = styled.dl``;

const Dt = styled.dt`
  fo
`;
