import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { UsersList } from './views/UsersList';
import { UserProfile } from './views/UserProfile';
import { QuotesList } from './views/QuotesList';
import { Quote } from './views/Quote';
import Token from './auth/token';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.token = new Token();
    this.theme = createTheme({
      palette: {
        mode: 'light'
      }
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(credentials) {
    this.token.set(credentials);
    this.setState({});
  }

  logout() {
    this.token.delete();
    this.setState({});
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <CssBaseline />
        <Container sx={{ my: 5 }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route exact path="/users" component={UsersList} />
              <Route path="/users/:id(\d+)" component={UserProfile} />
              <Route exact path="/quotes" component={QuotesList} />
              <Route path="/quotes/:id(\d+)" component={Quote} />
            </Switch>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    );
  }
}
