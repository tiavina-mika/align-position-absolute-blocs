/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";

const template = {
  width: 75,
  height: 75,
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
  bundledTemplate: (template, index) => ({
    height: template.height,
    width: template.width,
    position: "absolute",
    top: index > 5 ? template.height + 10 : 0,
    left:
      index >= 5
        ? (template.width + 10) * (index - 6)
        : (template.width + 10) * index,
    backgroundColor:
      template.backgroundColor === "transparent"
        ? "#fff"
        : template.backgroundColor
  })
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
