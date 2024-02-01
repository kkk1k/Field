import React from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import theme from "../../theme";

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #535353;
  height: 20%;
  width: 50%;

  p {
    padding: 1.5rem;
    font-size: 1.5rem;
    color: ${theme.colors.white};
  }

  button {
    appearance: none;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    margin: 1rem;
    background: ${theme.colors.black};
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
  const {onClose} = props;

  function messageBox() {
    return (
      <ModalBackground>
        <Modal>
          <p>등록되었습니다.</p>
          <button type='button' onClick={onClose}>
            확인
          </button>
        </Modal>
      </ModalBackground>
    );
  }

  return createPortal(messageBox(), portalElement);
}
