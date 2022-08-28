import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { IDateProps } from "../App";
export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;

export interface IHeaderProps {
  date: IDateProps[];
  setDate: React.Dispatch<React.SetStateAction<IDateProps[]>>;
}

function Header({ date, setDate }: IHeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const setInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const setInputBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const setModalChildren = () => {
    switch (text) {
      case "Image":
        return (
          <>
            <label>Title</label>
            <input type="text" name="text" onChange={setInputTitle} />
            <label>Url</label>
            <input type="text" name="text" onChange={setInputBody} />
          </>
        );
      case "Video":
        return (
          <>
            <label>Video</label>
            <input type="text" name="text" onChange={setInputTitle} />
            <label>Url</label>
            <input type="text" name="text" onChange={setInputBody} />
          </>
        );
      case "Note":
        return (
          <>
            <label>Note</label>
            <input type="text" name="text" onChange={setInputTitle} />
            <label>Body</label>
            <input type="text" name="text" onChange={setInputBody} />
          </>
        );
      default:
        return (
          <>
            <label>Task</label>
            <input type="text" name="text" onChange={setInputTitle} />
            <label>Body</label>
            <input type="text" name="text" onChange={setInputBody} />
          </>
        );
    }
  };

  const handleOpenModal = (e: CustomMouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    setText(eventTarget.innerText);
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  const handleAddModal = (): void => {
    setDate([
      ...date,
      {
        text,
        title,
        body,
      },
    ]);
    setIsOpen(false);
  };

  return (
    <HeadContainer>
      <HeadBox>
        <Head>MOTION</Head>
        <ButtonContainer>
          <ButtonTag onClick={handleOpenModal}>Image</ButtonTag>
          <ButtonTag onClick={handleOpenModal}>Video</ButtonTag>
          <ButtonTag onClick={handleOpenModal}>Note</ButtonTag>
          <ButtonTag onClick={handleOpenModal}>Task</ButtonTag>
          <Modal
            visible={isOpen}
            onClose={handleCloseModal}
            onAdd={handleAddModal}
          >
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
  background-color: #cbba83;
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
const ButtonTag = styled.button`
  margin: 10px;
  font-size: 20px;
  background-color: #ffecb3;
  border: none;
`;
