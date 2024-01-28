import React, {useRef, useState} from "react";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const Form = styled.form`
  padding: 2rem;
  backgroud-color: white;
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
        <section>
          <h4>문의 유형</h4>
          <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredType}>
            <option value='후원'>후원</option>
            <option value='닌뭔데'>닌뭔데</option>
          </select>
        </section>

        <section>
          <h4>이름 (회사)</h4>
          <input type='text' ref={enteredName} />
        </section>

        <div>
          <h4>연락처</h4>
          <select id='firstPhoneNumber' name='firstPhoneNumber' ref={enteredFirstPhoneNumber}>
            <option value='010'>010</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
          </select>
          -
          <input type='text' ref={enteredSecondPhoneNumber} />-
          <input type='text' ref={enteredThirdPhoneNumber} />
        </div>

        <div>
          <h4>E-mail</h4>
          <input type='text' ref={enteredFrontEmail} /> @
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
        </div>

        <div>
          <h4> 제목 </h4>
          <input type='text' ref={enteredTitle} />
        </div>

        <div>
          <h4> 내용 </h4>
          <textarea ref={enteredText} />
        </div>
        <button type='submit'>Submit</button>
      </Form>
      {isModal && <ContactModal onClose={() => modalCloseHandler()} />}
    </>
  );
}
