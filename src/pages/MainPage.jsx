import React from "react";
import logo from "../assets/fieldLogo.png";
import mainBackgroundImage from "../assets/mainBackground.png";
import profile1 from "../assets/profile1.png";
import scrollDown from "../assets/transfer-down-light.svg";
import Category from "../components/Main/Category";
import DescriptionRight from "../components/Main/DescriptionLeft";
import DescriptionLeft from "../components/Main/DescriptionRight";
import Profile from "../components/Main/Profile";
import ProfileLeft from "../components/Main/ProfileLeft";
import ProfileRight from "../components/Main/ProfileRight";
import BackgroundImage from "../styles/BackgroundImage";
import FlexBox from "../styles/FlexBox";
import FlexCenter from "../styles/FlexCenter";
import H2 from "../styles/H2";
import Image from "../styles/Image";
import Span from "../styles/Span";

function MainPage() {
  return (
    <>
      <BackgroundImage
        position='relative'
        src={mainBackgroundImage}
        pl='2rem'
        pr='2rem'
        opacity='0.9'
        height='100vh'
      >
        <FlexCenter gap='0.5rem'>
          <H2 margin='0rem 0rem 0rem 0rem'>산업을 지휘하자</H2>
          <H2 margin='0rem 0rem 0rem 0rem'>더 넓은 FIELD로</H2>
        </FlexCenter>

        <FlexCenter bottom='1rem' position='absolute'>
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

      <FlexCenter>
        <H2>our goal</H2>
        <Image src={logo} width='8.75rem' height='8.75rem' mb='15.625rem' mt='15.625rem' />
      </FlexCenter>

      <DescriptionLeft />
      <DescriptionRight />
      <DescriptionLeft />

      <FlexCenter gap='0.5rem' pt='7.5rem'>
        <H2 margin='0rem 0rem 0rem 0rem' size='1.625rem'>
          16기 단장단과 함께
        </H2>
        <H2 margin='0rem 0rem 0rem 0rem' size='1.625rem'>
          여러분의 꿈을 실현하세요.
        </H2>
      </FlexCenter>
      <ProfileLeft
        position='16기 총기획단장'
        name='이민재'
        intro='소개글~@!~!!~@~#~#~#~#'
        src={profile1}
      />
      <ProfileRight position='16기 총기획단장' name='구연정' intro='소개글~@!~!!~@~#~#~#~#' />
      <FlexBox ml='1.875rem' mr='1.875rem' mt='2rem'>
        <Profile position='16기 기획부장' name='김민주' />
        <Profile position='16기 대외협력부장' name='강영모' />
      </FlexBox>
      <FlexBox ml='1.875rem' mr='1.875rem' mt='2rem'>
        <Profile position='16기 컴페티션부장' name='이정준' />
        <Profile position='16기 홍보부장' name='정나리' />
      </FlexBox>
      <Category />
    </>
  );
}

export default MainPage;
