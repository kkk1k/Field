import React from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 40%;
  height: 30%;

  p {
    color: red;
  }

  button {
    color: blue;
    margin: 1rem;
  }
`;

// const Message = <Modal>그냥좀 돼</Modal>;

const portalElement = document.getElementById("contact-modal");

export default function ContactModal(props) {
  const {onClose} = props;

  function messageBox() {
    return (
      <ModalBackground>
        <Modal>
          <p>정상적으로 저장되었습니다.</p>
          <button type='button' onClick={onClose}>
            닫기
          </button>
        </Modal>
      </ModalBackground>
    );
  }

  return createPortal(messageBox(), portalElement);
}
