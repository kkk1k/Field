import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import PocketBase from "pocketbase";
import {Swiper, SwiperSlide} from "swiper/react";
import Dropdown from "../Dropdown";
import {NewsMonthApi} from "../../lib/Apiservice";
import Image from "../../styles/Image";
import Span from "../../styles/Span";

const pb = new PocketBase(process.env.REACT_APP_URL);
function MonthField({data}) {
  const titleList = data.map(item => item.title);
  const [title, setTitle] = useState("");
  const [newsMonth, setNewsMonth] = useState([]);
  console.log(titleList[titleList.length - 1]);
  const getData = async id => {
    try {
      const response = await NewsMonthApi(id);
      setNewsMonth(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(pb);
  console.log(process.env.REACT_APP_URL);
  useEffect(() => {
    console.log(data[data.length - 1].id);
    getData(data[data.length - 1].id);
    console.log("asdasd");
  }, [data]);
  console.log(newsMonth);
  const imageUrl = `${process.env.REACT_APP_URL}api/files/damzbyg116zhar4/`;

  const handleTitleChange = value => {
    setTitle(value);
    const dataId = data.filter(item => item.title === value);
    console.log(dataId[0].id);
    getData(dataId[0].id);
  };
  return (
    <>
      <Dropdown label='월간캠프' menuItemList={titleList} onChange={handleTitleChange} />
      {newsMonth.length > 0 ? (
        newsMonth.map(month => (
          <Swiper>
            {month.photo.map((field, idx) => (
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
      id: PropTypes.string,
    }),
  ).isRequired,
};
