import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import { IHeaderProps, CustomMouseEvent } from "./Header";

type ShowDate = {
  text: string;
  title: string;
  body: string;
};
function Section({ date, setDate }: IHeaderProps) {
  const showDate = ({ text, title, body }: ShowDate) => {
    switch (text) {
      case "Image":
        return (
          <BodySection>
            <img src={body} alt="title" />
            <h2>{title}</h2>
          </BodySection>
        );
      case "Video":
        return (
          <BodySection>
            <YouTube
              videoId={body}
              opts={{
                width: "560",
                height: "315",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
            <h2>{title}</h2>
          </BodySection>
        );
      case "Note":
        return (
          <BodySection>
            <p>제목</p>
            <h1>{title}</h1>
            <p>본문</p>
            <h2>{body}</h2>
          </BodySection>
        );
      default:
        return (
          <BodySection>
            <p>제목</p>
            <h1>{title}</h1>
            <p>ToDo</p>
            <h2>{body}</h2>
          </BodySection>
        );
    }
  };

  const handleDeleteButton = (e: CustomMouseEvent) => {
    setDate(date.filter((_, i) => i.toString() !== e.currentTarget.id));
  };

  return (
    <BoxContainer>
      {date.map((el, i) => (
        <BoxSection key={i}>
          <div>{showDate(el)}</div>
          <DeleteButton
            type="button"
            id={i.toString()}
            onClick={handleDeleteButton}
          >
            X
          </DeleteButton>
        </BoxSection>
      ))}
    </BoxContainer>
  );
}

export default Section;

const BoxContainer = styled.div`
  margin-top: 20px;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  top: 50%;
  left: 50%;
  background-color: #ffffe5;
  padding: 16px;
  margin: 10px;
`;

const BoxSection = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 30px;
`;
