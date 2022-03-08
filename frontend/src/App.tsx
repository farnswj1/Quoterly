import React from 'react';
import { Container, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'views/Home';
import Login from 'views/Login';
import UsersList from 'views/UsersList';
import UserProfile from 'views/UserProfile';
import QuotesList from 'views/QuotesList';
import QuoteInfo from 'views/Quote';
import Token from 'auth/Token';
import { Credentials } from 'types';

const App: React.FC = () => {
  const token: Token = new Token();
  const theme: Theme = createTheme({
    palette: {
      mode: 'light'
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
            <Route path="/users/:id(\d+)" element={<UserProfile />} />
            <Route path="/quotes" element={<QuotesList />} />
            <Route path="/quotes/:id(\d+)" element={<QuoteInfo />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
