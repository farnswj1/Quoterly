import React from 'react';
import { Container, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, UsersList, UserProfile, QuotesList, QuoteInfo } from 'views';
import Token from 'auth/Token';
import { Credentials } from 'types';

const App: React.FC = () => {
  const token: Token = new Token();
  const theme: Theme = createTheme({
    palette: {
      mode: 'light'
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"IBM Plex Sans"',
        '"Trebuchet MS"',
        '"Lucida Sans Unicode"',
        '"Lucida Grande"',
        '"Lucida Sans"',
        'Arial',
        'sans-serif'
      ].join(',')
    }
  });

  const login = (credentials: Credentials): void => {
    token.set(credentials);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ my: 5 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/quotes" element={<QuotesList />} />
            <Route path="/quotes/:id" element={<QuoteInfo />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
