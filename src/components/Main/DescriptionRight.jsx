import React from "react";
import FlexBox from "../../styles/FlexBox";
import Image from "../../styles/Image";
import Span from "../../styles/Span";
import logo from "../../assets/fieldLogo.png";

function DescriptionRight() {
  return (
    <FlexBox ml='10%' mb='3.75rem'>
      <Span>
        &apos;열정으로 뭉친 산업공학도들&apos;열정 가득한 산업공학도들의 모임인 FIELD는 학술적
        활동은 물론 인적 교류에도 항상 열정적으로 참여합니다.
      </Span>
      <Image src={logo} width='8.75rem' height='6.25rem' ml='10%' mr='10%' />
    </FlexBox>
  );
}

export default DescriptionRight;
