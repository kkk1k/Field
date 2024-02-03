import React, {useState} from "react";
import styled from "styled-components";
import {Pagination} from "@mui/material";
import Dropdown from "../components/Dropdown";
import H2 from "../styles/H2";
import Image from "../styles/Image";
import searchIcon from "../assets/Search.png";
import FlexCenter from "../styles/FlexCenter";
import scrollDown from "../assets/transfer-down-light.svg";
import H3 from "../styles/H3";

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
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const firstItemPerPage = (currentPage - 1) * itemPerPage;
  const lastItemPerPage = firstItemPerPage + 9;
  const currentItemPerPage = newsArr.slice(firstItemPerPage, lastItemPerPage + 1);
  const handlePageChage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <H2>NEWS</H2>
      <Div>
        <Input placeholder='검색어를 입력해주세요' />
        <Image src={searchIcon} width='20px' height='20px' />
      </Div>
      {currentItemPerPage.map(item => (
        <P>{item.title}</P>
      ))}
      <CustomPagination
        itemsCountPerPage={10}
        count={Math.ceil(newsArr.length / 10)}
        color='primary'
        defaultPage={1}
        onChange={handlePageChage}
      />
      <FlexCenter position='relative'>
        <ScrollInfo>아래로 스크롤하세요.</ScrollInfo>
        <Image
          src={scrollDown}
          width='1.875rem'
          height='1.875rem'
          object-fit='cover'
          alt='아래로 스크롤하세요'
        />
      </FlexCenter>
      <H3Wrapper>
        <H3>월간필드</H3>
      </H3Wrapper>
      <Dropdown label='월간' menuItemList={["1월", "2월", "3월"]} />
    </>
  );
}

export default FieldNews;

const H3Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: white;
  opacity: 1;
  padding: 10px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }
`;

const P = styled.p`
  border-bottom: 1px solid;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: white;
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
