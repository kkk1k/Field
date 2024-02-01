import React from "react";
import FlexBox from "../../styles/FlexBox";
import Image from "../../styles/Image";
import Span from "../../styles/Span";
import logo from "../../assets/fieldLogo.png";

function DescriptionRight() {
  return (
    <FlexBox ml='1.875rem' mb='3.75rem'>
      <Span>
        {" "}
        Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅
        Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅 Field화이팅{" "}
      </Span>
      <Image src={logo} width='8.75rem' height='6.25rem' ml='1.875rem' mr='1.875rem' />
    </FlexBox>
  );
}

export default DescriptionRight;
