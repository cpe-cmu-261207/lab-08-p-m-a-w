import React, { useContext, useEffect, useState } from "react";
import { PainterContext } from "../contexts/PainterContext";

const highlightStyle = {
  not_selected: {
    borderColor: "black",
    borderWidth: "2px",
  },
  selected: {
    borderColor: "magenta",
    borderWidth: "7px",
  }
};

export default function ColorPicker(props) {
  const color = props.color;
  const { selColor, setSelColor } = useContext(PainterContext);
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",
        ...(selColor === color ? highlightStyle.selected : highlightStyle.not_selected),
      }}
      onClick={() => {
        setSelColor(color);
      }}
    />
  );
}
