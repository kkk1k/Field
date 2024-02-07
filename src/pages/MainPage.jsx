import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import fieldIntro1 from "../assets/fieldIntro1.png";
import fieldIntro2 from "../assets/fieldIntro2.png";
import fieldIntro3 from "../assets/fieldIntro3.png";
import logo from "../assets/fieldLogo.png";
import mainBackgroundImage from "../assets/mainBackground.png";
import profile1 from "../assets/profile1.png";
import scrollDown from "../assets/transfer-down-light.svg";
import ActivityIntro from "../components/Main/ActivityIntro";
import DepartmentIntro from "../components/Main/DepartmentIntro";
import DescriptionRight from "../components/Main/DescriptionLeft";
import DescriptionLeft from "../components/Main/DescriptionRight";
import Profile from "../components/Main/Profile";
import ProfileLeft from "../components/Main/ProfileLeft";
import ReviewCard from "../components/Main/ReviewCard";
import BackgroundImage from "../styles/BackgroundImage";
import FlexBox from "../styles/FlexBox";
import FlexCenter from "../styles/FlexCenter";
import H2 from "../styles/H2";
import H3 from "../styles/H3";
import Image from "../styles/Image";
import Span from "../styles/Span";
import SwiperContainer from "../styles/SwiperContainer";
import NanumFont from "../styles/NanumFont";
import GoblinOneFont from "../styles/GoblinOneFont";

function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 isVisible 상태를 true로 설정하여 애니메이션을 시작합니다.
    setIsVisible(true);
  }, []);
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
        <FlexCenter gap='0.5rem' mb='8rem'>
          <H2 margin='0rem 0rem 0rem 0rem' size='2.5rem'>
            산업을 지휘하자
          </H2>
          <H2 margin='0rem 0rem 0rem 0rem' size='2.5rem'>
            더 넓은 FIELD로
          </H2>
        </FlexCenter>

        <FlexCenter bottom='1rem' position='absolute' left='50%' transform='translate(-50%)'>
          <Span color='white'>아래로 스크롤하세요.</Span>
          <Image
            src={scrollDown}
            width='1.875rem'
            height='1.875rem'
            object-fit='cover'
            alt='아래로 스크롤하세요'
            alignSelf='center'
          />
        </FlexCenter>
      </BackgroundImage>

      <FlexCenter mr='10%' ml='10%'>
        <GoblinOneFont mt='2rem' mb='2rem'>
          OUR GOAL
        </GoblinOneFont>
        <NanumFont size='1.625rem' mt='5rem'>
          꿈과 비전, 생각을 공유하는
        </NanumFont>
        <NanumFont size='1.625rem' mt='1rem'>
          교류의 장을 만든다
        </NanumFont>
        <Image src={logo} width='10rem' height='10rem' mb='12rem' mt='8rem' alignSelf='center' />
      </FlexCenter>

      <DescriptionLeft
        title="'열정으로 뭉친 산업공학도'"
        description='열정 가득한 산업공학도들의 모임인 FIELD는 학술적
        활동은 물론 인적 교류에도 항상 열정적으로 참여합니다.'
        color='red'
        src={fieldIntro1}
      />
      <DescriptionRight
        title="'하나 되는 FIELD'"
        description='FIELD는 모든 구성원들의 화합을 지향합니다. 이를 통해 FIELD만의 유대감을 형성할 수 있습니다.'
        color='yellow'
        src={fieldIntro2}
      />
      <DescriptionLeft
        title="'오늘보다 더 나은 내일'"
        description='내 옆의 동료가 미래에 산업을 이끌어나갈 리더로 함께 성장하기를 바라며 FIELD는 오늘도 더 높은 목표를 향해 함께 나아갑니다.'
        color='blue'
        src={fieldIntro3}
      />

      <NanumFont size='1.5rem' mt='0.5rem' mb='0.5rem'>
        인적, 학술적 교류를
      </NanumFont>
      <NanumFont size='1.5rem' mt='0.5rem' mb='0.5rem'>
        실현하는 다양한 활동들
      </NanumFont>
      <SwiperContainer mt='1rem'>
        <Swiper slidesPerView={1.2} spaceBetween={10} centeredSlides='true'>
          <SwiperSlide>
            <ActivityIntro
              title='LT'
              description='산업공학의 다양한 분야에서 활동 중인 전문가들과의 대화를 통해 진로에 대한 영감을 얻고, 현업에서의 성공 비법을 배워보세요.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='필드캠프'
              description='매년 8월, 다양한 산업공학도들과 함께 인적, 학술적 교류의 기회를 제공합니다. 우리와 함께 미래를 열어가는 여정에 참여하세요!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='서포터즈'
              description='청년일보 서포터즈로 참여함현 대학생 기자로 성장하는 특별한 기회가 여러분을 기다립니다.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='기업인 인터뷰'
              description='산업공학의 다양한 분야에서 활동 중인 전문과들과의 대화를 통해 진로에 대한 영감을 얻고, 현업에서의 성공 비법을 배워보세요'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='유튜브'
              description='유튜브 채널을 통해 창의적이고 혁신적인 컨텐츠를 직접 기획하고 제작하는 현장을 경험해보세요!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='세미나'
              description='세미나 활동을 통해 함께하는 학술적인 여정에서 산업공학의 깊이있는 통찰력을 개발하세요.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ActivityIntro
              title='고교방문설명회'
              description='문제해결 능력을 키우는 산업공학의 매력을 전하며, 진로 선택에 도움을 주고자 합니다. 함께하면서 미래의 혁신을 주도할 준비를 하는 첫걸음을 함께 나아가요!'
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>

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

      <FlexBox ml='10%' mr='10%' mt='2rem' justify='space-between'>
        <Profile position='16기 기획부장' name='김민주' src={profile1} />
        <Profile position='16기 대외협력부장' name='강영모' src={profile1} />
      </FlexBox>

      <FlexBox ml='10%' mr='10%' mt='2rem' justify='space-between'>
        <Profile position='16기 컴페티션부장' name='이정준' src={profile1} />
        <Profile position='16기 홍보부장' name='정나리' src={profile1} />
      </FlexBox>

      <DepartmentIntro />

      <GoblinOneFont mt='2rem' mb='2rem' size='2rem'>
        How was your FIELD?
      </GoblinOneFont>

      <SwiperContainer>
        <Swiper slidesPerView={1.2} spaceBetween={10} centeredSlides='true'>
          <SwiperSlide>
            <ReviewCard
              question='Q. 필드를 통해 배운점은?'
              answer='필드를 통해 적절한 주제를 만들고 다듬는 스킬, 한 문제에서 발생할 수 있는 다양한 문제점들을 찾고 적절한 해결책을 제시하는 법, 짧은 시간 내에 다각도로 판단하는 시야를 배울 수 있었습니다. 더불어 캠프 주제들을 공부하며 해당 분야에 대해 심도 있는 지식을 얻을 수 있었습니다. 산업공학은 팀으로 구성되어 진행되는 프로젝트들이 많고, 다양한 분야의 사람들과의 협업 기회가 많은 만큼 서로 간의 소통 능력이 중요한 요소입니다. 필드의 컴페티션 부서 일원으로서 다양한 프로젝트들을 진행하며 팀워킹에 대해서도 많은 것을 배울 수 있었습니다.'
              name='15기 컴페티션부 김지은'
              school='홍익대학교 산업데이터공학과'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              question='Q2. 필드를 통해 배운점은?'
              answer='필드를 통해 적절한 주제를 만들고 다듬는 스킬, 한 문제에서 발생할 수 있는 다양한 문제점들을 찾고 적절한 해결책을 제시하는 법, 짧은 시간 내에 다각도로 판단하는 시야를 배울 수 있었습니다. 더불어 캠프 주제들을 공부하며 해당 분야에 대해 심도 있는 지식을 얻을 수 있었습니다. 산업공학은 팀으로 구성되어 진행되는 프로젝트들이 많고, 다양한 분야의 사람들과의 협업 기회가 많은 만큼 서로 간의 소통 능력이 중요한 요소입니다. 필드의 컴페티션 부서 일원으로서 다양한 프로젝트들을 진행하며 팀워킹에 대해서도 많은 것을 배울 수 있었습니다.'
              name='15기 컴페티션부 김지은'
              school='홍익대학교 산업데이터공학과'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              question='Q3. 필드를 통해 배운점은?'
              answer='필드를 통해 적절한 주제를 만들고 다듬는 스킬, 한 문제에서 발생할 수 있는 다양한 문제점들을 찾고 적절한 해결책을 제시하는 법, 짧은 시간 내에 다각도로 판단하는 시야를 배울 수 있었습니다. 더불어 캠프 주제들을 공부하며 해당 분야에 대해 심도 있는 지식을 얻을 수 있었습니다. 산업공학은 팀으로 구성되어 진행되는 프로젝트들이 많고, 다양한 분야의 사람들과의 협업 기회가 많은 만큼 서로 간의 소통 능력이 중요한 요소입니다. 필드의 컴페티션 부서 일원으로서 다양한 프로젝트들을 진행하며 팀워킹에 대해서도 많은 것을 배울 수 있었습니다.'
              name='15기 컴페티션부 김지은'
              school='홍익대학교 산업데이터공학과'
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  );
}

export default MainPage;
