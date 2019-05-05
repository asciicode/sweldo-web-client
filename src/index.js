import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
// import * as serviceWorker from './serviceWorker';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
  },
  palette: {
    // primary: red,
    type: "dark"
  },
  overrides: {
    MuiTableCell: {
      // Name of the component ⚛️ / style sheet
      root: {
        // borderBottomColor: 'green'0
        padding: 0,
        "&:last-child": {
          paddingRight: 0
        }
      },
      body: {
        // color: 'white',
        fontSize: 12
      }
    },
    MuiInputBase: {},
    MuiFab: {
      root: {
        marginLeft: 8,
        marginRight: 8
      }
    },
    MuiPaper: {},
    MuiTypography: {}
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
