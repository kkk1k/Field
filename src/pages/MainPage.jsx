import React from "react";
import styled from "styled-components";
import mainBackgroundImage from "../assets/mainBackground.png";
import scrollDown from "../assets/transfer-down-light.svg";
import FlexCenter from "../styles/FlexCenter";
import Image from "../styles/Image";
import BackgroundImage from "../styles/BackgroundImage";

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.white};
`;

const ScrollInfo = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.white};
`;

const SectionMain = styled.section`
  background-color: ${props => props.theme.colors.primary};
`;

function MainPage() {
  return (
    <>
      <BackgroundImage
        position='relative'
        src={mainBackgroundImage}
        pt='12rem'
        pb='18rem'
        pl='2rem'
        pr='2rem'
        opacity='0.9'
      >
        <FlexCenter gap='0.5rem'>
          <SectionHeader>산업을 지휘하자</SectionHeader>
          <SectionHeader>더 넓은 FIELD로</SectionHeader>
        </FlexCenter>
        <FlexCenter bottom='1rem' position='absolute'>
          <ScrollInfo>아래로 스크롤하세요.</ScrollInfo>
          <Image
            src={scrollDown}
            width='1.875rem'
            height='1.875rem'
            object-fit='cover'
            alt='아래로 스크롤하세요'
          />
        </FlexCenter>
      </BackgroundImage>
      <SectionMain>
        <h2>our goal</h2>
      </SectionMain>
    </>
  );
}

export default MainPage;
