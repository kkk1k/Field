import React, {useState} from "react";
import {Pagination} from "@mui/material";
import styled from "styled-components";
import H2 from "../styles/H2";
import Image from "../styles/Image";
import searchIcon from "../assets/Search.png";
import FlexCenter from "../styles/FlexCenter";
import scrollDown from "../assets/transfer-down-light.svg";

function FieldNews() {
  const newsArr = [
    {title: "뉴스1"},
    {title: "뉴스2"},
    {title: "뉴스3"},
    {title: "뉴스4"},
    {title: "뉴스5"},
    {title: "뉴스6"},
    {title: "뉴스7"},
    {title: "뉴스8"},
    {title: "뉴스9"},
    {title: "뉴스10"},
    {title: "뉴스11"},
    {title: "뉴스12"},
    {title: "뉴스13"},
    {title: "뉴스14"},
    {title: "뉴스15"},
  ];

  return (
    <>
      <H2>NEWS</H2>
      <Div>
        <Input placeholder='검색어를 입력해주세요' />
        <Image src={searchIcon} width='20px' height='20px' />
      </Div>
      {newsArr.map(item => (
        <P>{item.title}</P>
      ))}
      <div style={{color: "white"}}>
        <CustomPagination
          itemsCountPerPage={10}
          count={Math.ceil(newsArr.length / 10)}
          color='primary'
        />
      </div>
      <FlexCenter bottom='1rem' position='absolute'>
        <ScrollInfo>아래로 스크롤하세요.</ScrollInfo>
        <Image
          src={scrollDown}
          width='1.875rem'
          height='1.875rem'
          object-fit='cover'
          alt='아래로 스크롤하세요'
        />
      </FlexCenter>
    </>
  );
}

export default FieldNews;

const Input = styled.input`
  border: none;
  background: none;
  color: white; /* 입력 텍스트 색상을 화이트로 설정 */
  opacity: 1; /* 필요에 따라 조정 */

  ::placeholder {
    color: white !important; /* !important를 사용하여 우선순위 증가 */
  }
`;

const P = styled.p`
  border-bottom: solid;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  border-bottom: solid;
  align-items: center;
  justify-content: space-between;
`;

const ScrollInfo = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.white};
`;

const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white; /* 원하는 색상으로 변경 */
  }
`;
