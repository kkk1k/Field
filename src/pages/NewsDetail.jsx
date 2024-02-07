import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {NewsDetailApi} from "../lib/Apiservice";
import H2 from "../styles/H2";
import Span from "../styles/Span";

function NewsDetail() {
  const {id} = useParams();
  const [detailData, setDetailData] = useState([]);
  const getData = async () => {
    try {
      const response = await NewsDetailApi(id);
      setDetailData(response);
      console.log(response);
      console.log(response[0].Content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <H2>News</H2>
      {detailData.length > 0 ? <Span>{detailData[0].Content}</Span> : <Span>로딩중입니다</Span>}
    </>
  );
}

export default NewsDetail;
