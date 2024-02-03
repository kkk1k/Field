import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const Form = styled.form`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  section {
    padding: 0 0 1rem 0;
  }
`;

const Container = styled.section`
  .notice {
    position: relative;
    p {
      position: absolute;
      color: #ff0202;
      font-size: 2rem;
      left: -1rem;
    }
  }
  h4 {
    margin: 0 0 0.5rem 0;
  }
  select {
    color: gray;
    margin: 0 0 0 1rem;
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
    padding: 0;
    width: 100%;
    height: 2rem;
    border: none;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 8rem;
    border: none;
    padding: 0.5rem;
  }
`;

const TypeContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const PhoneContainer = styled(Container)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  select {
    flex-grow: 1;
    margin: 0 1rem 0 0;
  }
  input {
    flex-grow: 1;
    width: 5rem;
    margin: 0 0.5rem;
    padding: 0 0.25rem;
  }
  .lastInput {
    margin-right: 0px;
  }
`;

const EmailContainer = styled(Container)`
  select {
    padding: 0.5em 0 0.5em 0;
    margin: 0 0 0 0.5rem;
    flex-grow: 1.5;
  }
  input {
    width: 30%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input:disabled {
    color: black;
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
  const patternPhone = /[0-9]{3}-[0-9]{4,}/;
  const [emailForm, setEmailForm] = useState("");
  const [emailBack, setEmailBack] = useState("");
  const [isModal, setIsModal] = useState(false);

  const [isNameValid, setIsNameValid] = useState(undefined);
  const [isPhoneValid, setIsPhoneValid] = useState(undefined);
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isTitleValid, setIsTitleValid] = useState(undefined);
  const [isContentValid, setIsContentValid] = useState(undefined);
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

  useEffect(() => {
    if (isNameValid && isPhoneValid && isEmailValid && isTitleValid && isContentValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isContentValid, isEmailValid, isNameValid, isPhoneValid, isTitleValid]);

  function emailBackHandler(event) {
    setEmailBack(event.target.value);
  }

  function emailFormHandler(event) {
    setEmailForm(event.target.value === "직접입력" ? "" : event.target.value);
  }

  function EnteredTextValid() {
    if (enteredName.current.value.trim() === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (enteredTitle.current.value.trim() === "") {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
    if (enteredText.current.value.trim() === "") {
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    if (
      !patternPhone.test(
        `${enteredSecondPhoneNumber.current.value}-${enteredThirdPhoneNumber.current.value}`,
      )
    ) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
    if (
      enteredFrontEmail.current.value.trim() === "" ||
      enteredBackEmail.current.value.trim() === ""
    ) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
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
      phoneNumber: `${enteredFirstPhoneNumber.current.value}-${enteredSecondPhoneNumber.current.value}-${enteredThirdPhoneNumber.current.value}`,
    };
    EnteredTextValid();
    setIsModal(true);
  }

  function modalCloseHandler() {
    setIsModal(false);

    if (isValid && agree) {
      window.location.reload();
    }
  }
  return (
    <>
      <Form onSubmit={event => enteredHandler(event)}>
        <TypeContainer>
          <h4>문의 유형</h4>

          <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredType}>
            <option value='후원'>후원</option>
            <option value='문의'>문의</option>
            <option value='기타'>기타</option>
          </select>
        </TypeContainer>

        <Container>
          {isNameValid === false ? (
            <span className='notice'>
              <p>*</p>
            </span>
          ) : null}
          <h4>이름 (회사)</h4>
          <input type='text' ref={enteredName} />
        </Container>

        <PhoneContainer>
          {isPhoneValid === false ? (
            <span className='notice'>
              <p>*</p>
            </span>
          ) : null}
          <h4>연락처</h4>

          <div>
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
            <input type='text' maxLength='4' pattern='\d*' ref={enteredSecondPhoneNumber} />-
            <input
              type='text'
              maxLength='4'
              pattern='\d*'
              ref={enteredThirdPhoneNumber}
              className='lastInput'
            />
          </div>
        </PhoneContainer>

        <EmailContainer>
          {isEmailValid === false ? (
            <span className='notice'>
              <p>*</p>
            </span>
          ) : null}
          <h4>Email</h4>
          <div>
            <input type='text' ref={enteredFrontEmail} />@
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
          </div>
        </EmailContainer>

        <Container>
          {isTitleValid === false ? (
            <span className='notice'>
              <p>*</p>
            </span>
          ) : null}
          <h4> 제목 </h4>
          <input type='text' ref={enteredTitle} />
        </Container>

        <Container>
          {isContentValid === false ? (
            <span className='notice'>
              <p>*</p>
            </span>
          ) : null}
          <h4> 내용 </h4>
          <textarea ref={enteredText} />
        </Container>

        <SubmitButton>
          <button type='submit'>등록!!!!</button>
        </SubmitButton>
      </Form>
      {isModal && (
        <ContactModal valid={isValid} agree={agree} onClose={() => modalCloseHandler()} />
      )}
    </>
  );
}

ContactForm.propTypes = {
  agree: PropTypes.bool.isRequired,
};
