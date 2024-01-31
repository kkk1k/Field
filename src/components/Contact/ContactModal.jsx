import React from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;

  p {
    color: red;
  }

  button {
    color: blue;
    margin: 1rem;
    backgroud: black;
  }
`;

// const Message = <Modal>그냥좀 돼</Modal>;

const portalElement = document.getElementById("contact-modal");

export default function ContactModal(props) {
  const {onClose} = props;

  function messageBox() {
    return (
      <Modal>
        <p>정상적으로 저장되었습니다.</p>
        <button type='button' onClick={onClose}>
          닫기
        </button>
      </Modal>
    );
  }

  return createPortal(messageBox(), portalElement);
}
