import React from "react";
import FlexBox from "../styles/FlexBox";
import H2 from "../styles/H2";
import Span from "../styles/Span";
import Image from "../styles/Image";
import scrollDown from "../assets/transfer-down-light.svg";
import FlexCenter from "../styles/FlexCenter";
import roadMap from "../assets/roadMap.png";
import H3 from "../styles/H3";
import DepartmentDetail from "../components/Main/DepartmentDetail";
import NanumFont from "../styles/NanumFont";
import GoblinOneFont from "../styles/GoblinOneFont";

function AboutField() {
  return (
    <div>
      <FlexBox direction='column' align='left' ml='10%' mr='10%' height='90vh' position='relative'>
        <NanumFont size='1.5625rem' mt='2rem' mb='2rem'>
          전국 대학생 산업공학도 동아리
        </NanumFont>
        <GoblinOneFont size='2.5rem'>
          <GoblinOneFont size='2.5rem' color='red'>
            F
          </GoblinOneFont>
          uture
        </GoblinOneFont>
        <GoblinOneFont size='2.5rem'>
          <GoblinOneFont size='2.5rem' color='blue'>
            I
          </GoblinOneFont>
          ndustrial
        </GoblinOneFont>
        <GoblinOneFont size='2.5rem'>
          <GoblinOneFont size='2.5rem' color='blue'>
            E
          </GoblinOneFont>
          ngineering
        </GoblinOneFont>
        <GoblinOneFont size='2.5rem'>
          <GoblinOneFont size='2.5rem' color='yellow'>
            L
          </GoblinOneFont>
          eaders
        </GoblinOneFont>
        <GoblinOneFont size='2.5rem'>
          <GoblinOneFont size='2.5rem' color='yellow'>
            D
          </GoblinOneFont>
          reamers
        </GoblinOneFont>
        <Span mt='3rem' size='1.2rem'>
          FIELD란, ‘Future Industrial Engineering Leaders and Dreamers’ 의 약자로, 미래의 핵심
          리더들이 될 산업 공학도들이 모여 서로의 꿈과 비전, 생각 등을 공유할 수 있는 교류의 장을
          만든다는 목표 아래 모인 &apos;전국 대학생 산업공학도 동아리&apos; 입니다.
        </Span>
        <FlexCenter position='absolute' bottom='1rem' left='50%' transform='translate(-50%)'>
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
      </FlexBox>
      <FlexCenter>
        <GoblinOneFont>Road of FIELD</GoblinOneFont>
        <Image src={roadMap} mb='2rem' />
      </FlexCenter>
      <NanumFont>부서 소개</NanumFont>
      <DepartmentDetail department='기획부' />
      <DepartmentDetail department='대외협력부' />
      <DepartmentDetail department='컴페티션부' />
      <DepartmentDetail department='홍보부' />
    </div>
  );
}

export default AboutField;
