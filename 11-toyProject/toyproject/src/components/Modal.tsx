import { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import { CustomMouseEvent } from "./Header";

export type ModalBaseProps = {
  children?: ReactElement;
  visible: boolean;
  onClose: () => void;
  onAdd: (e: CustomMouseEvent) => void;
};

function Modal({ children, visible, onClose, onAdd }: ModalBaseProps) {
  if (!visible) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Title>
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>
        </Title>
        <Content>{children}</Content>
        <Title>
          <AddButton type="button" onClick={onAdd}>
            add
          </AddButton>
        </Title>
      </ModalSection>
    </>
  );
}

export default Modal;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

const ModalSection = styled.div<{ visible: boolean }>`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: none;
  cursor: pointer;
`;
