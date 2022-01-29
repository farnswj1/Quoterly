import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const UserProfile = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = process.env.REACT_APP_API_URL + 'users/' + id;
    axios.get(url)
      .then(response => {
        setLoading(false);
        setUser(response.data.user);
        setQuotes(response.data.quotes);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setUser(null);
        setError(error.response.status);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h3">User Profile Page</Typography>
      {
        user && (
          <Box>
            <Typography>{user.username}</Typography>
            <Typography>{user.first_name}</Typography>
            <Typography>{user.last_name}</Typography>
            <Typography>{user.email}</Typography>
          </Box>
        )
      }
    </Box>
  );
};

export default UserProfile;