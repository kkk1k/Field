import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "swiper/swiper-bundle.css";
import {Pagination} from "@mui/material";
import H2 from "../styles/H2";
import CategoryButton from "../components/CategoryButton";
import {NewsApi} from "../lib/Apiservice";
import MonthField from "../components/News/MonthField";
import H3 from "../styles/H3";

function FieldNews() {
  const [selectCategory, setSelectCategory] = useState("월간필드");
  const category = ["월간필드", "취업/진로", "대외활동", "FIELD"];
  const [newsList, setNewsList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const getData = async () => {
    try {
      const response = await NewsApi(selectCategory);
      const title = response.map(item => item.Title);
      console.log(title);
      setTitleList(title);
      setNewsList(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [selectCategory]);

  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const firstItemPerPage = (currentPage - 1) * itemPerPage;
  const lastItemPerPage = firstItemPerPage + 9;
  const currentItemPerPage = titleList.slice(firstItemPerPage, lastItemPerPage + 1);
  console.log(currentItemPerPage);
  const handlePageChage = (event, page) => {
    setCurrentPage(page);
  };
  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  return (
    <>
      <H2>NEWS</H2>
      {category.map(item => (
        <CategoryButton
          label={item}
          isActive={selectCategory === item}
          onClick={() => handleButtonClick(item)}
        />
      ))}
      {selectCategory !== null && selectCategory === "월간필드" ? (
        <MonthField data={newsList} />
      ) : (
        <>
          <H3 margin='2rem 0 2rem 0'>{selectCategory}</H3>
          {newsList.map(item => (
            <Link to={`/detail/${item.id}`}>
              <P>{item.Title}</P>
            </Link>
          ))}
          <CustomPagination
            itemsCountPerPage={10}
            count={Math.ceil(titleList.length / 10)}
            color='primary'
            defaultPage={1}
            onChange={handlePageChage}
          />
        </>
      )}
    </>
  );
}

export default FieldNews;

const P = styled.p`
  border-bottom: 1px solid;
  padding: 10px;
  color: white;
`;

const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white; /* 원하는 색상으로 변경 */
  }
`;
