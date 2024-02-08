import React from "react";
import SnsInfo from "./SnsInfo";

const instagramInfo = {
  name: "Instagram",
  image: "InstagramLogo.png",
  imageAlt: "Instagram Logo",
  linkTitle: "인스타그램",
  color: "#F75C9C",
  link: "instagram.com/iefield?igshid=MzRlODBiNWFlZA==",
};
export default function Instagram() {
  return (
    <SnsInfo info={instagramInfo}>
      <div style={{padding: "5rem"}}>컨텐츠 삽입전!!!!</div>
    </SnsInfo>
  );
}
