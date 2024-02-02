import React from "react";
import logo from "../assets/fieldLogo.png";
import mainBackgroundImage from "../assets/mainBackground.png";
import profile1 from "../assets/profile1.png";
import scrollDown from "../assets/transfer-down-light.svg";
import DepartmentIntro from "../components/Main/DepartmentIntro";
import DescriptionRight from "../components/Main/DescriptionLeft";
import DescriptionLeft from "../components/Main/DescriptionRight";
import Profile from "../components/Main/Profile";
import ProfileLeft from "../components/Main/ProfileLeft";
import BackgroundImage from "../styles/BackgroundImage";
import FlexBox from "../styles/FlexBox";
import FlexCenter from "../styles/FlexCenter";
import H2 from "../styles/H2";
import Image from "../styles/Image";
import Span from "../styles/Span";
import H3 from "../styles/H3";
import ReviewCard from "../components/Main/ReviewCard";

function MainPage() {
  return (
    <>
      <BackgroundImage
        position='relative'
        src={mainBackgroundImage}
        pl='2rem'
        pr='2rem'
        opacity='0.9'
        height='90vh'
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

      <FlexCenter mr='10%' ml='10%'>
        <H2>OUR GOAL</H2>
        <Span size='1.625rem' mt='5rem'>
          꿈과 비전, 생각을 공유하는
        </Span>
        <Span size='1.625rem' mt='1rem'>
          교류의 장을 만든다
        </Span>
        <Image src={logo} width='8.75rem' height='8.75rem' mb='12rem' mt='12rem' />
      </FlexCenter>

      <DescriptionLeft />
      <DescriptionRight />
      <DescriptionLeft />

      <FlexCenter gap='0.5rem' mt='7.5rem'>
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
        intro='안녕하세요! 16기 총기획단장 이민재입니다!
        FIELD가 앞으로도 지속적으로 전국 산업공학도들의 인적, 학술적 교류의 장이 될 수 있도록 열심히, 최선을 다해 활동하겠습니다. FIELD에 많은 관심 부탁드립니다 :)'
        src={profile1}
      />
      <ProfileLeft
        position='16기 부총기획단장'
        name='구연정'
        intro='안녕하십니까! 16기 부총기획단장 구연정입니다!
        전국의 수많은 산업공학도들의 인적, 학술적 교류의 장을 위해 뻗어나가는 필드를 기획하도록 노력하겠습니다! 감사합니다~!'
      />
      <FlexBox ml='10%' mr='10%' mt='2rem'>
        <Profile position='16기 기획부장' name='김민주' src={profile1} />
        <Profile position='16기 대외협력부장' name='강영모' src={profile1} />
      </FlexBox>
      <FlexBox ml='10%' mr='10%' mt='2rem'>
        <Profile position='16기 컴페티션부장' name='이정준' src={profile1} />
        <Profile position='16기 홍보부장' name='정나리' src={profile1} />
      </FlexBox>
      <DepartmentIntro />
      <H3 mt='2rem' mb='2rem' size='1.625rem'>
        How was your FIELD?
      </H3>
      <ReviewCard
        question='Q. 필드를 통해 배운점은?'
        answer='필드를 통해 적절한 주제를 만들고 다듬는 스킬, 한 문제에서 발생할 수 있는 다양한 문제점들을 찾고 적절한 해결책을 제시하는 법, 짧은 시간 내에 다각도로 판단하는 시야를 배울 수 있었습니다. 더불어 캠프 주제들을 공부하며 해당 분야에 대해 심도 있는 지식을 얻을 수 있었습니다. 산업공학은 팀으로 구성되어 진행되는 프로젝트들이 많고, 다양한 분야의 사람들과의 협업 기회가 많은 만큼 서로 간의 소통 능력이 중요한 요소입니다. 필드의 컴페티션 부서 일원으로서 다양한 프로젝트들을 진행하며 팀워킹에 대해서도 많은 것을 배울 수 있었습니다.'
        name='15기 컴페티션부 김지은'
        school='홍익대학교 산업데이터공학과'
      />
    </>
  );
}

export default MainPage;
