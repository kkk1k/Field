import React from "react";
import logo from "../assets/fieldLogo.png";
import mainBackgroundImage from "../assets/mainBackground.png";
import scrollDown from "../assets/transfer-down-light.svg";
import FlexCenter from "../styles/FlexCenter";
import Image from "../styles/Image";
import BackgroundImage from "../styles/BackgroundImage";
import Span from "../styles/Span";
import H2 from "../styles/H2";

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
          <H2 size='2.5rem' color='white'>
            산업을 지휘하자
          </H2>
          <H2 size='2.5rem' color='white'>
            더 넓은 FIELD로
          </H2>
        </FlexCenter>
        <FlexCenter bottom='1rem' position='absolute'>
          <Span size='0.75rem' color='white'>
            아래로 스크롤하세요.
          </Span>
          <Image
            src={scrollDown}
            width='1.875rem'
            height='1.875rem'
            object-fit='cover'
            alt='아래로 스크롤하세요'
          />
        </FlexCenter>
      </BackgroundImage>
      <FlexCenter bgColor='primary'>
        <H2 size='2.5rem' color='white' mt='11.25rem' mb='8.75rem'>
          our goal
        </H2>
        <Image src={logo} width='8.75rem' height='8.75rem' mb='15.625rem' />
        <H2 size='2rem' color='white' mb='0.5rem'>
          16기 단장단과 함께
        </H2>
        <H2 size='2rem' color='white'>
          여러분의 꿈을 실현하세요.
        </H2>
      </FlexCenter>
    </>
  );
}

export default MainPage;
