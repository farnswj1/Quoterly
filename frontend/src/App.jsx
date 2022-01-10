import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.theme = createTheme({
      palette: {
        mode: 'light'
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <CssBaseline />
        <Container sx={{ my: 5 }}>
          <BrowserRouter>
            <Routes>
              <Route exact path={"/"} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    );
  }
}
