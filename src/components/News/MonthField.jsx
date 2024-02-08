import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Swiper, SwiperSlide} from "swiper/react";
import Dropdown from "../Dropdown";
import {NewsMonthApi} from "../../lib/Apiservice";
import Image from "../../styles/Image";
import Span from "../../styles/Span";

function MonthField({data}) {
  const titleList = data.map(item => item.Title);
  const [newsMonth, setNewsMonth] = useState([]);
  const [title, setTitle] = useState("");

  const getData = async () => {
    try {
      const response = await NewsMonthApi(title);
      setNewsMonth(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [title]);
  useEffect(() => {
    getData();
  }, []);

  const imageUrl = `${process.env.REACT_APP_URL}api/files/damzbyg116zhar4/`;

  const handleTitleChange = value => {
    setTitle(value); // 이제 setTitle 호출 후 title 상태 변경을 기다릴 필요 없이, useEffect가 처리합니다.
  };
  return (
    <>
      <Dropdown label='월간캠프' menuItemList={titleList} onChange={handleTitleChange} />
      {newsMonth.length > 0 ? (
        newsMonth.map(month => (
          <Swiper>
            {month.field.map((field, idx) => (
              <SwiperSlide>
                <Image
                  width='100%'
                  src={`${imageUrl}${month.id}/${field}`}
                  alt={`news-image-${idx}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))
      ) : (
        <Span>암거나 눌러주세요</Span>
      )}
    </>
  );
}

export default MonthField;

MonthField.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string, // 객체 내 Title 필드의 타입을 string으로 명시
    }),
  ).isRequired,
};
