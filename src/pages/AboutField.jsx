import React from "react";
import FlexBox from "../styles/FlexBox";
import H2 from "../styles/H2";
import Span from "../styles/Span";
import Image from "../styles/Image";
import scrollDown from "../assets/transfer-down-light.svg";
import FlexCenter from "../styles/FlexCenter";

function AboutField() {
  return (
    <div>
      <FlexBox direction='column' align='left' ml='10%' mr='10%' height='90vh' position='relative'>
        <H2 size='1.7rem'>전국 대학생 산업공학도 동아리</H2>
        <Span size='2rem'>
          <Span size='2rem' color='red'>
            F
          </Span>
          uture
        </Span>
        <Span size='2rem'>
          <Span size='2rem' color='blue'>
            I
          </Span>
          ndustrial
        </Span>
        <Span size='2rem'>
          <Span size='2rem' color='blue'>
            E
          </Span>
          ngineering
        </Span>
        <Span size='2rem'>
          <Span size='2rem' color='yellow'>
            L
          </Span>
          eaders
        </Span>
        <Span size='2rem'>
          <Span size='2rem' color='yellow'>
            D
          </Span>
          reamers
        </Span>
        <Span mt='3rem' mb='3rem'>
          FIELD란, ‘Future Industrial Engineering Leaders and Dreamers’ 의 약자로, 미래의 핵심
          리더들이 될 산업 공학도들이 모여 서로의 꿈과 비전, 생각 등을 공유할 수 있는 교류의 장을
          만든다는 목표 아래 모인 &apos;전국 대학생 산업공학도 동아리&apos; 입니다.
        </Span>
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
      </FlexBox>
    </div>
  );
}

export default AboutField;
