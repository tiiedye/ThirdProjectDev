import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Projects from "./components/Projects/Projects"
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00ff8b',
      main: '#00ff8b',
      dark: '#00ff8b',
      contrastText: '#00ff8b',
    },
  },
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <Banner />

          <Route exact path="/projects" component={Projects} />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
