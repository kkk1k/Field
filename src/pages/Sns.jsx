import React from "react";
import styled from "styled-components";
import YouTube from "../components/Sns/Youtube";
import KakaoTalk from "../components/Sns/KakaoTalk";
import Instagram from "../components/Sns/Instagram";
import H2 from "../styles/H2";

const MainContent = styled.main`
  margin: 0 10%;
`;
export default function Sns() {
  return (
    <MainContent>
      <H2>SNS</H2>
      <YouTube />
      <Instagram />
      <KakaoTalk />
    </MainContent>
  );
}
