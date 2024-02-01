import React from "react";
import FlexBox from "../../styles/FlexBox";
import Image from "../../styles/Image";
import Span from "../../styles/Span";
import logo from "../../assets/fieldLogo.png";

function DescriptionLeft() {
  return (
    <FlexBox mr='1.875rem' mb='3.75rem'>
      <Image src={logo} width='8.75rem' height='6.25rem' ml='1.875rem' mr='1.875rem' />
      <Span>
        {" "}
        Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅
        Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅{" "}
      </Span>
    </FlexBox>
  );
}

export default DescriptionLeft;
