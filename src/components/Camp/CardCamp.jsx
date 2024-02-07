import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import Dropdown from "../Dropdown";
import H2 from "../../styles/H2";
import CampApi from "../../lib/Apiservice";
import Image from "../../styles/Image";

function CardCamp() {
  const [year, setYear] = useState(2023);
  const [campData, setCampData] = useState([]);
  const handleYearChange = value => {
    setYear(value);
  };
  const imageUrl = `${process.env.REACT_APP_URL}api/files/chlj2bc39fagbcf/`;
  const getData = async () => {
    try {
      const response = await CampApi(year);
      setCampData(response);
      console.log(response[0].file);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [year]);

  return (
    <>
      <H2>역대 FieldCamp</H2>
      <Dropdown label='년도별 캠프' menuItemList={[2023, 2022, 2021]} onChange={handleYearChange} />
      {/* 조건부 렌더링 + 중첩 map 사용 */}
      {campData.length > 0 ? (
        campData.map((camp, index) => (
          <>
            <H2>{index + 1}등 topic</H2>
            <SwiperContainer>
              <Swiper slidesPerView={1} spaceBetween={10}>
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
        <p>데이터가 없습니다.</p> // 데이터가 없을 경우 표시할 메시지
      )}
    </>
  );
}

export default CardCamp;

const SwiperContainer = styled.div`
  width: ${props => (props.width ? props.width : "80%")};
`;
