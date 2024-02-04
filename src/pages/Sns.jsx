import React from "react";
import YouTube from "../components/Sns/Youtube";
import KakaoTalk from "../components/Sns/KakaoTalk";
import Instagram from "../components/Sns/Instagram";
import H2 from "../styles/H2";
import theme from "../theme";

function Line() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div
        style={{
          backgroundColor: theme.colors.white,
          width: "90%",
          height: "0.05rem",
          margin: "2rem 0 1rem 0",
          display: "flex",
          alignItems: "center",
          borderRadius: "10%",
        }}
      />
    </div>
  );
}

export default function Sns() {
  return (
    <>
      <H2>SNS</H2>
      <YouTube />
      <Line />
      <Instagram />
      <Line />
      <KakaoTalk />
    </>
  );
}
