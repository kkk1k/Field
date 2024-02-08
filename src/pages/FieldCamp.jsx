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
import campBackgroundImage1 from "../assets/camp1.png";
import campBackgroundImage2 from "../assets/camp2.png";
import campBackgroundImage3 from "../assets/camp3.png";
import campTimeline from "../assets/campTimeline.png";
import CardCamp from "../components/Camp/CardCamp";
import GoblinOneFont from "../styles/GoblinOneFont";

function FieldCamp() {
  return (
    <>
      <BackgroundImage position='relative' src={campBackgroundImage} height='90vh'>
        <FlexCenter gap='0.5rem' mb='15rem'>
          <GoblinOneFont size='2.5rem' mb='15rem'>
            Field Camp
          </GoblinOneFont>
          <H3 size='2.5rem' margin='0 0 0 0' fontFamily="'Nanum Brush Script', cursive">
            팀원과 함께
          </H3>
          <H3 size='2.5rem' margin='0 0 0 0' fontFamily="'Nanum Brush Script', cursive">
            여러분의 열정을 보여주세요!!!!!
          </H3>
        </FlexCenter>

        <FlexCenter bottom='1rem' position='absolute' left='50%' transform='translate(-50%)'>
          <Button>FieldCamp 지원하기</Button>
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
        <H3 margin='40px 0 0 0'>FieldCamp 소개</H3>
        <Dl>
          <Dt color='red' top='2.5rem'>
            FieldCamp란
          </Dt>
          <Dd>
            FIELD CAMP는 대한산업공학회 주최, FIELD 주관의 전국 대학생 산업공학도 학술 및 인적 교류
            캠프로 여름방학 중 2박 3일간 진행됩니다. 지역적 한계로 교류가 어려운 전국의
            산업공학도들에게 인적교류의 장을 제공하고자 하는 목적의 행사입니다.
          </Dd>
          <Dt color='blue'>산업공학적 문제해결력</Dt>
          <Dd>
            참가자들은 컴페티션 주제를 함께 해결하며 산업공학적인 문제해결력을 높이고, 선배
            산업공학도를 만나 산업공학도로서의 마인드를 배울 수 있는 학술교류를 통해 미래의 리더로
            나아가기 위한 역량을 기를 수 있습니다.
          </Dd>
          <Dt>컴페티션</Dt>
          <Dd bottom='2.5rem'>
            컴페티션이란 FIELD CAMP의 핵심 행사로서, 전국의 산업공학도들이 함께 모여 제시되는 문제에
            대하여 산업공학적 시각으로 함께 해결하고 겨루는 단기 프로젝트 공모전입니다. 해마다 달리
            주어지는 주제에 맞추어 문제를 정의하고, 산업공학적 지식을 활용하여 참신한 해결방안을
            강구함으로써 선의의 경쟁을 유도하고, 전공 역량과 팀워크를 기를 수 있습니다.
          </Dd>
        </Dl>
      </FlexCenter>
      <BackgroundImage position='relative' height='80vh' src={campBackgroundImage1}>
        <FlexCenter pl='10%' pr='10%'>
          <H3 margin='0 0 2rem 0'>ON/OFF blended</H3>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            본 캠프 2박 3일을 포함하여
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            사전 데모데이를 통해{" "}
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            {" "}
            팀원들과 친해지세요.
          </Span>
        </FlexCenter>
      </BackgroundImage>
      <BackgroundImage position='relative' height='80vh' src={campBackgroundImage2}>
        <FlexCenter pl='10%' pr='10%'>
          <H3 margin='0 0 2rem 0'>Various program</H3>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            다양한 인적 교류 활성화
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            프로그램을 진행합니다.
          </Span>
        </FlexCenter>
      </BackgroundImage>
      <BackgroundImage position='relative' height='80vh' src={campBackgroundImage3}>
        <FlexCenter pl='10%' pr='10%'>
          <H3 margin='0 0 2rem 0'>Connection with Professor</H3>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            산업공학과 출신 기업인
          </Span>
          <Span margin='0 0 1rem 0' size='1.25rem'>
            교수님과 소통하세요.
          </Span>
        </FlexCenter>
      </BackgroundImage>
      <Container>
        <CardCamp />
        <H2 color='yellow'>Time Line</H2>
        <Image width='12rem' src={campTimeline} />
      </Container>
    </>
  );
}
export default FieldCamp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
type=button;
  background: #d4e3c0;
  color: ${theme.colors.red};
  width: 10rem;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border: none;
  border-radius: 5rem;
  font-weight: bold;
  font-family: "SUIT-Regular";
  font-size: 1.25rem;
  word-break: keep-all;
`;

const Dl = styled.dl`
  text-align: center;
`;

const Dt = styled.dt`
  font-size: 1.25rem;
  margin-top: ${props => (props.top ? props.top : "2.5rem")};
  margin-bottom: 1.25rem;
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.yellow)};
`;

const Dd = styled.dd`
  font-size: 1rem;
  margin-bottom: ${props => (props.bottom ? props.bottom : "")};
  font-weight: 500;
  line-height: 1.3;
`;
