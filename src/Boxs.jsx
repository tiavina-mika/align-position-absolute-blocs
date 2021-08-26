/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { cmToPx, zoom } from "./utils/utils";

const SPACING = 10; // in cm
const TEMPLATE_PER_LINE = 4;
const template = {
  width: 3,
  height: 3,
  backgroundColor: "red",
  layers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

const classes = {
  container: (template) => {
    console.log(cmToPx(template.height));
    console.log(cmToPx(template.height));
    const containerWidth = cmToPx(template.width * (TEMPLATE_PER_LINE + 1));
    const containerWidthMargins = containerWidth + SPACING * TEMPLATE_PER_LINE;
    return {
      width: zoom(template, containerWidthMargins + 20),
      height: 300,
      position: "relative",
      left: 0,
      border: "1px solid #000000",
      boxSizing: "border-box",
      boxShadow: "0px 4px 24px rgba(23, 28, 88, 0.08)",
      borderRadius: 15,
      overflow: "hidden"
    };
  },
  bundledTemplate: (template, index) => {
    const width = cmToPx(template.width);
    const height = cmToPx(template.height);
    const paddingTop = 20;
    const secondLineTop = zoom(template, height + SPACING + paddingTop * 2);
    return {
      height: zoom(template, height),
      width: zoom(template, width),
      position: "absolute",
      top: index > TEMPLATE_PER_LINE ? secondLineTop : paddingTop,
      left:
        index > TEMPLATE_PER_LINE
          ? zoom(
              template,
              (width + SPACING) * (index - (TEMPLATE_PER_LINE + 1))
            )
          : zoom(template, (width + SPACING) * index + 1),
      backgroundColor:
        template.backgroundColor === "transparent"
          ? template.backgroundColor
          : "#fff",

      border: "1px dashed #7885E9",
      boxSizing: "border-box",
      borderRadius: 2,
      overflow: "hidden"
    };
  }
};

const Boxes = () => {
  return (
    <div css={classes.container(template)} className="flexRow">
      {template.layers.map((val, index) => (
        <div key={index} css={classes.bundledTemplate(template, index)}>
          {val}
        </div>
      ))}
    </div>
  );
};

export default Boxes;
