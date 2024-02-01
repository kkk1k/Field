import React from "react";
import SnsInfo from "./SnsInfo";

const instagramInfo = {
  name: "Instagram",
  image: "InstagramLogo.png",
  imageAlt: "Instagram Logo",
  linkTitle: "인스타그램 주소",
  link: "instagram.com/iefield?igshid=MzRlODBiNWFlZA==",
  title: "FIELD 카카오톡 플러스 친구",
  summary: "FIELD 에서 산업공학 홍보 및 활동을 남기기 위해 만든 SNS",
  description:
    "Future Industrial Engineering Leaders and Dreamers 미래 산업의 리더이자 인재가 될 전국의 대학생 산업공학도들이 학술적, 인적으로 소통하고 교류하는 단체입니다.",
};
export default function Instagram() {
  return (
    <SnsInfo info={instagramInfo}>
      <div style={{padding: "5rem"}}>컨텐츠 삽입전!!!!</div>
    </SnsInfo>
  );
}
