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
      console.log(id);
      const response = await NewsDetailApi(id);
      console.log(response);
      setDetailData(response);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(detailData.contents);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <H2>News</H2>
      {detailData ? <Span>{detailData.contents}</Span> : <Span>로딩중입니다</Span>}
    </>
  );
}

export default NewsDetail;
