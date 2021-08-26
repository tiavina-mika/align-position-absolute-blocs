/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { cmToPx, zoom } from "./utils/utils";

const SPACING = 20;
const template = {
  width: 10,
  height: 10,
  backgroundColor: "red"
};

const classes = {
  frame: {
    // frame
    border: "1px solid #000000",
    boxSizing: "border-box",
    boxShadow: "0px 4px 24px rgba(23, 28, 88, 0.08)",
    borderRadius: 15,
    position: "relative"
  },
  bundledTemplate: (template, index) => {
    const width = cmToPx(template.width);
    const height = cmToPx(template.height);
    return {
      height: zoom(template, height),
      width: zoom(template, width),
      position: "absolute",
      // top: index > 6 ? zoom(template, cmToPx(template.height * index)) : 0,
      // left: index <= 6 ? zoom(template, cmToPx(template.width * index)) : 0,
      top: index > 5 ? zoom(template, height + SPACING) : 0,
      left: zoom(template, (width + SPACING) * (index - (index >= 5 ? 6 : 0))),
      backgroundColor:
        template.backgroundColor === "transparent"
          ? "#fff"
          : template.backgroundColor
    };
  }
};

const Boxes = () => {
  return (
    <div css={classes.frame} className="flexRow">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val, index) => (
        <div key={index} css={classes.bundledTemplate(template, index)}>
          {val}
        </div>
      ))}
    </div>
  );
};

export default Boxes;
