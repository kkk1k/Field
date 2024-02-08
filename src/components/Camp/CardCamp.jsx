import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import Dropdown from "../Dropdown";
import H2 from "../../styles/H2";
import {CampApi, CampyearApi} from "../../lib/Apiservice";
import Image from "../../styles/Image";
import Span from "../../styles/Span";
import SwiperContainer from "../../styles/SwiperContainer";
import FlexCenter from "../../styles/FlexCenter";

function CardCamp() {
  const [year, setYear] = useState(2023);
  const [campYearData, setCampYearData] = useState([]);
  const [campData, setCampData] = useState([]);
  const handleYearChange = value => {
    setYear(value);
  };

  const getYearData = async () => {
    try {
      const response = await CampyearApi();
      const years = response.map(item => item.year);
      setCampYearData(years);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getYearData();
  }, []);

  const imageUrl = `${process.env.REACT_APP_URL}api/files/chlj2bc39fagbcf/`;
  const getData = async () => {
    try {
      const response = await CampApi(year);
      setCampData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [year]);

  return (
    <>
      <FlexCenter>
        <H2>역대 FieldCamp</H2>
        <Dropdown label='년도별 캠프' menuItemList={campYearData} onChange={handleYearChange} />
      </FlexCenter>
      {/* 조건부 렌더링 + 중첩 map 사용 */}
      {campData.length > 0 ? (
        campData.map(camp => (
          <>
            <H2>{camp.topic} topic</H2>
            <SwiperContainer>
              <Swiper slidesPerView={1.2} spaceBetween={10} centeredSlides='true'>
                {camp.file.map((file, idx) => (
                  <SwiperSlide>
                    <Image
                      width='100%'
                      src={`${imageUrl}${camp.id}/${file}`}
                      alt={`camp-image-${idx}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperContainer>
          </>
        ))
      ) : (
        <Span mt='2rem' size='1.5rem'>
          아직 준비되지 않았습니다.
        </Span> // 데이터가 없을 경우 표시할 메시지
      )}
    </>
  );
}

export default CardCamp;
