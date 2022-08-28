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
  console.log("section:::::::::::::::::::::::", date);

  const showDate = ({ text, title, body }: ShowDate) => {
    switch (text) {
      case "Image":
        return (
          <div>
            <img src={body} alt="title" />
            <h2>{title}</h2>
          </div>
        );
      case "Video":
        return (
          <div>
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
          </div>
        );
      case "Note":
        return (
          <div>
            <h1>{title}</h1>
            <h2>{body}</h2>
          </div>
        );
      default:
        return (
          <div>
            <h1>{title}</h1>
            <h3>-{body}</h3>
          </div>
        );
    }
  };

  const deleteButton = (e: CustomMouseEvent) => {
    setDate(date.filter((el, i) => i.toString() !== e.currentTarget.id));
  };

  return (
    <>
      {date.map((el, i) => (
        <div key={i}>
          <div>{showDate(el)}</div>
          <CloseButton type="button" id={i.toString()} onClick={deleteButton}>
            X
          </CloseButton>
        </div>
      ))}
    </>
  );
}

export default Section;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
