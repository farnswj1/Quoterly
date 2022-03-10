import React from 'react';
import { Container, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, QuoteInfo, QuotesList, Register, UsersList, UserProfile } from 'views';
import { Footer, Header } from 'components';
import { AuthenticationContext } from 'contexts';
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

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(Boolean(token.get()));

  const login = (credentials: Credentials): void => {
    token.set(credentials);
    setIsAuthenticated(true);
  };

  const logout = (): void => {
    token.delete();
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContext.Provider value={isAuthenticated}>
        <BrowserRouter>
          <CssBaseline />
          <Header logout={logout} />
          <Container sx={{ my: 5 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="/users/:id" element={<UserProfile />} />
                <Route path="/quotes" element={<QuotesList />} />
                <Route path="/quotes/:id" element={<QuoteInfo />} />
              </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </AuthenticationContext.Provider>
    </ThemeProvider>
  );
};

export default App;
