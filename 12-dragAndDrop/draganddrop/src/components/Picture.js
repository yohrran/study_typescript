import React from "react";
import { useDrag } from "react-dnd";

function Picture({ img, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <img
        id={id}
        ref={drag}
        src={img}
        alt="사진"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </>
  );
}

export default Picture;
