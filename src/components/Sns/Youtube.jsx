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
};

const VideoContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
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
