import React from "react";
import styled from "styled-components";

import {Para, Content} from "./ContactStyle";

const ContentPara = styled(Para)`
  margin: 0 0 1.5rem 0;
`;

export default function ContactContent() {
  return (
    <Content>
      <ContentPara>
        &apos;전국 대학생 산업공학도 모임 FIELD&apos; 는 고객님의 개인정보를 중요시하며,
        &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
      </ContentPara>
      <ContentPara>
        개인정보의 수집 및 이용 목적문의 내역의 확인 및 요청사항 처리 회신 또는 완료 시 원활한
        의사소통 경로 확보를 위해 수집하고 있습니다.
      </ContentPara>
      <ContentPara>
        수집하는 개인정보의 항목이름(실사용자명), 연락처, E-mail, 우편번호, 개인정보의 보유기간 및
        이용기간문의 접수 ~ 처리 완료 후 6개월 보관 후 파기
      </ContentPara>
      <ContentPara>그 외 사항은 개인정보취급방침을 준수합니다.</ContentPara>
    </Content>
  );
}
