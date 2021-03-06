import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Token from 'auth/Token';
import axios from 'axios';

interface Props {
  login: CallableFunction
}

const Login: React.FC<Props> = ({ login }) => {
  const token: string | null = new Token().get();
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<number | null>(null);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const data: FormData = new FormData();
    data.append('username', event.target.username.value);
    data.append('password', event.target.password.value);

    const url = process.env.REACT_APP_API_URL + 'login';

    axios.post(url, data)
      .then(response => {
        setSuccess(true);
        setError(null);
        login(response.data);
      })
      .catch(error => {
        setSuccess(false);
        setError(error.response.status);
      });
  };

  if (success || token) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ mb: 5 }}>Login</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined">
            {
              error && (
                <Typography sx={{ mb: 3 }} color="red">
                  Please enter a valid username and password.
                </Typography>
              )
            }
            <TextField
              id="username"
              label="Username"
              sx={{ mb: 3 }}
              required
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              sx={{ mb: 3 }}
              required
            />
          </FormControl>
          <Button variant="contained" type="submit" size="large">
            Login
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>
          Don't have an account? <Link to="/register">Sign up here!</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
