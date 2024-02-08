import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import PocketBase from "pocketbase";
import styled from "styled-components";
import ContactModal from "./ContactModal";
import theme from "../../theme";

const Notice = styled.span`
  position: relative;

  &::before {
    content: "*";
    color: #ff0202;
    position: absolute;
    margin: 0;
    font-size: 1.5rem;
    left: -1rem;
  }
`;

const Label = styled.label`
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 0;
  display: block;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  color: ${theme.colors.white};
  padding: 0.5rem 0;
`;

const TextBox = styled.textarea`
  box-sizing: border-box;
  color: ${theme.colors.white};
  width: 100%;
  height: 8rem;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgba(83, 83, 83, 0.5);
`;

const NomalSelect = styled.select`
  color: gray;
  margin: ${props => (props.mg ? props.mg : "0 0 0 1rem")};
  width: ${props => (props.wd ? props.wd : "5rem")};
  padding: ${props => (props.pd ? props.pd : "0.2em 0.5em")};
  appearance: none;
  background: url("down.png") no-repeat 100% 50%;
  background-size: 1.4rem 1rem;
  border: none;
  border-bottom: 0.125rem solid gray;
  font-size: ${props => (props.fs ? props.fs : "1rem")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NomalInput = styled.input`
  padding: 0;
  height: 2.4rem;
  width: ${props => (props.wd ? props.wd : "100%")};
  border: none;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: rgba(83, 83, 83, 0.5);
  font-size: ${props => (props.fs ? props.fs : "1rem")};
  color: rgba(255, 255, 255, 0.85);
  text-align: ${props => (props.ta ? props.ta : "")};
  &:disabled {
    background-color: rgba(83, 83, 83, 0.5);
    color: rgba(255, 255, 255, 0.85);
  }
`;

const TypeContainer = styled(Container)`
  display: flex;
  align-items: left;
`;

const Button = styled.button`
  margin: 0.5rem 0 0 0;
  padding: 1.2rem 0;
  font-size: 1rem;
  color: white;
  appearance: none;
  border: none;
  width: 6rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: #3064e9;
  border-right: 0.2rem solid #0436b6;
  border-bottom: 0.2rem solid #0436b6;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Option = styled.option``;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ContactForm({agree}) {
  const patternPhone = /[0-9]{3}-[0-9]{4,}/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [emailForm, setEmailForm] = useState("");
  const [emailBack, setEmailBack] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const [isNameValid, setIsNameValid] = useState(undefined);
  const [isPhoneValid, setIsPhoneValid] = useState(undefined);
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [isTitleValid, setIsTitleValid] = useState(undefined);
  const [isContentValid, setIsContentValid] = useState(undefined);

  const enteredType = useRef();
  const enteredName = useRef();
  const enteredFrontEmail = useRef();
  const enteredBackEmail = useRef();
  const enteredFirstPhoneNumber = useRef();
  const enteredSecondPhoneNumber = useRef();
  const enteredThirdPhoneNumber = useRef();
  const enteredText = useRef();
  const enteredTitle = useRef();

  function Message({type, name, title, text, email, phoneNumber}) {
    const pb = new PocketBase(process.env.REACT_APP_URL);
    return new Promise(resolve => {
      try {
        const data = {
          Name: name,
          Type: type,
          Phone: phoneNumber,
          Email: email,
          Title: title,
          Content: text,
        };
        console.log(pb);
        console.log(process.env.REACT_APP_URL);

        setLoading(true);

        pb.collection("Message")
          .create(data)
          .then(response => {
            resolve(response);
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setError(true);
      }
    });
  }

  function emailBackHandler(event) {
    setEmailBack(event.target.value);
  }

  function emailFormHandler(event) {
    setEmailForm(event.target.value === "직접입력" ? "" : event.target.value);
  }

  function enteredHandler(event) {
    event.preventDefault();
    let formIsValid = false;
    const nameIsValid = enteredName.current.value.trim() !== "";
    const titleIsValid = enteredTitle.current.value.trim() !== "";
    const contentIsValid = enteredText.current.value.trim() !== "";
    const phoneIsValid = patternPhone.test(
      `${enteredSecondPhoneNumber.current.value}-${enteredThirdPhoneNumber.current.value}`,
    );
    const emailIsValid = emailPattern.test(
      `${enteredFrontEmail.current.value}@${enteredBackEmail.current.value}`,
    );

    formIsValid = nameIsValid && titleIsValid && contentIsValid && phoneIsValid && emailIsValid;

    setIsNameValid(nameIsValid);
    setIsTitleValid(titleIsValid);
    setIsContentValid(contentIsValid);
    setIsPhoneValid(phoneIsValid);
    setIsEmailValid(emailIsValid);
    setIsValid(formIsValid);
    if (formIsValid && agree) {
      const summitedData = {
        type: enteredType.current.value,
        name: enteredName.current.value,
        title: enteredTitle.current.value,
        text: enteredText.current.value,
        email: `${enteredFrontEmail.current.value}@${enteredBackEmail.current.value}`,
        phoneNumber: `${enteredFirstPhoneNumber.current.value}-${enteredSecondPhoneNumber.current.value}-${enteredThirdPhoneNumber.current.value}`,
      };
      Message(summitedData);
    }
    setIsModal(true);
  }

  function modalCloseHandler() {
    setIsModal(false);
    setError(false);
    window.location.reload();
  }

  console.log(process.env.REACT_APP_URL);
  return (
    <>
      <Form onSubmit={event => enteredHandler(event)}>
        <TypeContainer>
          <Label htmlFor='type'>문의 유형</Label>
          <NomalSelect id='type' name='yourInpuType' fs='1rem' ref={enteredType} autocomplete='off'>
            <Option value='후원'>후원</Option>
            <Option value='문의'>문의</Option>
            <Option value='기타'>기타</Option>
          </NomalSelect>
        </TypeContainer>

        <Container>
          {isNameValid === false ? <Notice /> : null}
          <Label for='name'>이름 (회사)</Label>
          <NomalInput type='text' id='name' name='name' ref={enteredName} autocomplete='name' />
        </Container>

        <Container>
          {isPhoneValid === false ? <Notice /> : null}
          <Label htmlFor='phone'>연락처 </Label>
          <Wrapper>
            <NomalSelect
              wd='20%'
              pd='0.5rem 0 0.5rem 0.2rem'
              mg='0.5rem 0'
              id='phone'
              name='firstPhoneNumber'
              ref={enteredFirstPhoneNumber}
              autocomplete='off'
            >
              <Option value='010'>010</Option>
              <Option value='02'>02</Option>
              <Option value='032'>032</Option>
              <Option value='033'>033</Option>
              <Option value='041'>041</Option>
              <Option value='042'>042</Option>
              <Option value='043'>043</Option>
              <Option value='044'>044</Option>
              <Option value='051'>051</Option>
              <Option value='052'>052</Option>
              <Option value='053'>053</Option>
              <Option value='054'>054</Option>
              <Option value='011'>010</Option>
              <Option value='016'>01</Option>
              <Option value='017'>02</Option>
              <Option value='018'>03</Option>
              <Option value='019'>03</Option>
              <Option value='070'>03</Option>
            </NomalSelect>
            -
            <NomalInput
              id='secondPhoneNumber'
              name='secondPhoneNumber'
              ta='center'
              wd='30%'
              type='text'
              maxLength='4'
              pattern='\d*'
              ref={enteredSecondPhoneNumber}
              autocomplete='phone'
            />
            -
            <NomalInput
              id='lastPhoneNumber'
              name='lastPhoneNumber'
              ta='center'
              wd='30%'
              type='text'
              maxLength='4'
              pattern='\d*'
              ref={enteredThirdPhoneNumber}
              className='lastInput'
              autocomplete='phone'
            />
          </Wrapper>
        </Container>

        <Container>
          {isEmailValid === false ? <Notice /> : null}
          <Label htmlFor='email'>Email</Label>
          <Wrapper>
            <NomalInput
              wd='28%'
              type='text'
              id='email'
              name='frontEmail'
              ref={enteredFrontEmail}
              autocomplete='email'
            />
            @
            {emailForm === "" ? (
              <NomalInput
                fs='0.9rem'
                id='backEmail'
                name='backEmail'
                wd='28%'
                pd='0 0'
                type='text'
                value={emailBack}
                autocomplete='email'
                onChange={e => {
                  emailBackHandler(e);
                }}
                ref={enteredBackEmail}
              />
            ) : (
              <NomalInput
                id='backEmail'
                name='backEmail'
                pd='0 0'
                wd='28%'
                type='text'
                value={emailForm}
                disabled
                ref={enteredBackEmail}
                autocomplete='email'
              />
            )}
            <NomalSelect
              id='backEmailSelect'
              name='backEmailSelect'
              wd='30%'
              pd='0.3rem 0.2rem 0.3rem 0'
              mg='0 0 0 0'
              value={emailForm}
              onChange={e => {
                emailFormHandler(e);
              }}
            >
              <Option value=''>직접입력</Option>
              <Option value='naver.com'>naver.com</Option>
              <Option value='daum.net'>daum.net</Option>
              <Option value='gmail.com'>gmail.com</Option>
              <Option value='nate.com'>nate.com</Option>
              <Option value='yahoo.co.kr'>yahoo.co.kr</Option>
            </NomalSelect>
          </Wrapper>
        </Container>

        <Container>
          {isTitleValid === false ? <Notice /> : null}
          <Label htmlFor='title'> 제목 </Label>
          <NomalInput id='title' name='title' type='text' ref={enteredTitle} autocomplete='off' />
        </Container>

        <Container>
          {isContentValid === false ? <Notice /> : null}
          <Label htmlFor='content'> 내용 </Label>
          <TextBox id='content' name='content' ref={enteredText} autocomplete='off' />
        </Container>

        <SubmitButton>
          <Button type='submit'>등록</Button>
        </SubmitButton>
      </Form>
      {isModal && (
        <ContactModal
          valid={isValid}
          agree={agree}
          loading={loading}
          error={Error}
          onClose={() => modalCloseHandler()}
        />
      )}
    </>
  );
}

ContactForm.propTypes = {
  agree: PropTypes.bool.isRequired,
};
