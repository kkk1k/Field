import React, {useRef, useState} from "react";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const Title = styled.p`
  margin: 0.5rem 0 0.2rem 0;
`;

const Form = styled.form`
  width: 80vw;
  margin: 2rem 3rem;
  display: flex;
  flex-direction: column;
  section {
    padding: 0 0 0.5rem 0;
    justify-content: left;
  }
`;

const Type = styled.section`
  display: flex;
  align-items: center;
  select {
    color: gray;
    margin: 0 0 0 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 4rem;
    padding: 0.5em 0.3em;
    appearance: none;
    background: url("downward-arrow.png") no-repeat 95% 50%;
    background-size: 20px 20px;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 0.9rem;
  }
`;

const PhoneContanier = styled.section`
  display: flex;
  align-items: center;

  select {
    color: gray;
    margin: 0 1rem 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 3.5rem;
    padding: 0.5em 0.3em;
    appearance: none;
    background: url("downward-arrow.png") no-repeat 95% 50%;
    background-size: 20px 20px;
    border: none;
    border-bottom: 2px solid gray;
    font-size: 0.9rem;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 5rem;
    border: none;
    height: 2rem;
    margin: 0 0.7rem;
  }
`;

const EmailContanier = styled(PhoneContanier)`
  select {
    margin: 0 0 0 0.5rem;
    width: 5.5rem;
  }
  input:disabled {
    color: black;
  }
  input {
    width: 5rem;
    margin: 0;
  }
`;

const TextBox = styled.section`
  input {
    width: 90%;
    height: 1.5rem;
  }
`;

const TextAreaBox = styled.section`
  textarea {
    width: 90%;
    height: 5rem;
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
    width: 5rem;
    height: 2rem;
    margin: 0 0.5rem 0 0;
    background-color: gray;
  }
`;

export default function ContactForm() {
  const [emailForm, setEmailForm] = useState("");
  const [emailBack, setEmailBack] = useState("");
  const [isModal, setIsModal] = useState(false);

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

    console.log(summitedData);
    setIsModal(true);
  }

  function modalCloseHandler() {
    setIsModal(false);
  }

  return (
    <>
      <Form onSubmit={event => enteredHandler(event)}>
        <Type>
          <h4>문의 유형</h4>
          <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredType}>
            <option value='후원'>후원</option>
            <option value='닌뭔데'>닌뭔데</option>
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
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
          </select>
          -
          <input type='text' ref={enteredSecondPhoneNumber} />-
          <input type='text' ref={enteredThirdPhoneNumber} />
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
            <option value='gmail.com'>gmail.com</option>
            <option value='hello.com'>hello.com</option>
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
          <button type='submit'>제출하기!</button>
        </SubmitButton>
      </Form>
      {isModal && <ContactModal onClose={() => modalCloseHandler()} />}
    </>
  );
}
