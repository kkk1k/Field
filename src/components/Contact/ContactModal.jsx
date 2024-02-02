import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";
import theme from "../../theme";

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  75%{
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const ModalBackground = styled.div`
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  background-color: ${theme.colors.black};
  height: 25%;
  width: 60%;
  border-radius: 2rem;
  animation: ${slideDownAnimation} 0.5s ease-in-out;

  p {
    padding: 0.5rem;
    font-size: 0.75rem;
    color: ${theme.colors.white};
  }

  button {
    appearance: none;
    font-size: 1rem;
    color: ${theme.colors.white};
    margin: 2rem 0 0 0;
    background: ${theme.colors.gray};
    border: none;
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
  }
  button:hover {
    cursor: pointer;
  }
`;

// const Message = <Modal>그냥좀 돼</Modal>;

const portalElement = document.getElementById("contact-modal");

export default function ContactModal(props) {
  const {onClose, isValid} = props;

  function messageBox() {
    return (
      <ModalBackground>
        <Modal>
          {isValid ? (
            <>
              <p>소중한 의견 감사합니다.</p>
              <p>추후에 메일로 연락드리겠습니다.</p>
            </>
          ) : (
            <>
              <p>개인정보 수집 이용에 관하여</p>
              <p>동의하지 않으면 등록이 불가능합니다.</p>
            </>
          )}
          <button type='button' onClick={onClose}>
            확인하기
          </button>
        </Modal>
      </ModalBackground>
    );
  }

  return createPortal(messageBox(), portalElement);
}

ContactModal.propTypes = {
  isValid: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
