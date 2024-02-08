import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputSection = styled.section`
  margin: 5% 0;
  padding: 5% 0;
  border-top: 0.2rem solid gray;
  border-bottom: 0.2rem solid gray;
`;
const Label = styled.label``;

const InputF = styled.input`
  margin: 0 0.2rem 0 0;
`;

const InputL = styled.input`
  margin: 0 0.2rem 0 4rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1rem;
`;

const InputText = styled.p`
  font-size: 0.75rem;
  color: #ff0202;
  text-align: center;
`;

export default function ContactAgree(props) {
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
    <InputSection>
      <InputText> ※ 개인정보 수집이용에 동의하지 않으면 문의가 불가능합니다.</InputText>
      <InputBox>
        <InputF
          id='agree'
          name='agree'
          type='checkbox'
          checked={isCheckedAgree}
          onChange={checkAgreeHandler}
        />
        <Label htmlFor='agree'>동의함</Label>
        <InputL
          id='disagree'
          name='disagree'
          type='checkbox'
          checked={isCheckedDisagree}
          onChange={checkDisagreeHandler}
        />
        <Label htmlFor='disagree'>동의하지 않음</Label>
      </InputBox>
    </InputSection>
  );
}

ContactAgree.propTypes = {
  onAgree: PropTypes.func.isRequired,
};
