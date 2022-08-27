import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleOpenModal = (e: CustomMouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    setText(eventTarget.innerText);
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  const setModalChildren = () => {
    switch (text) {
      case "Image":
        return (
          <div>
            <label>Title</label>
            <input type="text" name="text" />
            <label>Url</label>
            <input type="text" name="text" />
          </div>
        );
      case "Video":
        return (
          <div>
            <h1>Video</h1>
          </div>
        );
      case "Note":
        return (
          <div>
            <h1>Note</h1>
          </div>
        );
      default:
        return (
          <div>
            <h1>Task</h1>
          </div>
        );
    }
  };

  return (
    <HeadContainer>
      <HeadBox>
        <Head>MOTION</Head>
        <ButtonContainer>
          <button onClick={handleOpenModal}>Image</button>
          <button onClick={handleOpenModal}>Video</button>
          <button onClick={handleOpenModal}>Note</button>
          <button onClick={handleOpenModal}>Task</button>
          <Modal visible={isOpen} onClose={handleCloseModal}>
            {setModalChildren()}
          </Modal>
        </ButtonContainer>
      </HeadBox>
    </HeadContainer>
  );
}
export default Header;

const HeadContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: black;
`;
const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.h1`
  color: white;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
