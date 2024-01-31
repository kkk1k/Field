import React, {useState} from "react";
import {Pagination, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import styled from "styled-components";
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
  const [monthField, setMonthField] = useState("");
  const firstItemPerPage = (currentPage - 1) * itemPerPage;
  const lastItemPerPage = firstItemPerPage + 9;
  const currentItemPerPage = newsArr.slice(firstItemPerPage, lastItemPerPage + 1);
  const handlePageChage = (event, page) => {
    setCurrentPage(page);
  };
  const handleMonthChange = event => {
    setMonthField(event.target.value);
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
      <CustomFormControl variant='outlined' sx={{m: 1, minWidth: 350}}>
        <CustomInputLabel id='demo-simple-select-helper-label'>월간 필드</CustomInputLabel>
        <CustomSelect
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          onChange={handleMonthChange}
          value={monthField}
          label='월간 필드'
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            style: {
              left: "-8px", // 드롭다운의 왼쪽 위치를 조정
              top: "20px", // 드롭다운의 상단 위치를 조정 (필요한 경우)
            },
            getContentAnchorEl: null, // 드롭다운의 위치를 anchorOrigin에 맞게 조정하기 위해 필요할 수 있습니다.
          }}
        >
          <MenuItem value='1월'>1월</MenuItem>
          <MenuItem value='2월'>2월</MenuItem>
          <MenuItem value='3월'>3월</MenuItem>
        </CustomSelect>
      </CustomFormControl>
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

const CustomFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white; // 테두리 색상을 하얀색으로 변경
    }
    &:hover fieldset {
      border-color: white; // 호버 시 테두리 색상을 하얀색으로 변경
    }
    &.Mui-focused fieldset {
      border-color: white; // 포커스 시 테두리 색상을 하얀색으로 변경
      color: white;
    }
  }
`;

const CustomInputLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    color: white; // 원하는 색상으로 변경
  }
`;

const CustomSelect = styled(Select)`
  .MuiSelect-select {
    // Material UI 내부 클래스에 스타일 적용
    color: white;
    padding-left: 20px;
  }
  .MuiSelect-icon {
    // 드롭다운 아이콘 스타일 변경
    color: white;
  }
`;
