import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";
import theme from "../../theme";
import {Para} from "./ContactStyle";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  80%{
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black};
  height: 25%;
  width: 60%;
  border-radius: 2rem;
  animation: ${slideDownAnimation} 0.5s ease-in-out;
`;

const ModalPara = styled(Para)`
  font-size: 0.8rem;
  margin: 0.7rem;
`;

const ModalButton = styled.button`
  appearance: none;
  font-size: 1rem;
  color: ${theme.colors.white};
  margin: 1rem 0 0 0;
  background: ${theme.colors.gray};
  border: none;
  padding: 0.4rem 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LoadingBar = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  border: 0.2rem solid transparent;
  border-top-color: ${theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 0.5s linear infinite;
`;

const portalElement = document.getElementById("contact-modal");

export default function ContactModal(props) {
  const {onClose, valid, agree, loading, error} = props;
  let content;
  if (loading) {
    content = (
      <>
        <LoadingBar />
        <ModalPara>저장중입니다 잠시만 기다려주세요</ModalPara>
      </>
    );
  } else if (error && valid && agree) {
    content = (
      <>
        <ModalPara>실행에 실패하였습니다.</ModalPara>
        <ModalPara>잠시후 다시 시도해주세요.</ModalPara>
      </>
    );
  } else if (valid && agree) {
    content = (
      <>
        <ModalPara>소중한 의견 감사합니다.</ModalPara>
        <ModalPara>추후에 메일로 연락드리겠습니다.</ModalPara>
      </>
    );
  } else if (valid && !agree) {
    content = (
      <>
        <ModalPara>개인정보 수집 이용에 관하여</ModalPara>
        <ModalPara>동의하지 않으면 등록이 불가능합니다.</ModalPara>
      </>
    );
  } else {
    content = (
      <>
        <ModalPara>형식에 맞지 않는 부분이있습니다.</ModalPara>
        <ModalPara>체크된 항목을 다시 작성해주세요.</ModalPara>
      </>
    );
  }

  function messageBox() {
    return (
      <ModalBackground>
        <Modal>
          {content}
          <ModalButton type='button' onClick={onClose}>
            확인하기
          </ModalButton>
        </Modal>
      </ModalBackground>
    );
  }

  return createPortal(messageBox(), portalElement);
}

ContactModal.propTypes = {
  agree: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
