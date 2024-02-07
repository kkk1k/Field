import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import H2 from "../../styles/H2";

function Line() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div
        style={{
          backgroundColor: theme.colors.white,
          width: "80%",
          height: "0.05rem",
          display: "flex",
          margin: "0.5rem 0 1rem 0 ",
          alignItems: "center",
          borderRadius: "10%",
        }}
      />
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: left;
    font-size: 0.75rem;
    margin: 5% 10%;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 0.75rem;
  .last {
    margin: 0 0 0 4rem;
  }
  input {
    margin: 0 0.2rem 0 0;
  }
`;

const InputText = styled.p`
  font-size: 0.75rem;
  color: #ff0202;
  text-align: center;
`;

export default function ContactContent(props) {
  const {onAgree} = props;
  const [isCheckedAgree, setIsCheckedAgree] = useState(false);
  const [isCheckedDisagree, setIsCheckedDisagree] = useState(true);

  const checkAgreeHandler = () => {
    setIsCheckedAgree(true);
    setIsCheckedDisagree(false);
    onAgree(true);
  };

  const checkDisagreeHandler = () => {
    setIsCheckedAgree(false);
    setIsCheckedDisagree(true);
    onAgree(false);
  };

  return (
    <>
      <H2>CONTACT</H2>
      <Content>
        <p>
          &apos;전국 대학생 산업공학도 모임 FIELD&apos; 는 고객님의 개인정보를 중요시하며,
          &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
        </p>
        <p>
          개인정보의 수집 및 이용 목적문의 내역의 확인 및 요청사항 처리 회신 또는 완료 시 원활한
          의사소통 경로 확보를 위해 수집하고 있습니다.
        </p>
        <p>
          수집하는 개인정보의 항목이름(실사용자명), 연락처, E-mail, 우편번호, 개인정보의 보유기간 및
          이용기간문의 접수 ~ 처리 완료 후 6개월 보관 후 파기
        </p>
        <p>그 외 사항은 개인정보취급방침을 준수합니다.</p>
      </Content>
      <Line />
      <InputText> ※ 개인정보 수집이용에 동의하지 않으면 문의가 불가능합니다.</InputText>
      <InputBox>
        <input type='checkbox' checked={isCheckedAgree} onChange={checkAgreeHandler} />
        동의함
        <input
          className='last'
          type='checkbox'
          checked={isCheckedDisagree}
          onChange={checkDisagreeHandler}
        />
        동의하지 않음
      </InputBox>
      <Line />
    </>
  );
}
ContactContent.propTypes = {
  onAgree: PropTypes.func.isRequired,
};
