import React from "react";
import styled from "styled-components";
import SnsInfo from "./SnsInfo";

const kakaoTalkInfo = {
  name: "KakaoTalk",
  image: "KakaoTalkLogo.png",
  imageAlt: "KakaoTalk Logo",
  linkTitle: "카카오톡 플러스 친구",
  color: "#CE9811",
  link: "https://www.youtube.com/@field2023",
};

const KakaoContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 0 0 2rem 0;
`;

export default function KakaoTalk() {
  return (
    <SnsInfo info={kakaoTalkInfo}>
      <KakaoContent />
    </SnsInfo>
  );
}
