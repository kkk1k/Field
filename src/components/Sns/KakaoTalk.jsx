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
  title: "FIELD 카카오톡 플러스 친구",
  summary: "FIELD 에서 산업공학 홍보 및 활동을 남기기 위해 만든 SNS",
  description:
    "Future Industrial Engineering Leaders and Dreamers 미래 산업의 리더이자 인재가 될 전국의 대학생 산업공학도들이 학술적, 인적으로 소통하고 교류하는 단체입니다.",
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
      <KakaoContent>
        <img src='KakaoContent1.png' alt='KakaoPlus' width={250} height={60} />
      </KakaoContent>
    </SnsInfo>
  );
}
