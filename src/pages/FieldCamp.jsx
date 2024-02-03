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
import Dropdown from "../components/Dropdown";

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
          <Button>FieldCamp 신청하기</Button>
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
      <Container>
        <H3 margin='40px 0 0 0'>FieldCamp 소개</H3>
        <Dl>
          <Dt color='red' top='40px'>
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
          <Dd bottom='20px'>
            컴페티션이란 FIELD CAMP의 핵심 행사로서, 전국의 산업공학도들이 함께 모여 제시되는 문제에
            대하여 산업공학적 시각으로 함께 해결하고 겨루는 단기 프로젝트 공모전입니다. 해마다 달리
            주어지는 주제에 맞추어 문제를 정의하고, 산업공학적 지식을 활용하여 참신한 해결방안을
            강구함으로써 선의의 경쟁을 유도하고, 전공 역량과 팀워크를 기를 수 있습니다.
          </Dd>
        </Dl>
      </Container>
      <BackgroundImage
        position='relative'
        pl='2rem'
        pr='2rem'
        height='80vh'
        src={campBackgroundImage1}
      >
        <FlexCenter>
          <H2>진행방식</H2>
          <H3>ON/OFF blended</H3>
          <Span>본 캠프 2박 3일을 포함하여 사전 데모데이를 통해 팀원들과 친해지세요.</Span>
        </FlexCenter>
      </BackgroundImage>
      <BackgroundImage
        position='relative'
        pl='2rem'
        pr='2rem'
        height='80vh'
        src={campBackgroundImage2}
      >
        <FlexCenter>
          <H3>Various program</H3>
          <Span>다양한 인적 교류 활성화 프로그램을 진행합니다.</Span>
        </FlexCenter>
      </BackgroundImage>
      <BackgroundImage
        position='relative'
        pl='2rem'
        pr='2rem'
        height='80vh'
        src={campBackgroundImage3}
      >
        <FlexCenter>
          <H3>Connection with Professor</H3>
          <Span>산업공학과 출신 기업인, 교수님과 소통하세요.</Span>
        </FlexCenter>
      </BackgroundImage>
      <H2>역대 FieldCamp</H2>
      <Dropdown label='년도별 캠프' menuItemList={["1월", "2월", "3월"]} />
    </>
  );
}
export default FieldCamp;

const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

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

const Dl = styled.dl`
  text-align: center;
`;

const Dt = styled.dt`
  font-size: 20px;
  margin-top: ${props => (props.top ? props.top : "40px")};
  margin-bottom: 20px;
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.yellow)};
`;

const Dd = styled.dd`
  font-size: 16px;
  margin-bottom: ${props => (props.bottom ? props.bottom : "")};
`;
