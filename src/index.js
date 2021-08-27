import React from "react";
import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import theme from "./styles/theme";
import { globalStyles } from "./styles/styles";
import Boxes from "./Boxes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Boxes />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
