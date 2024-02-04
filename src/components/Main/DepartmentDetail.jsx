import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import Prototypes from "prop-types";
import Span from "../../styles/Span";
import Image from "../../styles/Image";
import FlexCenter from "../../styles/FlexCenter";
import CompetitionMain from "../../assets/CompetitionMain.jpg";
import ExternalMain from "../../assets/ExternalMain.jpg";
import PublicMain from "../../assets/PublicMain.jpg";
import PlanningMain from "../../assets/PlanningMain.png";
import Competition1 from "../../assets/Competition1.jpeg";
import Competition2 from "../../assets/Competition2.jpeg";
import Competition3 from "../../assets/Competition3.jpeg";
import External1 from "../../assets/External1.jpeg";
import External2 from "../../assets/External2.jpeg";
import External3 from "../../assets/External3.jpeg";
import External4 from "../../assets/External4.jpeg";
import Planning1 from "../../assets/Planning1.jpeg";
import Planning2 from "../../assets/Planning2.jpeg";
import Planning3 from "../../assets/Planning3.jpeg";
import Planning4 from "../../assets/Planning4.jpeg";
import Public1 from "../../assets/Public1.jpeg";
import Public2 from "../../assets/Public2.jpeg";
import SwiperContainer from "../../styles/SwiperContainer";

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid white;
  padding: 1rem;
  margin-top: 1rem;
`;

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid white;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

let departmentEnglish;
let activity;
let photo = [];

function DepartmentDetail({department}) {
  switch (department) {
    case "기획부":
      departmentEnglish = "Planning";
      activity = [
        "- FIELD 유튜브 콘텐츠 기획 및 촬영",
        "- FIELD CAMP 레크레이션",
        "- 산공인의 밤 기획 및 총괄",
        "- FIELD 내의 인적 교류를 위한 콘텐츠 기획",
      ];
      photo = [PlanningMain, Planning1, Planning2, Planning3, Planning4];
      break;
    case "대외협력부":
      departmentEnglish = "External cooperation";
      activity = [
        "- 기업 컨텍 및 대외업무 총괄",
        "- 고교 산업공학과 진로지도 강연",
        "- 산업공학과 출신 기업인 인터뷰",
        "- FIELD CAMP 인적 관리 및 조별 스태프 업무 수행",
      ];
      photo = [ExternalMain, External1, External2, External3, External4];
      break;
    case "컴페티션부":
      departmentEnglish = "Competition";
      activity = [
        "- FIELD 전체 회의 세미나",
        "- FIELD FIELD 스터디 주관",
        "- FIELD 내, 외부 학술교류 주관",
        "- FIELD CAMP 컴페티션 주제 선정",
        "- FIELD CAMP 컴페티션 심사 진행",
      ];
      photo = [CompetitionMain, Competition1, Competition2, Competition3];
      break;
    case "홍보부":
      departmentEnglish = "Public Relations";
      activity = [
        "- FIELD 홍보 카드뉴스 제작",
        "- 산업공학 홍보 카드뉴스 제작",
        "- FILED CAMP 홍보물 제작",
        "- FIELD 활동 촬영",
        "- FIELD 활동기록 책자 제작",
      ];
      photo = [PublicMain, Public1, Public2];
      break;
    default:
      break;
  }
  return (
    <FlexCenter ml='10%' mr='10%'>
      <Span size='1.25rem' mt='1rem' mb='1rem'>
        {department}
      </Span>
      <SwiperContainer ml='0' mr='0' width='100%'>
        <Swiper slidesPerView={1.1} spaceBetween={10}>
          {photo.map(pho => (
            <SwiperSlide>
              <Image src={pho} width='100%' radius='20px' height='250px' />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <TitleContainer>
        <Span size='1.5rem'>What&apos;s Activity</Span>
        <Span size='1.3rem'>{departmentEnglish} Department</Span>
      </TitleContainer>
      <DetailContainer>
        {activity.map(act => (
          <Span>{act}</Span>
        ))}
      </DetailContainer>
    </FlexCenter>
  );
}

DepartmentDetail.propTypes = {
  department: Prototypes.string.isRequired,
};

export default DepartmentDetail;
