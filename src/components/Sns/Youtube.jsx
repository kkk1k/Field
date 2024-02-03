import React from "react";
import styled from "styled-components";
import SnsInfo from "./SnsInfo";

const youTubeInfo = {
  name: "YouTube",
  image: "YouTubeLogo.png",
  imageAlt: "Youtube Logo",
  linkTitle: "유튜브",
  color: "#FF0202",
  link: "https://www.youtube.com/@field2023",
  title: "FIELD 유튜브",
  summary: "FIELD에서 산업공학을 홍보하기 위해 만든 채널입니다.",
  description:
    "Future Industrial Engineering Leaders and Dreamers 미래 산업의 리더이자 인재가 될 전국의 대학생 산업공학도들이 학술적, 인적으로 소통하고 교류하는 단체입니다.",
};

const VideoContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  width: 85%;
  height: 30vh;
  overflow: hidden;
  border-radius: 2rem;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export default function YouTube() {
  return (
    <SnsInfo info={youTubeInfo}>
      <VideoContainer>
        <iframe
          src='https://www.youtube.com/embed/whOL5rjVi3E?si=MGLpkgulB1l3hadN'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          loading='lazy'
          border='none'
        />
      </VideoContainer>
    </SnsInfo>
  );
}
