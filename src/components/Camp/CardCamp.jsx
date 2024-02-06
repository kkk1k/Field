import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import H2 from "../../styles/H2";
import CampApi from "../../lib/Apiservice";

function CardCamp() {
  const [year, setYear] = useState(2023);
  const [campData, setCampData] = useState({});
  const getData = async () => {
    try {
      const response = await CampApi(2023);
      console.log(response);
      setCampData(response.data);
      console.log(campData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <H2>역대 FieldCamp</H2>
      <Dropdown label='년도별 캠프' menuItemList={["1월", "2월", "3월"]} />
      {/* <Image>asd</Image>
        <Image>asd</Image> */}
      <H2 color='yellow'>Time Line</H2>
    </>
  );
}

export default CardCamp;
