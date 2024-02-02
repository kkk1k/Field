import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.p`
  margin: 0.5rem 0 0.2rem 0;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  section {
    padding: 0 0 1rem 0;
    justify-content: left;
  }
`;

const Type = styled.section`
  display: flex;
  align-items: center;
  select {
    color: gray;
    margin: 0 0 0 0.8rem;
    -webkit-appearance: none;
    width: 5rem;
    padding: 0.5em 0.5em;
    appearance: none;
    background: url("downward-arrow.png") no-repeat 95% 50%;
    background-size: 1.5rem 1.5rem;
    border: none;
    border-bottom: 0.125rem solid gray;
    font-size: 1rem;
  }
  input {
  }
`;

const PhoneContanier = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  select {
    flex-grow: 1;
    color: gray;
    margin: 0 1rem 0 0;
    -webkit-appearance: none;
    padding: 0.5em 0.5em;
    appearance: none;
    background: url("downward-arrow.png") no-repeat 95% 50%;
    background-size: 20px 20px;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 0.9rem;
  }
  input {
    flex-grow: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 5rem;
    border: none;
    height: 2rem;
    margin: 0 0.5rem;
    padding: 0 0.25rem;
  }
  .lastInput {
    margin-right: 0px;
  }
`;

const EmailContanier = styled(PhoneContanier)`
  select {
    margin: 0 0 0 0.5rem;
  }
  input:disabled {
    color: black;
  }
  input {
    margin: 0;
  }
`;

const TextBox = styled.section`
  input {
    padding: 0;
    width: 100%;
    height: 2rem;
    border: none;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
  }
`;

const TextAreaBox = styled.section`
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 8rem;
    border: none;
    padding: 0.5rem;
  }
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 0.75rem;
    color: white;
    appearance: none;
    border: none;
    width: 20%;
    height: 2rem;
    background-color: gray;
  }
  button:hover {
    cursor: pointer;
  }
`;

export default function ContactForm({agree}) {
  const [emailForm, setEmailForm] = useState("");
  const [emailBack, setEmailBack] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const enteredType = useRef();
  const enteredName = useRef();
  const enteredFrontEmail = useRef();
  const enteredBackEmail = useRef();

  const enteredFirstPhoneNumber = useRef();
  const enteredSecondPhoneNumber = useRef();
  const enteredThirdPhoneNumber = useRef();
  const enteredText = useRef();
  const enteredTitle = useRef();

  function emailBackHandler(event) {
    setEmailBack(event.target.value);
  }

  function emailFormHandler(event) {
    setEmailForm(event.target.value === "직접입력" ? "" : event.target.value);
  }

  function EnteredTextValid(summitedData) {
    if (
      summitedData.name.trim() === "" ||
      summitedData.text.trim() === "" ||
      summitedData.email.trim() === ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function enteredHandler(event) {
    event.preventDefault();
    const summitedData = {
      type: enteredType.current.value,
      name: enteredName.current.value,
      title: enteredTitle.current.value,
      text: enteredText.current.value,
      email: `${enteredFrontEmail.current.value}@${enteredBackEmail.current.value}`,
      phoneNumber:
        enteredFirstPhoneNumber.current.value +
        enteredSecondPhoneNumber.current.value +
        enteredThirdPhoneNumber.current.value,
    };
    console.log(summitedData);
    EnteredTextValid(summitedData);

    setIsModal(true);
  }

  function modalCloseHandler() {
    setIsModal(false);
    if (isValid && agree) {
      enteredType.current.value = "후원";
      enteredName.current.value = "";
      enteredFirstPhoneNumber.current.value = "010";
      enteredSecondPhoneNumber.current.value = "";
      enteredThirdPhoneNumber.current.value = "";

      enteredFrontEmail.current.value = "";

      setEmailBack("");
      setEmailForm("");
      enteredBackEmail.current.value = "";
      enteredTitle.current.value = "";
      enteredText.current.value = "";
    }
  }
  return (
    <>
      <FormContainer>
        <Form onSubmit={event => enteredHandler(event)}>
          <Type>
            <h4>문의 유형</h4>
            <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredType}>
              <option value='후원'>후원</option>
              <option value='문의'>문의</option>
              <option value='기타'>기타</option>
            </select>
          </Type>

          <Title>이름 (회사)</Title>
          <TextBox>
            <input type='text' ref={enteredName} />
          </TextBox>

          <Title>연락처</Title>
          <PhoneContanier>
            <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredFirstPhoneNumber}>
              <option value='010'>010</option>
              <option value='02'>02</option>
              <option value='032'>032</option>
              <option value='033'>033</option>
              <option value='041'>041</option>
              <option value='042'>042</option>
              <option value='043'>043</option>
              <option value='044'>044</option>
              <option value='051'>051</option>
              <option value='052'>052</option>
              <option value='053'>053</option>
              <option value='054'>054</option>
              <option value='011'>010</option>
              <option value='016'>01</option>
              <option value='017'>02</option>
              <option value='018'>03</option>
              <option value='019'>03</option>
              <option value='070'>03</option>
            </select>
            -
            <input type='text' ref={enteredSecondPhoneNumber} />-
            <input type='text' ref={enteredThirdPhoneNumber} className='lastInput' />
          </PhoneContanier>

          <Title>E-mail</Title>
          <EmailContanier>
            <input type='text' ref={enteredFrontEmail} />
            <p style={{padding: "0.4rem"}}>@</p>
            {emailForm === "" ? (
              <input
                type='text'
                value={emailBack}
                onChange={emailBackHandler}
                ref={enteredBackEmail}
              />
            ) : (
              <input type='text' value={emailForm} disabled ref={enteredBackEmail} />
            )}
            <select
              id='emailAdrress'
              name='emailAdrress'
              value={emailForm}
              onChange={emailFormHandler}
            >
              <option value=''>직접입력</option>
              <option value='naver.com'>naver.com</option>
              <option value='daum.net'>daum.net</option>
              <option value='gmail.com'>gmail.com</option>
              <option value='nate.com'>nate.com</option>
              <option value='yahoo.co.kr'>yahoo.co.kr</option>
            </select>
          </EmailContanier>

          <Title> 제목 </Title>
          <TextBox>
            <input type='text' ref={enteredTitle} />
          </TextBox>

          <Title> 내용 </Title>
          <TextAreaBox>
            <textarea ref={enteredText} />
          </TextAreaBox>
          <SubmitButton>
            <button type='submit'>등록!!!!</button>
          </SubmitButton>
        </Form>
      </FormContainer>
      {isModal && <ContactModal isValid={isValid && agree} onClose={() => modalCloseHandler()} />}
    </>
  );
}

ContactForm.propTypes = {
  agree: PropTypes.bool.isRequired,
};
