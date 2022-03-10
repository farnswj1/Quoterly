import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Register: React.FC = () => {
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<number | null>(null);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const data: FormData = new FormData();
    data.append('username', event.target.username.value);
    data.append('email', event.target.email.value);
    data.append('first_name', event.target.first_name.value);
    data.append('last_name', event.target.last_name.value);
    data.append('password', event.target.password.value);

    const url = process.env.REACT_APP_API_URL + 'users/register';

    axios.post(url, data)
      .then(response => {
        setSuccess(true);
        setError(null);
      })
      .catch(error => {
        setSuccess(false);
        setError(error.response.status);
      });
  };

  if (success) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ mb: 5 }}>Register</Typography>
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
              id="email"
              label="Email"
              sx={{ mb: 3 }}
              required
            />
            <TextField
              id="first_name"
              label="First Name"
              sx={{ mb: 3 }}
              required
            />
            <TextField
              id="last_name"
              label="Last Name"
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
          Have an account? <Link to="/login">Log in!</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
